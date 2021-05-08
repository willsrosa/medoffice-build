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
var Propostas_2_1 = require("./Propostas_2");
var Propostas_3_1 = require("./Propostas_3");
var Propostas = /** @class */ (function () {
    function Propostas() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ID" }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTEAMENTO", nullable: true }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "QUADRA", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTE", nullable: true }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CONTRATO", length: 5 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "DIGITO", length: 1 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "digito", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATAPROPOSTA" }),
        __metadata("design:type", Date)
    ], Propostas.prototype, "dataproposta", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "COMPRADOR", length: 60 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "comprador", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "NACIONALIDADECOMPRADOR",
            nullable: true,
            length: 30,
        }),
        __metadata("design:type", String)
    ], Propostas.prototype, "nacionalidadecomprador", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "RG", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "rg", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CPF", length: 14 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "ECIVIL", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "ecivil", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DTNASC", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas.prototype, "dtnasc", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "PROFISSAO", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "profissao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EMAIL", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ENDERECORES", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "enderecores", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BAIRRORES", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "bairrores", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CEPRES", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "cepres", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CIDADERES", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "cidaderes", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ENDERECOCOM", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "enderecocom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BAIRROCOM", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "bairrocom", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CEPCOM", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "cepcom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CIDADECOM", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "cidadecom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CONJUGE", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "conjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "NACIONALIDADECONJUGE",
            nullable: true,
            length: 30,
        }),
        __metadata("design:type", String)
    ], Propostas.prototype, "nacionalidadeconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ECIVILCONJUGE", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "ecivilconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "PROFISSAOCONJUGE", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "profissaoconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "RGCONJUGE", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "rgconjuge", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CPFCONJUGE", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "cpfconjuge", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DTNASCCONJUGE", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas.prototype, "dtnascconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ENDERECORESCONJUGE", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "enderecoresconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BAIRRORESCONJUGE", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "bairroresconjuge", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CEPRESCONJUGE", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "cepresconjuge", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CIDADERESCONJUGE", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "cidaderesconjuge", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "VALOR_CONTRATO", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "valorContrato", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "VALOR_SINAL", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "valorSinal", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "VALOR_ENTRADA", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "valorEntrada", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "NR_PARCELAS", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "nrParcelas", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "VENCIMENTO_PRIMEIRA" }),
        __metadata("design:type", Date)
    ], Propostas.prototype, "vencimentoPrimeira", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "VALOR_PARCELA", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "valorParcela", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "SITUACAO", default: function () { return "(1)"; } }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "situacao", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATA_GRAVACAO", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas.prototype, "dataGravacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "USUARIO", nullable: true }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "FONE_RES", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "foneRes", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "FONE_COM", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "foneCom", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "FONE_CEL", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "foneCel", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "TESTEMUNHA1",
            nullable: true,
            length: 60,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Propostas.prototype, "testemunha1", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "TESTEMUNHA2",
            nullable: true,
            length: 60,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Propostas.prototype, "testemunha2", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FORMA_PAGAMENTO",
            nullable: true,
            length: 1000,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Propostas.prototype, "formaPagamento", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "RG_EXPEDICAO", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas.prototype, "rgExpedicao", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "SALDO_DEVEDOR",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "saldoDevedor", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATA_ENTRADA", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas.prototype, "dataEntrada", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "nossonumero", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "nossonumero", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "vctoboleto", nullable: true }),
        __metadata("design:type", Date)
    ], Propostas.prototype, "vctoboleto", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "indice",
            nullable: true,
            precision: 10,
            scale: 7,
        }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "indice", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "corretor", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "corretor", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "financiado", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Propostas.prototype, "financiado", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "pgto_avista", nullable: true }),
        __metadata("design:type", Number)
    ], Propostas.prototype, "pgtoAvista", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Propostas_2_1.Propostas_2; }, function (propostas_2) { return propostas_2.proposta; }),
        __metadata("design:type", Array)
    ], Propostas.prototype, "propostasS", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Propostas_3_1.Propostas_3; }, function (propostas_3) { return propostas_3.proposta; }),
        __metadata("design:type", Array)
    ], Propostas.prototype, "propostasS2", void 0);
    Propostas = __decorate([
        typeorm_1.Index("IX_PROPOSTAS_LOTEAMENTO_CONTRATO", ["loteamento", "contrato"], {}),
        typeorm_1.Index("IX_PROPOSTAS_LOTEAMENTO_CONTRATO_SITUACAO", [
            "id",
            "quadra",
            "lote",
            "digito",
            "dataproposta",
            "comprador",
            "nacionalidadecomprador",
            "rg",
            "cpf",
            "ecivil",
            "dtnasc",
            "profissao",
            "email",
            "enderecores",
            "bairrores",
            "cepres",
            "cidaderes",
            "enderecocom",
            "bairrocom",
            "cepcom",
            "cidadecom",
            "conjuge",
            "nacionalidadeconjuge",
            "ecivilconjuge",
            "profissaoconjuge",
            "rgconjuge",
            "cpfconjuge",
            "dtnascconjuge",
            "enderecoresconjuge",
            "bairroresconjuge",
            "cepresconjuge",
            "cidaderesconjuge",
            "valorContrato",
            "valorSinal",
            "valorEntrada",
            "nrParcelas",
            "vencimentoPrimeira",
            "valorParcela",
            "dataGravacao",
            "usuario",
            "foneRes",
            "foneCom",
            "foneCel",
            "testemunha1",
            "testemunha2",
            "formaPagamento",
            "rgExpedicao",
            "saldoDevedor",
            "dataEntrada",
            "nossonumero",
            "vctoboleto",
            "indice",
            "corretor",
            "loteamento",
            "contrato",
            "situacao",
        ], {}),
        typeorm_1.Index("IX_PROPOSTAS_LOTEAMENTO_CONTRATO1", [
            "id",
            "quadra",
            "lote",
            "digito",
            "dataproposta",
            "comprador",
            "nacionalidadecomprador",
            "rg",
            "cpf",
            "ecivil",
            "dtnasc",
            "profissao",
            "email",
            "enderecores",
            "bairrores",
            "cepres",
            "cidaderes",
            "enderecocom",
            "bairrocom",
            "cepcom",
            "cidadecom",
            "conjuge",
            "nacionalidadeconjuge",
            "ecivilconjuge",
            "profissaoconjuge",
            "rgconjuge",
            "cpfconjuge",
            "dtnascconjuge",
            "enderecoresconjuge",
            "bairroresconjuge",
            "cepresconjuge",
            "cidaderesconjuge",
            "valorContrato",
            "valorSinal",
            "valorEntrada",
            "nrParcelas",
            "vencimentoPrimeira",
            "valorParcela",
            "situacao",
            "dataGravacao",
            "usuario",
            "foneRes",
            "foneCom",
            "foneCel",
            "testemunha1",
            "testemunha2",
            "formaPagamento",
            "rgExpedicao",
            "saldoDevedor",
            "dataEntrada",
            "nossonumero",
            "vctoboleto",
            "indice",
            "corretor",
            "loteamento",
            "contrato",
        ], {}),
        typeorm_1.Index("IX_PROPOSTAS_LOTEAMENTO_QUADRA_LOTE", ["loteamento", "quadra", "lote"], {}),
        typeorm_1.Index("PK_PROPOSTAS", ["id"], { unique: true }),
        typeorm_1.Entity("PROPOSTAS", { schema: "dbo" })
    ], Propostas);
    return Propostas;
}());
exports.Propostas = Propostas;
//# sourceMappingURL=Propostas.js.map