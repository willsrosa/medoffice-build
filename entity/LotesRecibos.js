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
var LotesRecibos = /** @class */ (function () {
    function LotesRecibos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "LR_ID" }),
        __metadata("design:type", Number)
    ], LotesRecibos.prototype, "lrId", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "LR_DATA", nullable: true }),
        __metadata("design:type", Date)
    ], LotesRecibos.prototype, "lrData", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "LR_DATAHORA", nullable: true }),
        __metadata("design:type", Date)
    ], LotesRecibos.prototype, "lrDatahora", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LR_USUARIO", nullable: true }),
        __metadata("design:type", Number)
    ], LotesRecibos.prototype, "lrUsuario", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LR_NOMEUSUARIO", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], LotesRecibos.prototype, "lrNomeusuario", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LR_LOTEAMENTO", nullable: true }),
        __metadata("design:type", Number)
    ], LotesRecibos.prototype, "lrLoteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LR_LOTE", nullable: true }),
        __metadata("design:type", Number)
    ], LotesRecibos.prototype, "lrLote", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "LR_TOTAL",
            nullable: true,
            precision: 15,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesRecibos.prototype, "lrTotal", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "LR_PAGO",
            nullable: true,
            precision: 15,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesRecibos.prototype, "lrPago", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LR_CLIENTE", nullable: true }),
        __metadata("design:type", Number)
    ], LotesRecibos.prototype, "lrCliente", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LR_NOMECLIENTE", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], LotesRecibos.prototype, "lrNomecliente", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LR_TITULO", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], LotesRecibos.prototype, "lrTitulo", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "LR_CPF", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], LotesRecibos.prototype, "lrCpf", void 0);
    LotesRecibos = __decorate([
        typeorm_1.Index("PK_LOTES_RECIBOS", ["lrId"], { unique: true }),
        typeorm_1.Entity("LOTES_RECIBOS", { schema: "dbo" })
    ], LotesRecibos);
    return LotesRecibos;
}());
exports.LotesRecibos = LotesRecibos;
//# sourceMappingURL=LotesRecibos.js.map