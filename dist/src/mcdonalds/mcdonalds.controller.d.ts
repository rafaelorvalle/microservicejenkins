import { McDonaldsService } from './mcdonalds.service';
export declare class McDonaldsController {
    private mcDonaldsService;
    constructor(mcDonaldsService: McDonaldsService);
    handleCreateCartMessage(data: any): void;
}
