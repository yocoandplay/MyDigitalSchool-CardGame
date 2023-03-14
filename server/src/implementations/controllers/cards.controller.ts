import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpDelete, httpGet, httpPatch, httpPut, request, response } from 'inversify-express-utils';
import { IAbstractService } from '../../interfaces/services/iabstract.service';
import SERVICES_TYPES from '../../interfaces/services/service.types';
import { CardModel } from '../../models/models';

@controller('/api/cards')
export class CardsController {
    constructor(@inject(SERVICES_TYPES.CardsService) private readonly cardsService: IAbstractService<CardModel>) {}

    @httpGet('')
    public async getAll(@request() req: Request, @response() res: Response): Promise<void> {
        try {
            console.log('[GET] /api/cards');
            const values: CardModel[] = await this.cardsService.findAll();
            res.status(200).send(values);
        } catch (error: any) {
            console.error('Error : ', error);
            res.status(500).send({ message: error.message });
        }
    }

    @httpGet('/:id')
    public async getById(@request() req: Request, @response() res: Response): Promise<void> {
        try {
            const id: string = req.params.id;
            console.log(`[GET] /api/Decks/${id}`);
            const value: CardModel = await this.cardsService.findById(id);
            res.status(200).send(value);
        } catch (error: any) {
            console.error('Error : ', error);
            res.status(500).send({ message: error.message });
        }
    }

    @httpPut('')
    public async create(@request() req: Request, @response() res: Response): Promise<void> {
        try {
            const card: Partial<CardModel> = req.body;
            console.log('[PUT] /api/cards', card);
            const createdCard: CardModel = await this.cardsService.create(card);
            res.status(200).send(createdCard);
        } catch (error: any) {
            console.error('Error : ', error);
            res.status(500).send({ message: error.message });
        }
    }

    @httpPatch('')
    public async update(@request() req: Request, @response() res: Response): Promise<void> {
        try {
            const card: CardModel = req.body;
            console.log('[PATCH] /api/cards', card);
            const updatedCard: CardModel = await this.cardsService.update(card);
            res.status(200).send(updatedCard);
        } catch (error: any) {
            console.error('Error : ', error);
            res.status(500).send({ message: error.message });
        }
    }

    @httpDelete('/:id')
    public async delete(@request() req: Request, @response() res: Response): Promise<void> {
        try {
            const id: string = req.params.id;
            console.log('[DEL] /api/cards', { id });
            await this.cardsService.delete(id);
            res.status(200).send();
        } catch (error: any) {
            console.error('Error : ', error);
            res.status(500).send({ message: error.message });
        }
    }
}