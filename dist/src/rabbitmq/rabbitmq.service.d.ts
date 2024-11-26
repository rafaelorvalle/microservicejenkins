import { ClientProxy } from '@nestjs/microservices';
export declare class RabbitmqService {
    client: ClientProxy;
    sendToQueue(pattern: string, data: any): import("rxjs").Observable<any>;
}
