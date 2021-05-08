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
var Aditamentos = /** @class */ (function () {
    function Aditamentos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Aditamentos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], Aditamentos.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "contrato", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], Aditamentos.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "quadra", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], Aditamentos.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "lote", nullable: true }),
        __metadata("design:type", Number)
    ], Aditamentos.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "dataAditamento", nullable: true }),
        __metadata("design:type", Date)
    ], Aditamentos.prototype, "dataAditamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "usuario", nullable: true }),
        __metadata("design:type", Number)
    ], Aditamentos.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "datahora", nullable: true }),
        __metadata("design:type", Date)
    ], Aditamentos.prototype, "datahora", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "situacao", nullable: true }),
        __metadata("design:type", Number)
    ], Aditamentos.prototype, "situacao", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "motivo", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Aditamentos.prototype, "motivo", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "valorCobrado",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], Aditamentos.prototype, "valorCobrado", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "aprovadoem", nullable: true }),
        __metadata("design:type", Date)
    ], Aditamentos.prototype, "aprovadoem", void 0);
    Aditamentos = __decorate([
        typeorm_1.Entity("aditamentos", { schema: "dbo" })
    ], Aditamentos);
    return Aditamentos;
}());
exports.Aditamentos = Aditamentos;
//# sourceMappingURL=Aditamentos.js.map