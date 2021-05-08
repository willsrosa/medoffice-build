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
var LotesParcelasAlteracoes = /** @class */ (function () {
    function LotesParcelasAlteracoes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], LotesParcelasAlteracoes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], LotesParcelasAlteracoes.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Nossonumero", nullable: true, length: 9 }),
        __metadata("design:type", String)
    ], LotesParcelasAlteracoes.prototype, "nossonumero", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataRequisicao", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelasAlteracoes.prototype, "dataRequisicao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "SolicitadoPor", nullable: true }),
        __metadata("design:type", Number)
    ], LotesParcelasAlteracoes.prototype, "solicitadoPor", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "Vencimento", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelasAlteracoes.prototype, "vencimento", void 0);
    __decorate([
        typeorm_1.Column("decimal", { name: "Valor", nullable: true, precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], LotesParcelasAlteracoes.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataPagamento", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelasAlteracoes.prototype, "dataPagamento", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "Observacoes", nullable: true, length: 250 }),
        __metadata("design:type", String)
    ], LotesParcelasAlteracoes.prototype, "observacoes", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataAprovacao", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelasAlteracoes.prototype, "dataAprovacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "AprovadoPor", nullable: true }),
        __metadata("design:type", Number)
    ], LotesParcelasAlteracoes.prototype, "aprovadoPor", void 0);
    LotesParcelasAlteracoes = __decorate([
        typeorm_1.Index("PK_Lotes_parcelas_alteracoes", ["id"], { unique: true }),
        typeorm_1.Entity("Lotes_parcelas_alteracoes", { schema: "dbo" })
    ], LotesParcelasAlteracoes);
    return LotesParcelasAlteracoes;
}());
exports.LotesParcelasAlteracoes = LotesParcelasAlteracoes;
//# sourceMappingURL=LotesParcelasAlteracoes.js.map