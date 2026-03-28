import { SupabaseService } from "../../../shared/services/supabase.service";
import { GameService } from "./game.service";

export class HuesService extends GameService{

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

    async getGameData(gameCode: string): Promise<{ game_code: string, turn: string, score: number, phase: number }> {
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