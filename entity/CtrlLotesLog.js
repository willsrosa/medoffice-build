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
var CtrlLotesLog = /** @class */ (function () {
    function CtrlLotesLog() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ID" }),
        __metadata("design:type", Number)
    ], CtrlLotesLog.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTEAMENTO", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlLotesLog.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "QUADRA", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlLotesLog.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTE", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlLotesLog.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "IPTU", nullable: true, length: 6 }),
        __metadata("design:type", String)
    ], CtrlLotesLog.prototype, "iptu", void 0);
    __decorate([
        typeorm_1.Column("numeric", { name: "AREA", nullable: true, precision: 8, scale: 2 }),
        __metadata("design:type", Number)
    ], CtrlLotesLog.prototype, "area", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DTESCRITURA", nullable: true }),
        __metadata("design:type", Date)
    ], CtrlLotesLog.prototype, "dtescritura", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CARTORIO", nullable: true, length: 4 }),
        __metadata("design:type", String)
    ], CtrlLotesLog.prototype, "cartorio", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CONDICAO", nullable: true, length: 4 }),
        __metadata("design:type", String)
    ], CtrlLotesLog.prototype, "condicao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CLIENTE", nullable: true }),
        __metadata("design:type", Number)
    ], CtrlLotesLog.prototype, "cliente", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CONTRATO", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], CtrlLotesLog.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "DIGITO", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], CtrlLotesLog.prototype, "digito", void 0);
    CtrlLotesLog = __decorate([
        typeorm_1.Entity("CTRL_LOTES_LOG", { schema: "dbo" })
    ], CtrlLotesLog);
    return CtrlLotesLog;
}());
exports.CtrlLotesLog = CtrlLotesLog;
//# sourceMappingURL=CtrlLotesLog.js.map