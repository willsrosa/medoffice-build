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
var LotesHistorico = /** @class */ (function () {
    function LotesHistorico() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "LH_ID" }),
        __metadata("design:type", Number)
    ], LotesHistorico.prototype, "lhId", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LH_LOTEAMENTO" }),
        __metadata("design:type", Number)
    ], LotesHistorico.prototype, "lhLoteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LH_CLIENTE", nullable: true }),
        __metadata("design:type", Number)
    ], LotesHistorico.prototype, "lhCliente", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LH_USUARIO", nullable: true }),
        __metadata("design:type", Number)
    ], LotesHistorico.prototype, "lhUsuario", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "LH_HISTORICO", nullable: true, length: 1000 }),
        __metadata("design:type", String)
    ], LotesHistorico.prototype, "lhHistorico", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "LH_DATAHORA", nullable: true }),
        __metadata("design:type", Date)
    ], LotesHistorico.prototype, "lhDatahora", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "lh_cpf", nullable: true, length: 15 }),
        __metadata("design:type", String)
    ], LotesHistorico.prototype, "lhCpf", void 0);
    LotesHistorico = __decorate([
        typeorm_1.Index("PK_LOTES_HISTORICO", ["lhId"], { unique: true }),
        typeorm_1.Entity("LOTES_HISTORICO", { schema: "dbo" })
    ], LotesHistorico);
    return LotesHistorico;
}());
exports.LotesHistorico = LotesHistorico;
//# sourceMappingURL=LotesHistorico.js.map