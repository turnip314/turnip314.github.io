import { Injectable } from "@angular/core";
import { SupabaseService } from "../../../shared/services/supabase.service";
import { GameService } from "./game.service";


@Injectable({
    providedIn: 'root'
})
export class CardsService extends GameService {
    constructor(protected supabaseService: SupabaseService) {
        super(supabaseService);
    }

    async createGame(nickname: string): Promise<{code: string, type: string, metadata: string}> {
        const supabase = this.supabaseService.getClient();

        console.log("starting create")
        const gameCode = this.generateRandomCode(6);

        const { error } = await supabase
            .from('games')
            .insert({
                code: gameCode,
                type: 'cards',
                metadata: JSON.stringify({
                    players: [
                        {
                            nickname,
                            hand: []
                        }
                    ]
                })
            });

        if (error) throw error;

        return { code: gameCode, type: 'cards', metadata: JSON.stringify({ players: [{ nickname, hand: [] }] }) };
    }
}