export class Textures {
    static cardTexture: any;
    static cardBackTexture: any;

    static async loadCardTextures(PIXI: any) {
       Textures.cardTexture = await PIXI.Assets.load('../../../assets/sprites/cards.png'); 
       Textures.cardBackTexture = await PIXI.Assets.load('../../../assets/sprites/card_back.png');
    }
}