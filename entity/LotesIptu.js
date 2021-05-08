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
var LotesIptu = /** @class */ (function () {
    function LotesIptu() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], LotesIptu.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], LotesIptu.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "Quadra", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], LotesIptu.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Lote", nullable: true }),
        __metadata("design:type", Number)
    ], LotesIptu.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataOcorrencia", nullable: true }),
        __metadata("design:type", Date)
    ], LotesIptu.prototype, "dataOcorrencia", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "AnoRef", nullable: true }),
        __metadata("design:type", Number)
    ], LotesIptu.prototype, "anoRef", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "TipoPagto", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], LotesIptu.prototype, "tipoPagto", void 0);
    __decorate([
        typeorm_1.Column("decimal", {
            name: "ValorPago",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesIptu.prototype, "valorPago", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataRecComprador", nullable: true }),
        __metadata("design:type", Date)
    ], LotesIptu.prototype, "dataRecComprador", void 0);
    LotesIptu = __decorate([
        typeorm_1.Index("PK_LOTES_IPTU", ["id"], { unique: true }),
        typeorm_1.Entity("LOTES_IPTU", { schema: "dbo" })
    ], LotesIptu);
    return LotesIptu;
}());
exports.LotesIptu = LotesIptu;
//# sourceMappingURL=LotesIptu.js.map