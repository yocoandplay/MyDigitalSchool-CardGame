import { inject, injectable } from "inversify";
import { CardModel } from "../../models/models";
import DALS_TYPES from '../../interfaces/dals/dal.types';
import { IAbstractDal } from "../../interfaces/dals/iabstract.dals";
import { AbstractService } from "./abstract.service";

@injectable()
export class CardsService extends AbstractService<CardModel> {
    constructor(@inject(DALS_TYPES.CardsDal) private readonly cardsDal: IAbstractDal<CardModel>) {
        super(cardsDal);
    }

}