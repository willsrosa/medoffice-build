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
var Notificacoes = /** @class */ (function () {
    function Notificacoes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Notificacoes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "contrato", length: 5 }),
        __metadata("design:type", String)
    ], Notificacoes.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "loteamento" }),
        __metadata("design:type", Number)
    ], Notificacoes.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "dataImpressao", nullable: true }),
        __metadata("design:type", Date)
    ], Notificacoes.prototype, "dataImpressao", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "quadra", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], Notificacoes.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "lote", nullable: true }),
        __metadata("design:type", Number)
    ], Notificacoes.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "IGPAtual", nullable: true, length: 6 }),
        __metadata("design:type", String)
    ], Notificacoes.prototype, "igpAtual", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "VlrAberto",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], Notificacoes.prototype, "vlrAberto", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "VlrCustas",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], Notificacoes.prototype, "vlrCustas", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "usuario", nullable: true }),
        __metadata("design:type", Number)
    ], Notificacoes.prototype, "usuario", void 0);
    Notificacoes = __decorate([
        typeorm_1.Entity("notificacoes", { schema: "dbo" })
    ], Notificacoes);
    return Notificacoes;
}());
exports.Notificacoes = Notificacoes;
//# sourceMappingURL=Notificacoes.js.map