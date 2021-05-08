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
var CtrlLotes = /** @class */ (function () {
    function CtrlLotes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ID" }),
        __metadata("design:type", Number)
    ], CtrlLotes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTEAMENTO", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlLotes.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "QUADRA", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlLotes.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTE", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlLotes.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "IPTU", nullable: true, length: 6 }),
        __metadata("design:type", String)
    ], CtrlLotes.prototype, "iptu", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "AREA", nullable: true, precision: 8, scale: 2 }),
        __metadata("design:type", Number)
    ], CtrlLotes.prototype, "area", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DTESCRITURA", nullable: true }),
        __metadata("design:type", Date)
    ], CtrlLotes.prototype, "dtescritura", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CARTORIO", nullable: true, length: 4 }),
        __metadata("design:type", String)
    ], CtrlLotes.prototype, "cartorio", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CONDICAO", nullable: true, length: 4 }),
        __metadata("design:type", String)
    ], CtrlLotes.prototype, "condicao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CLIENTE", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlLotes.prototype, "cliente", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CONTRATO", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], CtrlLotes.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "DIGITO", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], CtrlLotes.prototype, "digito", void 0);
    CtrlLotes = __decorate([
        typeorm_1.Entity("CTRL_LOTES", { schema: "dbo" })
    ], CtrlLotes);
    return CtrlLotes;
}());
exports.CtrlLotes = CtrlLotes;
//# sourceMappingURL=CtrlLotes.js.map