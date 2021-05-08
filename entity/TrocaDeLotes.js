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
var TrocaDeLotes = /** @class */ (function () {
    function TrocaDeLotes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], TrocaDeLotes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], TrocaDeLotes.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataTroca", nullable: true }),
        __metadata("design:type", Date)
    ], TrocaDeLotes.prototype, "dataTroca", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "ContratoAnterior", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], TrocaDeLotes.prototype, "contratoAnterior", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "ContratoAtual", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], TrocaDeLotes.prototype, "contratoAtual", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], TrocaDeLotes.prototype, "dataHora", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], TrocaDeLotes.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "TotalContratoAnterior",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], TrocaDeLotes.prototype, "totalContratoAnterior", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "TotalPagoAnterior",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], TrocaDeLotes.prototype, "totalPagoAnterior", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "TotalCorrigidoAnterior",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], TrocaDeLotes.prototype, "totalCorrigidoAnterior", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "TotalPagarAtual",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], TrocaDeLotes.prototype, "totalPagarAtual", void 0);
    TrocaDeLotes = __decorate([
        typeorm_1.Index("PK_TrocaDeLotes", ["id"], { unique: true }),
        typeorm_1.Entity("TrocaDeLotes", { schema: "dbo" })
    ], TrocaDeLotes);
    return TrocaDeLotes;
}());
exports.TrocaDeLotes = TrocaDeLotes;
//# sourceMappingURL=TrocaDeLotes.js.map