import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { SupabaseService } from './supabase.service';
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

    async createGame(nickname: string) {
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

        await this.setGameMetadata(data.code, `turn:${this.userId}`);
        console.log("create metadata")

        return data;
    }

    async getSelf(gameCode: string) {
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

    async submitClueAndResetPlayerStatus(gameCode: string, x: number, y: number, clue: string): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        let clueObj = {
            'clue': clue,
            'x': x,
            'y': y,
            'player_id': this.userId!!,
            'game_code': gameCode
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

    async getClue(gameCode: string): Promise<{ clue: string, player_id: string, x: number, y: number, game_code: string } | null> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('hues_clue')
            .select()
            .eq('game_code', gameCode)
            .maybeSingle();

        if (error) throw error;

        return data;
    }

    async submitGuess(gameCode: string, x: number, y: number): Promise<boolean> {
        const supabase = this.supabaseService.getClient();

        let guessObj = {
            'x': x,
            'y': y,
            'game_code': gameCode
        }
        const { data, error } = await supabase
            .from('hues_guess')
            .insert(
                guessObj
            )

        if (error) throw error;

        return true;
    }

    async getGuesses(gameCode: string): Promise<{ player_id: string, x: number, y: number, game_code: string }[]> {
        const supabase = this.supabaseService.getClient();

        const { data, error } = await supabase
            .from('hues_guess')
            .select()
            .eq('game_code', gameCode)

        if (error) throw error;

        return data;
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
}