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
var Loteamento = /** @class */ (function () {
    function Loteamento() {
    }
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "LT_ID" }),
        __metadata("design:type", Number)
    ], Loteamento.prototype, "ltId", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "LT_NOME",
            nullable: true,
            length: 40,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Loteamento.prototype, "ltNome", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "LT_DTLANCAMENTO", nullable: true }),
        __metadata("design:type", Date)
    ], Loteamento.prototype, "ltDtlancamento", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "LT_LOCALIZACAO", nullable: true, length: 500 }),
        __metadata("design:type", String)
    ], Loteamento.prototype, "ltLocalizacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LT_LOTES", nullable: true }),
        __metadata("design:type", Number)
    ], Loteamento.prototype, "ltLotes", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LT_REAJUSTE", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Loteamento.prototype, "ltReajuste", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "LT_AREA_TOTAL",
            nullable: true,
            precision: 15,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Loteamento.prototype, "ltAreaTotal", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LT_SISTEMA", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Loteamento.prototype, "ltSistema", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "LT_CNPJ", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], Loteamento.prototype, "ltCnpj", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "lt_razao", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], Loteamento.prototype, "ltRazao", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "lt_codibge", nullable: true, length: 7 }),
        __metadata("design:type", String)
    ], Loteamento.prototype, "ltCodibge", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "lt_codibge_loteamento", nullable: true, length: 7 }),
        __metadata("design:type", String)
    ], Loteamento.prototype, "ltCodibgeLoteamento", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "lt_valorm2",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], Loteamento.prototype, "ltValorm2", void 0);
    Loteamento = __decorate([
        typeorm_1.Index("PK_LOTEAMENTO", ["ltId"], { unique: true }),
        typeorm_1.Entity("LOTEAMENTO", { schema: "dbo" })
    ], Loteamento);
    return Loteamento;
}());
exports.Loteamento = Loteamento;
//# sourceMappingURL=Loteamento.js.map