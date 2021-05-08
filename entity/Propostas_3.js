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
var Propostas_3 = /** @class */ (function () {
    function Propostas_3() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ID" }),
        __metadata("design:type", Number)
    ], Propostas_3.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "COMPRADOR", length: 60 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "comprador", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "NACIONALIDADECOMPRADOR",
            nullable: true,
            length: 30,
        }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "nacionalidadecomprador", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "RG", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "rg", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CPF", length: 14 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "ECIVIL", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "ecivil", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DTNASC", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas_3.prototype, "dtnasc", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "PROFISSAO", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "profissao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EMAIL", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ENDERECORES", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "enderecores", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BAIRRORES", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "bairrores", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CEPRES", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "cepres", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CIDADERES", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "cidaderes", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ENDERECOCOM", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "enderecocom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BAIRROCOM", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "bairrocom", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CEPCOM", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "cepcom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CIDADECOM", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "cidadecom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CONJUGE", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "conjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "NACIONALIDADECONJUGE",
            nullable: true,
            length: 30,
        }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "nacionalidadeconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ECIVILCONJUGE", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "ecivilconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "PROFISSAOCONJUGE", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "profissaoconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "RGCONJUGE", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "rgconjuge", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CPFCONJUGE", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "cpfconjuge", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DTNASCCONJUGE", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas_3.prototype, "dtnascconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ENDERECORESCONJUGE", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "enderecoresconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BAIRRORESCONJUGE", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "bairroresconjuge", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CEPRESCONJUGE", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "cepresconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CIDADERESCONJUGE", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "cidaderesconjuge", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATA_GRAVACAO", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas_3.prototype, "dataGravacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "USUARIO", nullable: true }),
        __metadata("design:type", Number)
    ], Propostas_3.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "FONE_RES", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "foneRes", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "FONE_COM", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "foneCom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "FONE_CEL", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], Propostas_3.prototype, "foneCel", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "RG2_EXPEDICAO", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas_3.prototype, "rg2Expedicao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Propostas_1.Propostas; }, function (propostas) { return propostas.propostasS2; }, {
            onDelete: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "PROPOSTA", referencedColumnName: "id" }]),
        __metadata("design:type", Propostas_1.Propostas)
    ], Propostas_3.prototype, "proposta", void 0);
    Propostas_3 = __decorate([
        typeorm_1.Index("PK_PROPOSTAS_3", ["id"], { unique: true }),
        typeorm_1.Entity("PROPOSTAS_3", { schema: "dbo" })
    ], Propostas_3);
    return Propostas_3;
}());
exports.Propostas_3 = Propostas_3;
//# sourceMappingURL=Propostas_3.js.map