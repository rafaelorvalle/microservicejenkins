import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class RabbitmqService {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'], // Endereço do RabbitMQ
      queue: 'mcdonalds_queue', // Nome da fila
    },
  })
  client: ClientProxy;

  sendToQueue(pattern: string, data: any) {
    return this.client.send(pattern, data);
  }
}
