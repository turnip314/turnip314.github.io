import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { SupabaseService } from '../../shared/services/supabase.service';
import { UUID } from 'crypto';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private userId: string | undefined;
    private readonly platformId = inject(PLATFORM_ID);

    constructor(private supabaseService: SupabaseService) { }

    generateRandomCode(length: number): string {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    getUserId() {
        return this.userId;
    }

    async signInUser(): Promise<void> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .auth
            .signInAnonymously()
        if (error) throw error;

        this.userId = data.user?.id;
    }

    async getGame(gameCode: string, nickname: string): Promise<{ code: string, type: string, metadata: string }> {

        await this.createPlayer(gameCode, nickname)

        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('games')
            .select('*')
            .eq('code', gameCode)
            .single();

        if (error) throw error;

        return data;
    }

    async createGame(nickname: string): Promise<{code: string, type: string, metadata: string}> {
        const supabase = this.supabaseService.getClient();

        console.log("starting create")

        let gameObj = { type: 'hues', code: this.generateRandomCode(5) };
        await this.createPlayer(gameObj.code, nickname);
        console.log("create player")

        const { data, error } = await supabase
            .from('games')
            .insert(gameObj)
            .select()
            .single();

        console.log("create game")
        if (error) throw error;

        return data;
    }

    async getSelf() {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('players')
            .select('*')
            .eq('user_id', this.userId)
            .single();

        if (error) throw error;

        return data;
    }

    async createPlayer(gameCode: string, playerName: string): Promise<{ username: string, user_id: string, metadata: string, game_code: string, player_number: number }> {
        if (this.userId == undefined) await this.signInUser();

        const supabase = this.supabaseService.getClient();

        let userObj = {
            username: playerName,
            user_id: this.userId!!,
            game_code: gameCode,
        }
        const { data, error } = await supabase
            .from('players')
            .insert(userObj)
            .select()
            .single();

        if (error) throw error;

        return data
    }

    async getPlayers(gameCode: string): Promise<{ username: string, user_id: string, metadata: string, game_code: string, player_number: number }[]> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('players')
            .select()
            .eq('game_code', gameCode);

        if (error) throw error;

        return data;
    }

    async getGameMetadata(gameCode: string): Promise<string> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('games')
            .select()
            .eq('code', gameCode)
            .single();

        if (error) throw error;
        console.log(data)

        return data.metadata;
    }

    async setSelfMetadata(gameCode: string, metadata: string): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('players')
            .update(
                { metadata: metadata }
            )
            .eq('user_id', this.userId)
            .eq('game_code', gameCode)

        if (error) throw error;

        return true;
    }

    async setGameMetadata(gameCode: string, metadata: string): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('games')
            .update(
                {  metadata: metadata }
            )
            .eq('code', gameCode)
        if (error) throw error;

        return true;
    }

    async initializeGameState(gameCode: string): Promise<boolean> {
        const supabase = this.supabaseService.getClient();
        const response = await supabase
            .from('hues_data')
            .insert(
                {
                    game_code: gameCode,
                    turn: this.userId!!,
                    score: 0,
                    phase: 0
                }
            )

        if (response.error) throw response.error;

        return true
    }

    async submitClueAndResetPlayerStatus(gameCode: string, x: number, y: number, clue: string, phase: number): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        let clueObj = {
            'clue': clue,
            'x': x,
            'y': y,
            'game_code': gameCode,
            'phase': phase
        }
        const response = await supabase
            .from('hues_clue')
            .upsert(
                clueObj
            )
            .single();

        if (response.error) throw response.error;

        const playerMetadataResponse = await supabase.from('players').update({ metadata: "waiting" }).eq('game_code', gameCode);
        if (playerMetadataResponse.error) throw playerMetadataResponse.error;

        return true;
    }

    async resetTurnState(gameCode: string): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        let delResponse = await supabase.from('hues_guess').delete().eq('game_code', gameCode);
        if (delResponse.error) throw delResponse.error;

        delResponse = await supabase.from('hues_clue').delete().eq('game_code', gameCode);
        if (delResponse.error) throw delResponse.error;

        return true;
    }

    async getClue(gameCode: string, phase: number): Promise<{ clue: string, player_id: string, x: number, y: number, game_code: string, phase: number } | null> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('hues_clue')
            .select()
            .eq('game_code', gameCode)
            .eq('phase', phase)
            .maybeSingle();

        if (error) throw error;

        return data;
    }

    async submitGuess(gameCode: string, x: number, y: number, phase: number): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        let guessObj = {
            'x': x,
            'y': y,
            'game_code': gameCode,
            'phase': phase
        }
        const { data, error } = await supabase
            .from('hues_guess')
            .upsert(
                guessObj
            )

        if (error) throw error;

        return true;
    }

    async getGuesses(gameCode: string): Promise<{ player_id: string, x: number, y: number, game_code: string, phase: number }[]> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('hues_guess')
            .select()
            .eq('game_code', gameCode)

        if (error) throw error;

        return data;
    }

    async updateGameTurn(gameCode: string, player_id: string): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('hues_data')
            .update(
                { turn: player_id }
            )
            .eq('game_code', gameCode)

        if (error) throw error;

        return true;
    }

    async updateGameScore(gameCode: string, score: number): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('hues_data')
            .update(
                { score: score }
            )
            .eq('game_code', gameCode)

        if (error) throw error;

        return true;
    }

    async updateGamePhase(gameCode: string, phase: number): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('hues_data')
            .update(
                { phase: phase }
            )
            .eq('game_code', gameCode)

        if (error) throw error;

        return true;
    }

    async getGameData(gameCode: string): Promise<{game_code: string, turn: string, score: number, phase: number}> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('hues_data')
            .select()
            .eq('game_code', gameCode)
            .single()

        if (error) throw error;

        return data;
    }
}