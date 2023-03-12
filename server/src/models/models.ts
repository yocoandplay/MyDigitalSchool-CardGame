export interface BaseModel {
    id?: string | undefined;
}

export interface CardModel extends BaseModel {
    name: string;
    value: number;
}

export interface DeckModel extends BaseModel {
    name: string;
    cards: string[];
}

export interface DeckWithCardsModel extends BaseModel {
    name: string;
    cards: CardModel[];
}