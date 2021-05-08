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
var LotesLog_1 = require("./LotesLog");
var Lotes = /** @class */ (function () {
    function Lotes() {
    }
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "LT_LOTEAMENTO" }),
        __metadata("design:type", Number)
    ], Lotes.prototype, "ltLoteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "LT_LOTE" }),
        __metadata("design:type", Number)
    ], Lotes.prototype, "ltLote", void 0);
    __decorate([
        typeorm_1.Column("char", {
            primary: true,
            name: "LT_QUADRA",
            length: 3,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltQuadra", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            primary: true,
            name: "LT_CONTRATO",
            length: 5,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltContrato", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "LT_DIGITO",
            nullable: true,
            length: 1,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltDigito", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LT_CLIENTE", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], Lotes.prototype, "ltCliente", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "LT_AREA",
            nullable: true,
            precision: 8,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Lotes.prototype, "ltArea", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "LT_IPTU",
            nullable: true,
            length: 6,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltIptu", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "LT_DTVENDA", nullable: true }),
        __metadata("design:type", Date)
    ], Lotes.prototype, "ltDtvenda", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "LT_SITUACAO",
            nullable: true,
            length: 1,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltSituacao", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "LT_DTESCRITURA", nullable: true }),
        __metadata("design:type", Date)
    ], Lotes.prototype, "ltDtescritura", void 0);
    __decorate([
        typeorm_1.Column("char", {
            name: "LT_CARTORIO",
            nullable: true,
            length: 4,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltCartorio", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "LT_VALOR",
            nullable: true,
            precision: 17,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Lotes.prototype, "ltValor", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "LT_OBS", nullable: true, length: 500 }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltObs", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LT_CONDICAO", length: 4, default: function () { return "'1000'"; } }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltCondicao", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "LT_VALORCONTRATO",
            nullable: true,
            precision: 18,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Lotes.prototype, "ltValorcontrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LT_FILTRO", nullable: true, length: 4 }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltFiltro", void 0);
    __decorate([
        typeorm_1.Column("char", {
            name: "LT_TIPO",
            nullable: true,
            length: 1,
            default: function () { return "'N'"; },
        }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltTipo", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LT_CONDICAO_AUTOMATICA", default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], Lotes.prototype, "ltCondicaoAutomatica", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LT_CPF", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltCpf", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "lt_transferidoem", nullable: true }),
        __metadata("design:type", Date)
    ], Lotes.prototype, "ltTransferidoem", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "lt_nojuridicoem", nullable: true }),
        __metadata("design:type", Date)
    ], Lotes.prototype, "ltNojuridicoem", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "lt_distrato_motivo", nullable: true }),
        __metadata("design:type", Number)
    ], Lotes.prototype, "ltDistratoMotivo", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "lt_financiado", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Lotes.prototype, "ltFinanciado", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return LotesLog_1.LotesLog; }, function (lotesLog) { return lotesLog.lotes; }),
        __metadata("design:type", Array)
    ], Lotes.prototype, "lotesLogs", void 0);
    Lotes = __decorate([
        typeorm_1.Index("PK_LOTES", ["ltLoteamento", "ltQuadra", "ltLote", "ltContrato"], {
            unique: true,
        }),
        typeorm_1.Entity("LOTES", { schema: "dbo" })
    ], Lotes);
    return Lotes;
}());
exports.Lotes = Lotes;
//# sourceMappingURL=Lotes.js.map