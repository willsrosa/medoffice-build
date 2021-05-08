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
var LotesDistratos = /** @class */ (function () {
    function LotesDistratos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], LotesDistratos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "dataContrato", nullable: true }),
        __metadata("design:type", Date)
    ], LotesDistratos.prototype, "dataContrato", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "dataDistrato", nullable: true }),
        __metadata("design:type", Date)
    ], LotesDistratos.prototype, "dataDistrato", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], LotesDistratos.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "contrato", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], LotesDistratos.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "digito", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], LotesDistratos.prototype, "digito", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "obs", nullable: true, length: 1000 }),
        __metadata("design:type", String)
    ], LotesDistratos.prototype, "obs", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "valorContrato",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesDistratos.prototype, "valorContrato", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "valorDevolucao",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesDistratos.prototype, "valorDevolucao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nomeCliente", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], LotesDistratos.prototype, "nomeCliente", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "cpf", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], LotesDistratos.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "rg", nullable: true, length: 15 }),
        __metadata("design:type", String)
    ], LotesDistratos.prototype, "rg", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "quadra", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], LotesDistratos.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "lote", nullable: true }),
        __metadata("design:type", Number)
    ], LotesDistratos.prototype, "lote", void 0);
    LotesDistratos = __decorate([
        typeorm_1.Entity("Lotes_distratos", { schema: "dbo" })
    ], LotesDistratos);
    return LotesDistratos;
}());
exports.LotesDistratos = LotesDistratos;
//# sourceMappingURL=LotesDistratos.js.map