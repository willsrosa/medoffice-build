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
var LotesParcOcorrencias = /** @class */ (function () {
    function LotesParcOcorrencias() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "BO_ID" }),
        __metadata("design:type", Number)
    ], LotesParcOcorrencias.prototype, "boId", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "BO_NNUMERO", length: 10 }),
        __metadata("design:type", String)
    ], LotesParcOcorrencias.prototype, "boNnumero", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "BO_DATA" }),
        __metadata("design:type", Date)
    ], LotesParcOcorrencias.prototype, "boData", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "BO_CODIGO", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], LotesParcOcorrencias.prototype, "boCodigo", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "BO_SUBCOD", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], LotesParcOcorrencias.prototype, "boSubcod", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "BO_DESCRICAO", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], LotesParcOcorrencias.prototype, "boDescricao", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "BO_BANCO", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], LotesParcOcorrencias.prototype, "boBanco", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "BO_REMESSA", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], LotesParcOcorrencias.prototype, "boRemessa", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "BO_ARQUIVO", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], LotesParcOcorrencias.prototype, "boArquivo", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "BO_PAGTO_AGENCIA", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], LotesParcOcorrencias.prototype, "boPagtoAgencia", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "bo_loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], LotesParcOcorrencias.prototype, "boLoteamento", void 0);
    LotesParcOcorrencias = __decorate([
        typeorm_1.Index("IX_LOTES_PARC_OCORRENCIAS_BO_ARQUIVO_bo_loteamento", [
            "boNnumero",
            "boData",
            "boDescricao",
            "boRemessa",
            "boArquivo",
            "boLoteamento",
        ], {}),
        typeorm_1.Index("LOTES_PARC_OCORRENCIAS_IDX1", ["boNnumero"], {}),
        typeorm_1.Index("PK_LOTES_PARC_OCORRENCIAS", ["boId"], { unique: true }),
        typeorm_1.Entity("LOTES_PARC_OCORRENCIAS", { schema: "dbo" })
    ], LotesParcOcorrencias);
    return LotesParcOcorrencias;
}());
exports.LotesParcOcorrencias = LotesParcOcorrencias;
//# sourceMappingURL=LotesParcOcorrencias.js.map