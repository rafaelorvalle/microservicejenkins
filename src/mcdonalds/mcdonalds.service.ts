import { Injectable } from '@nestjs/common';
import { fila } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { RabbitmqService } from '../rabbitmq/rabbitmq.service';

@Injectable()
export class McDonaldsService {

    constructor(
        private prismaService: PrismaService,
        private rabbitmqService: RabbitmqService
    ) {}

    async criarFila(data: fila): Promise<fila> {
        const novofila = await this.prismaService.fila.create({ data });

        this.rabbitmqService.sendToQueue('create_fila', {
            message: 'Fila!',
            id: novofila.id,
            ordem: novofila.ordem
        });

        return novofila;
    }
}
