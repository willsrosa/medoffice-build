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
var LotesParcelas = /** @class */ (function () {
    function LotesParcelas() {
    }
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "PC_LOTEAMENTO" }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcLoteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "PC_QUADRA", length: 3, default: function () { return "(0)"; } }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "pcQuadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_LOTE" }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcLote", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_ITEM" }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcItem", void 0);
    __decorate([
        typeorm_1.Column("smallint", {
            primary: true,
            name: "PC_VERSAO",
            default: function () { return "(1)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcVersao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_CLIENTE", default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcCliente", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "PC_DATA", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelas.prototype, "pcData", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_VALOR",
            nullable: true,
            precision: 17,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcValor", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "PC_VENCIMENTO", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelas.prototype, "pcVencimento", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            primary: true,
            name: "PC_NOSSONUMERO",
            length: 10,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "pcNossonumero", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_PORTADOR", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcPortador", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_VALORCORRIGIDO",
            nullable: true,
            precision: 17,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcValorcorrigido", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_IGPREF",
            nullable: true,
            precision: 12,
            scale: 4,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcIgpref", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_IGPATUAL",
            nullable: true,
            precision: 12,
            scale: 4,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcIgpatual", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "PC_DATAPAGTO", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelas.prototype, "pcDatapagto", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_SITUACAO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcSituacao", void 0);
    __decorate([
        typeorm_1.Column("int", {
            name: "PC_MES_IGP_REF",
            nullable: true,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcMesIgpRef", void 0);
    __decorate([
        typeorm_1.Column("int", {
            name: "PC_ANO_IGP_REF",
            nullable: true,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcAnoIgpRef", void 0);
    __decorate([
        typeorm_1.Column("int", {
            name: "PC_MES_IGP_ATU",
            nullable: true,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcMesIgpAtu", void 0);
    __decorate([
        typeorm_1.Column("int", {
            name: "PC_ANO_IGP_ATU",
            nullable: true,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcAnoIgpAtu", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_VALORPAGO",
            nullable: true,
            precision: 17,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcValorpago", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_TIPOPAGTO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcTipopagto", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_MULTA",
            nullable: true,
            precision: 15,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcMulta", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_JUROS",
            nullable: true,
            precision: 15,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcJuros", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_VALORCR",
            nullable: true,
            precision: 15,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcValorcr", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_VALORRE",
            nullable: true,
            precision: 15,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcValorre", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_MOEDA", nullable: true }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcMoeda", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_ORDEMBAIXA", nullable: true }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcOrdembaixa", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_DESC",
            precision: 15,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcDesc", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PC_VRTARIFA",
            nullable: true,
            precision: 15,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcVrtarifa", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "PC_PAGTO_BANCO", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "pcPagtoBanco", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "PC_TPPAGO", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "pcTppago", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "PC_RETORNO", nullable: true, length: 15 }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "pcRetorno", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "PC_NRBANCO", nullable: true, length: 15 }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "pcNrbanco", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "PC_CONDICAO", length: 1, default: function () { return "'N'"; } }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "pcCondicao", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "NOSSO_NUMERO_ANT", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "nossoNumeroAnt", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "PC_CPF", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "pcCpf", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "pc_novo_vencimento", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelas.prototype, "pcNovoVencimento", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "pc_vencimento_anterior", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelas.prototype, "pcVencimentoAnterior", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "pc_vencimento_aprovadopor", nullable: true }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcVencimentoAprovadopor", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "pc_vencimento_aprovadoem", nullable: true }),
        __metadata("design:type", Date)
    ], LotesParcelas.prototype, "pcVencimentoAprovadoem", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "pc_mes_ult_reaj", nullable: true }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcMesUltReaj", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "pc_ano_ult_reaj", nullable: true }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcAnoUltReaj", void 0);
    __decorate([
        typeorm_1.Column("decimal", {
            name: "pc_perc_ult_reaj",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcPercUltReaj", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "pc_valor_antes_reaj",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesParcelas.prototype, "pcValorAntesReaj", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "pc_obs", nullable: true, length: 1000 }),
        __metadata("design:type", String)
    ], LotesParcelas.prototype, "pcObs", void 0);
    LotesParcelas = __decorate([
        typeorm_1.Index("IX_LOTES_PARCELAS_PC_LOTEAMENTO_PC_DATAPAGTO_PC_ANO_IGP_ATU", ["pcData", "pcNossonumero", "pcLoteamento", "pcDatapagto", "pcAnoIgpAtu"], {}),
        typeorm_1.Index("IX_LOTES_PARCELAS_PC_LOTEAMENTO_PC_DATAPAGTO_PC_CPF_PC_NOSSONUMERO", [
            "pcData",
            "pcValor",
            "pcVencimento",
            "pcValorcorrigido",
            "pcMesIgpRef",
            "pcAnoIgpRef",
            "pcMesIgpAtu",
            "pcAnoIgpAtu",
            "pcLoteamento",
            "pcDatapagto",
            "pcCpf",
            "pcNossonumero",
        ], {}),
        typeorm_1.Index("IX_LOTES_PARCELAS_PC_LOTEAMENTO_PC_DATAPAGTO_PC_NOSSONUMERO", [
            "pcQuadra",
            "pcLote",
            "pcItem",
            "pcData",
            "pcValor",
            "pcVencimento",
            "pcValorcorrigido",
            "pcIgpref",
            "pcIgpatual",
            "pcMesIgpRef",
            "pcValorre",
            "pcNovoVencimento",
            "pcLoteamento",
            "pcDatapagto",
            "pcNossonumero",
        ], {}),
        typeorm_1.Index("IX_LOTES_PARCELAS_PC_LOTEAMENTO_PC_DATAPAGTO_PC_SITUACAO_PC_TIPOPAGTO", [
            "pcQuadra",
            "pcLote",
            "pcCliente",
            "pcData",
            "pcValor",
            "pcVencimento",
            "pcNossonumero",
            "pcValorpago",
            "pcMulta",
            "pcJuros",
            "pcOrdembaixa",
            "pcCpf",
            "pcLoteamento",
            "pcDatapagto",
            "pcSituacao",
            "pcTipopagto",
        ], {}),
        typeorm_1.Index("IX_LOTES_PARCELAS_PC_LOTEAMENTO_PC_SITUACAO_PC_CPF_PC_NOSSONUMERO", [
            "pcData",
            "pcValor",
            "pcVencimento",
            "pcValorcorrigido",
            "pcDatapagto",
            "pcMesIgpRef",
            "pcAnoIgpRef",
            "pcMesIgpAtu",
            "pcAnoIgpAtu",
            "pcValorpago",
            "pcOrdembaixa",
            "pcLoteamento",
            "pcSituacao",
            "pcCpf",
            "pcNossonumero",
        ], {}),
        typeorm_1.Index("IX_LOTES_PARCELAS_PC_LOTEAMENTO_PC_SITUACAO_PC_DATAPAGTO", [
            "pcQuadra",
            "pcLote",
            "pcCliente",
            "pcData",
            "pcValor",
            "pcVencimento",
            "pcNossonumero",
            "pcValorpago",
            "pcTipopagto",
            "pcMulta",
            "pcJuros",
            "pcOrdembaixa",
            "pcCpf",
            "pcLoteamento",
            "pcSituacao",
            "pcDatapagto",
        ], {}),
        typeorm_1.Index("PK_LOTES_PARCELAS", ["pcLoteamento", "pcNossonumero", "pcVersao"], {
            unique: true,
        }),
        typeorm_1.Entity("LOTES_PARCELAS", { schema: "dbo" })
    ], LotesParcelas);
    return LotesParcelas;
}());
exports.LotesParcelas = LotesParcelas;
//# sourceMappingURL=LotesParcelas.js.map