import { fila } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { RabbitmqService } from '../rabbitmq/rabbitmq.service';
export declare class McDonaldsService {
    private prismaService;
    private rabbitmqService;
    constructor(prismaService: PrismaService, rabbitmqService: RabbitmqService);
    criarFila(data: fila): Promise<fila>;
}
