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
var CtrlMovTmp = /** @class */ (function () {
    function CtrlMovTmp() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ID" }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTEAMENTO" }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATA" }),
        __metadata("design:type", Date)
    ], CtrlMovTmp.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CONTRATO", length: 5 }),
        __metadata("design:type", String)
    ], CtrlMovTmp.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "QUADRA" }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTE" }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "OCORRENCIA" }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "ocorrencia", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "ESTOQUE" }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "estoque", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "VALOR", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "ACUMULADO", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "acumulado", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "USUARIO", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATAHORA", nullable: true }),
        __metadata("design:type", Date)
    ], CtrlMovTmp.prototype, "datahora", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CLIENTE", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlMovTmp.prototype, "cliente", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "DIGITO", length: 1, default: function () { return "''"; } }),
        __metadata("design:type", String)
    ], CtrlMovTmp.prototype, "digito", void 0);
    CtrlMovTmp = __decorate([
        typeorm_1.Entity("CTRL_MOV_TMP", { schema: "dbo" })
    ], CtrlMovTmp);
    return CtrlMovTmp;
}());
exports.CtrlMovTmp = CtrlMovTmp;
//# sourceMappingURL=CtrlMovTmp.js.map