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
var Quitacoes = /** @class */ (function () {
    function Quitacoes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Quitacoes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "contrato", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], Quitacoes.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], Quitacoes.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "datainclusao", nullable: true }),
        __metadata("design:type", Date)
    ], Quitacoes.prototype, "datainclusao", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "dataquitacao", nullable: true }),
        __metadata("design:type", Date)
    ], Quitacoes.prototype, "dataquitacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "usuario", nullable: true }),
        __metadata("design:type", Number)
    ], Quitacoes.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "ultimaimpressao", nullable: true }),
        __metadata("design:type", Date)
    ], Quitacoes.prototype, "ultimaimpressao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "situacao", nullable: true }),
        __metadata("design:type", Number)
    ], Quitacoes.prototype, "situacao", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "aprovadoem", nullable: true }),
        __metadata("design:type", Date)
    ], Quitacoes.prototype, "aprovadoem", void 0);
    Quitacoes = __decorate([
        typeorm_1.Entity("quitacoes", { schema: "dbo" })
    ], Quitacoes);
    return Quitacoes;
}());
exports.Quitacoes = Quitacoes;
//# sourceMappingURL=Quitacoes.js.map