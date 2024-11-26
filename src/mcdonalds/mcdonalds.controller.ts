import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { McDonaldsService } from './mcdonalds.service';


@Controller('mcdonalds')
export class McDonaldsController {
  constructor(private mcDonaldsService: McDonaldsService) {}

  @MessagePattern('create_fila')
  handleCreateCartMessage(@Payload() data: any) {
    console.log('Mensagem recebida do RabbitMQ:', data);
  }
}

