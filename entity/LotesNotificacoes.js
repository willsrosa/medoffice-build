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
var typeorm_1 = require("typeorm");
var LotesNotificacoes = /** @class */ (function () {
    function LotesNotificacoes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], LotesNotificacoes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], LotesNotificacoes.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Contrato", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], LotesNotificacoes.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Cpf", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], LotesNotificacoes.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataNotificacao", nullable: true }),
        __metadata("design:type", Date)
    ], LotesNotificacoes.prototype, "dataNotificacao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "Notificacao", nullable: true, length: 1000 }),
        __metadata("design:type", String)
    ], LotesNotificacoes.prototype, "notificacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], LotesNotificacoes.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], LotesNotificacoes.prototype, "dataHora", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "extrajudicial", nullable: true }),
        __metadata("design:type", Number)
    ], LotesNotificacoes.prototype, "extrajudicial", void 0);
    LotesNotificacoes = __decorate([
        typeorm_1.Index("PK_LOTES_NOTIFICACOES", ["id"], { unique: true }),
        typeorm_1.Entity("LOTES_NOTIFICACOES", { schema: "dbo" })
    ], LotesNotificacoes);
    return LotesNotificacoes;
}());
exports.LotesNotificacoes = LotesNotificacoes;
//# sourceMappingURL=LotesNotificacoes.js.map