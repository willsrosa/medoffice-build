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
var CtrlMovJuridico = /** @class */ (function () {
    function CtrlMovJuridico() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ID" }),
        __metadata("design:type", Number)
    ], CtrlMovJuridico.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTEAMENTO" }),
        __metadata("design:type", Number)
    ], CtrlMovJuridico.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATA" }),
        __metadata("design:type", Date)
    ], CtrlMovJuridico.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CONTRATO", length: 5 }),
        __metadata("design:type", String)
    ], CtrlMovJuridico.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "QUADRA" }),
        __metadata("design:type", Number)
    ], CtrlMovJuridico.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTE" }),
        __metadata("design:type", Number)
    ], CtrlMovJuridico.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "VALOR", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], CtrlMovJuridico.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "ACUMULADO", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], CtrlMovJuridico.prototype, "acumulado", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "USUARIO", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlMovJuridico.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATAHORA", nullable: true }),
        __metadata("design:type", Date)
    ], CtrlMovJuridico.prototype, "datahora", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "OCORRENCIA", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlMovJuridico.prototype, "ocorrencia", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CLIENTE", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlMovJuridico.prototype, "cliente", void 0);
    CtrlMovJuridico = __decorate([
        typeorm_1.Index("PK_CTRL_MOV_JURIDICO", ["id"], { unique: true }),
        typeorm_1.Entity("CTRL_MOV_JURIDICO", { schema: "dbo" })
    ], CtrlMovJuridico);
    return CtrlMovJuridico;
}());
exports.CtrlMovJuridico = CtrlMovJuridico;
//# sourceMappingURL=CtrlMovJuridico.js.map