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
var CadastrosIptu = /** @class */ (function () {
    function CadastrosIptu() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], CadastrosIptu.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], CadastrosIptu.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Quadra", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], CadastrosIptu.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Lote", nullable: true }),
        __metadata("design:type", Number)
    ], CadastrosIptu.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("decimal", {
            name: "metros",
            nullable: true,
            precision: 10,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], CadastrosIptu.prototype, "metros", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CodigoImovel", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], CadastrosIptu.prototype, "codigoImovel", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "InscricaoImovel", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], CadastrosIptu.prototype, "inscricaoImovel", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "MatriculaImovel", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], CadastrosIptu.prototype, "matriculaImovel", void 0);
    __decorate([
        typeorm_1.Column("decimal", {
            name: "ValorIptuPago",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], CadastrosIptu.prototype, "valorIptuPago", void 0);
    __decorate([
        typeorm_1.Column("decimal", {
            name: "TaxaLimpezaPago",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], CadastrosIptu.prototype, "taxaLimpezaPago", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "SituacaoCarteira", nullable: true }),
        __metadata("design:type", Number)
    ], CadastrosIptu.prototype, "situacaoCarteira", void 0);
    CadastrosIptu = __decorate([
        typeorm_1.Index("PK_CadastrosIptu", ["id"], { unique: true }),
        typeorm_1.Entity("CadastrosIptu", { schema: "dbo" })
    ], CadastrosIptu);
    return CadastrosIptu;
}());
exports.CadastrosIptu = CadastrosIptu;
//# sourceMappingURL=CadastrosIptu.js.map