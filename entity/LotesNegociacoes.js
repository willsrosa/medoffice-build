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
var LotesNegociacoes = /** @class */ (function () {
    function LotesNegociacoes() {
    }
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "NE_LOTEAMENTO", default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], LotesNegociacoes.prototype, "neLoteamento", void 0);
    __decorate([
        typeorm_1.Column("char", {
            primary: true,
            name: "NE_QUADRA",
            length: 3,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", String)
    ], LotesNegociacoes.prototype, "neQuadra", void 0);
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "NE_LOTE", default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], LotesNegociacoes.prototype, "neLote", void 0);
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "NE_ITEM" }),
        __metadata("design:type", Number)
    ], LotesNegociacoes.prototype, "neItem", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "NE_CONTRATO",
            nullable: true,
            length: 5,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], LotesNegociacoes.prototype, "neContrato", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "NE_DIGITO",
            nullable: true,
            length: 1,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], LotesNegociacoes.prototype, "neDigito", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "NE_DATA", nullable: true }),
        __metadata("design:type", Date)
    ], LotesNegociacoes.prototype, "neData", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "NE_SITUACAO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], LotesNegociacoes.prototype, "neSituacao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "NE_OBS", nullable: true, length: 500 }),
        __metadata("design:type", String)
    ], LotesNegociacoes.prototype, "neObs", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "NE_CLIENTE", nullable: true }),
        __metadata("design:type", Number)
    ], LotesNegociacoes.prototype, "neCliente", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "NE_CPF", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], LotesNegociacoes.prototype, "neCpf", void 0);
    LotesNegociacoes = __decorate([
        typeorm_1.Index("PK_LOTES_NEGOCIACOES", ["neLoteamento", "neQuadra", "neLote", "neItem"], { unique: true }),
        typeorm_1.Entity("LOTES_NEGOCIACOES", { schema: "dbo" })
    ], LotesNegociacoes);
    return LotesNegociacoes;
}());
exports.LotesNegociacoes = LotesNegociacoes;
//# sourceMappingURL=LotesNegociacoes.js.map