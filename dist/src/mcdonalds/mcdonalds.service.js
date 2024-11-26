"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.McDonaldsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const rabbitmq_service_1 = require("../rabbitmq/rabbitmq.service");
let McDonaldsService = class McDonaldsService {
    constructor(prismaService, rabbitmqService) {
        this.prismaService = prismaService;
        this.rabbitmqService = rabbitmqService;
    }
    async criarFila(data) {
        const novofila = await this.prismaService.fila.create({ data });
        this.rabbitmqService.sendToQueue('create_fila', {
            message: 'Fila!',
            id: novofila.id,
            ordem: novofila.ordem
        });
        return novofila;
    }
};
exports.McDonaldsService = McDonaldsService;
exports.McDonaldsService = McDonaldsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        rabbitmq_service_1.RabbitmqService])
], McDonaldsService);
//# sourceMappingURL=mcdonalds.service.js.map