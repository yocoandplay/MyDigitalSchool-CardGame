import { DeckModel, DeckWithCardsModel } from "../../models/models";

import { IAbstractService } from "./iabstract.service";

export interface IDeckService extends IAbstractService<DeckModel> {
    findById(id: string): Promise<DeckWithCardsModel>;
}