import { CardModel, DeckModel } from "../models/models";
import { Container, injectable } from "inversify";

import { CardsService } from "../implementations/services/cards.service";
import { DecksService } from "../implementations/services/decks.service";
import { IAbstractService } from "../interfaces/services/iabstract.service";
import SERVICES_TYPES from '../interfaces/services/service.types';

@injectable()
export class IocServices {
    static register(container: Container) {
        container.bind<IAbstractService<CardModel>>(SERVICES_TYPES.CardsService).to(CardsService);
        container.bind<IAbstractService<DeckModel>>(SERVICES_TYPES.DecksService).to(DecksService);
    }
}