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
var LogContratos = /** @class */ (function () {
    function LogContratos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "ID" }),
        __metadata("design:type", Number)
    ], LogContratos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATA", nullable: true }),
        __metadata("design:type", Date)
    ], LogContratos.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CONTRATO", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], LogContratos.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "QUADRA", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], LogContratos.prototype, "quadra", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTE", nullable: true }),
        __metadata("design:type", Number)
    ], LogContratos.prototype, "lote", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "OCORRENCIA", nullable: true }),
        __metadata("design:type", Number)
    ], LogContratos.prototype, "ocorrencia", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "VALOR", nullable: true }),
        __metadata("design:type", Number)
    ], LogContratos.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DATAHORA", nullable: true }),
        __metadata("design:type", Date)
    ], LogContratos.prototype, "datahora", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "USUARIO", nullable: true }),
        __metadata("design:type", Number)
    ], LogContratos.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "LOTEAMENTO", nullable: true }),
        __metadata("design:type", Number)
    ], LogContratos.prototype, "loteamento", void 0);
    LogContratos = __decorate([
        typeorm_1.Index("PK_LOG_CONTRATOS", ["id"], { unique: true }),
        typeorm_1.Entity("LOG_CONTRATOS", { schema: "dbo" })
    ], LogContratos);
    return LogContratos;
}());
exports.LogContratos = LogContratos;
//# sourceMappingURL=LogContratos.js.map