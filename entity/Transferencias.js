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
var Transferencias = /** @class */ (function () {
    function Transferencias() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Transferencias.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Loteamento" }),
        __metadata("design:type", Number)
    ], Transferencias.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "VendedorCPF", length: 14 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "vendedorCpf", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "VendedorNome", length: 50 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "vendedorNome", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CompradorCPF", length: 14 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "compradorCpf", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CompradorNome", length: 50 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "compradorNome", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Contrato", length: 5 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Quadra", length: 3 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Lote" }),
        __metadata("design:type", Number)
    ], Transferencias.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataTransferencia" }),
        __metadata("design:type", Date)
    ], Transferencias.prototype, "dataTransferencia", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "usuario", nullable: true }),
        __metadata("design:type", Number)
    ], Transferencias.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "datahora", nullable: true }),
        __metadata("design:type", Date)
    ], Transferencias.prototype, "datahora", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "situacao" }),
        __metadata("design:type", Number)
    ], Transferencias.prototype, "situacao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nacionalidade", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "nacionalidade", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "rg", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "rg", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ecivil", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "ecivil", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "telefone", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "telefone", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "profissao", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "profissao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "endereco", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "endereco", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "cep", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "cep", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "bairro", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "bairro", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "cidade", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "cidade", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "valorCobrado",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], Transferencias.prototype, "valorCobrado", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "aprovadoem", nullable: true }),
        __metadata("design:type", Date)
    ], Transferencias.prototype, "aprovadoem", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "uf", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "uf", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ConjugeNome", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "conjugeNome", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "ConjugeNacionalidade",
            nullable: true,
            length: 40,
        }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "conjugeNacionalidade", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ConjugeProfissao", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "conjugeProfissao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ConjugeRg", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "conjugeRg", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ConjugeCpf", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], Transferencias.prototype, "conjugeCpf", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "ConjugeDtNasc", nullable: true }),
        __metadata("design:type", Date)
    ], Transferencias.prototype, "conjugeDtNasc", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "valorcessao",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], Transferencias.prototype, "valorcessao", void 0);
    Transferencias = __decorate([
        typeorm_1.Entity("Transferencias", { schema: "dbo" })
    ], Transferencias);
    return Transferencias;
}());
exports.Transferencias = Transferencias;
//# sourceMappingURL=Transferencias.js.map