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
var LotesReajustes = /** @class */ (function () {
    function LotesReajustes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], LotesReajustes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "loteamento" }),
        __metadata("design:type", Number)
    ], LotesReajustes.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "nossonumero", nullable: true, length: 15 }),
        __metadata("design:type", String)
    ], LotesReajustes.prototype, "nossonumero", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "dtreajuste", nullable: true }),
        __metadata("design:type", Date)
    ], LotesReajustes.prototype, "dtreajuste", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "valor_anterior",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesReajustes.prototype, "valorAnterior", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "valor_reajustado",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesReajustes.prototype, "valorReajustado", void 0);
    LotesReajustes = __decorate([
        typeorm_1.Entity("lotes_reajustes", { schema: "dbo" })
    ], LotesReajustes);
    return LotesReajustes;
}());
exports.LotesReajustes = LotesReajustes;
//# sourceMappingURL=LotesReajustes.js.map