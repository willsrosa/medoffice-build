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
var PlanoContas = /** @class */ (function () {
    function PlanoContas() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "PC_ID" }),
        __metadata("design:type", Number)
    ], PlanoContas.prototype, "pcId", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "PC_CLASSIFICACAO",
            nullable: true,
            length: 9,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], PlanoContas.prototype, "pcClassificacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_TIPO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], PlanoContas.prototype, "pcTipo", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "PC_NIVEL", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], PlanoContas.prototype, "pcNivel", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "PC_DESCRICAO",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], PlanoContas.prototype, "pcDescricao", void 0);
    PlanoContas = __decorate([
        typeorm_1.Index("PK_PLANO_CONTAS", ["pcId"], { unique: true }),
        typeorm_1.Entity("PLANO_CONTAS", { schema: "dbo" })
    ], PlanoContas);
    return PlanoContas;
}());
exports.PlanoContas = PlanoContas;
//# sourceMappingURL=PlanoContas.js.map