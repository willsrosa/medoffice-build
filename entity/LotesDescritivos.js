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
var LotesDescritivos = /** @class */ (function () {
    function LotesDescritivos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "LD_ID" }),
        __metadata("design:type", Number)
    ], LotesDescritivos.prototype, "ldId", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LD_LOTEAMENTO", nullable: true }),
        __metadata("design:type", Number)
    ], LotesDescritivos.prototype, "ldLoteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LD_QUADRA", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], LotesDescritivos.prototype, "ldQuadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LD_LOTE", nullable: true }),
        __metadata("design:type", Number)
    ], LotesDescritivos.prototype, "ldLote", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "LD_DESCRITIVO", nullable: true }),
        __metadata("design:type", String)
    ], LotesDescritivos.prototype, "ldDescritivo", void 0);
    __decorate([
        typeorm_1.Column("decimal", {
            name: "ld_area",
            nullable: true,
            precision: 10,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesDescritivos.prototype, "ldArea", void 0);
    LotesDescritivos = __decorate([
        typeorm_1.Index("PK_lotes_descritivo", ["ldId"], { unique: true }),
        typeorm_1.Entity("LOTES_DESCRITIVOS", { schema: "dbo" })
    ], LotesDescritivos);
    return LotesDescritivos;
}());
exports.LotesDescritivos = LotesDescritivos;
//# sourceMappingURL=LotesDescritivos.js.map