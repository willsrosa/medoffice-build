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
var Distratos_1 = require("./Distratos");
var DistratosParcelasDevolucao = /** @class */ (function () {
    function DistratosParcelasDevolucao() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], DistratosParcelasDevolucao.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "Valor", nullable: true, precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], DistratosParcelasDevolucao.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "APagarEm", nullable: true }),
        __metadata("design:type", Date)
    ], DistratosParcelasDevolucao.prototype, "aPagarEm", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], DistratosParcelasDevolucao.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], DistratosParcelasDevolucao.prototype, "dataHora", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Distratos_1.Distratos; }, function (distratos) { return distratos.distratosParcelasDevolucaos; }),
        typeorm_1.JoinColumn([{ name: "DistratoId", referencedColumnName: "id" }]),
        __metadata("design:type", Distratos_1.Distratos)
    ], DistratosParcelasDevolucao.prototype, "distrato", void 0);
    DistratosParcelasDevolucao = __decorate([
        typeorm_1.Index("PK_DISTRATOPARCELASDEVOLUCAO", ["id"], { unique: true }),
        typeorm_1.Entity("DistratosParcelasDevolucao", { schema: "dbo" })
    ], DistratosParcelasDevolucao);
    return DistratosParcelasDevolucao;
}());
exports.DistratosParcelasDevolucao = DistratosParcelasDevolucao;
//# sourceMappingURL=DistratosParcelasDevolucao.js.map