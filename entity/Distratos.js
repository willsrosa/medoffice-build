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
var DistratosParcelasDevolucao_1 = require("./DistratosParcelasDevolucao");
var Distratos = /** @class */ (function () {
    function Distratos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Distratos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CompradorCPF", length: 14 }),
        __metadata("design:type", String)
    ], Distratos.prototype, "compradorCpf", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CompradorNome", length: 50 }),
        __metadata("design:type", String)
    ], Distratos.prototype, "compradorNome", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Contrato", length: 5 }),
        __metadata("design:type", String)
    ], Distratos.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Quadra", length: 3 }),
        __metadata("design:type", String)
    ], Distratos.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Lote" }),
        __metadata("design:type", Number)
    ], Distratos.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataDistrato" }),
        __metadata("design:type", Date)
    ], Distratos.prototype, "dataDistrato", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "ValorDevolucao",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], Distratos.prototype, "valorDevolucao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "usuario", nullable: true }),
        __metadata("design:type", Number)
    ], Distratos.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "datahora", nullable: true }),
        __metadata("design:type", Date)
    ], Distratos.prototype, "datahora", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "situacao" }),
        __metadata("design:type", Number)
    ], Distratos.prototype, "situacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], Distratos.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "ecivil", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Distratos.prototype, "ecivil", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "profissao", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], Distratos.prototype, "profissao", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "nacionalidade", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], Distratos.prototype, "nacionalidade", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "rg", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Distratos.prototype, "rg", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "aprovadoem", nullable: true }),
        __metadata("design:type", Date)
    ], Distratos.prototype, "aprovadoem", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "fruto_troca", nullable: true }),
        __metadata("design:type", Number)
    ], Distratos.prototype, "frutoTroca", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return DistratosParcelasDevolucao_1.DistratosParcelasDevolucao; }, function (distratosParcelasDevolucao) { return distratosParcelasDevolucao.distrato; }),
        __metadata("design:type", Array)
    ], Distratos.prototype, "distratosParcelasDevolucaos", void 0);
    Distratos = __decorate([
        typeorm_1.Index("PK_DistratosParcelasDevolucao", ["id"], { unique: true }),
        typeorm_1.Entity("Distratos", { schema: "dbo" })
    ], Distratos);
    return Distratos;
}());
exports.Distratos = Distratos;
//# sourceMappingURL=Distratos.js.map