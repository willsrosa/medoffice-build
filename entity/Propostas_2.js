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
var Propostas_1 = require("./Propostas");
var Propostas_2 = /** @class */ (function () {
    function Propostas_2() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ID" }),
        __metadata("design:type", Number)
    ], Propostas_2.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "COMPRADOR", length: 60 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "comprador", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "NACIONALIDADECOMPRADOR",
            nullable: true,
            length: 30,
        }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "nacionalidadecomprador", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "RG", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "rg", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CPF", length: 14 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "ECIVIL", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "ecivil", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DTNASC", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas_2.prototype, "dtnasc", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "PROFISSAO", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "profissao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EMAIL", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ENDERECORES", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "enderecores", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BAIRRORES", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "bairrores", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CEPRES", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "cepres", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CIDADERES", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "cidaderes", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ENDERECOCOM", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "enderecocom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BAIRROCOM", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "bairrocom", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CEPCOM", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "cepcom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CIDADECOM", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "cidadecom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CONJUGE", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "conjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "NACIONALIDADECONJUGE",
            nullable: true,
            length: 30,
        }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "nacionalidadeconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ECIVILCONJUGE", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "ecivilconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "PROFISSAOCONJUGE", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "profissaoconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "RGCONJUGE", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "rgconjuge", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CPFCONJUGE", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "cpfconjuge", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DTNASCCONJUGE", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas_2.prototype, "dtnascconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ENDERECORESCONJUGE", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "enderecoresconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BAIRRORESCONJUGE", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "bairroresconjuge", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CEPRESCONJUGE", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "cepresconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CIDADERESCONJUGE", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "cidaderesconjuge", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATA_GRAVACAO", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas_2.prototype, "dataGravacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "USUARIO", nullable: true }),
        __metadata("design:type", Number)
    ], Propostas_2.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "FONE_RES", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "foneRes", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "FONE_COM", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "foneCom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "FONE_CEL", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], Propostas_2.prototype, "foneCel", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "RG2_EXPEDICAO", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas_2.prototype, "rg2Expedicao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Propostas_1.Propostas; }, function (propostas) { return propostas.propostasS; }, {
            onDelete: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "PROPOSTA", referencedColumnName: "id" }]),
        __metadata("design:type", Propostas_1.Propostas)
    ], Propostas_2.prototype, "proposta", void 0);
    Propostas_2 = __decorate([
        typeorm_1.Index("PK_PROPOSTAS_2", ["id"], { unique: true }),
        typeorm_1.Entity("PROPOSTAS_2", { schema: "dbo" })
    ], Propostas_2);
    return Propostas_2;
}());
exports.Propostas_2 = Propostas_2;
//# sourceMappingURL=Propostas_2.js.map