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
var Empresas = /** @class */ (function () {
    function Empresas() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "EM_ID" }),
        __metadata("design:type", Number)
    ], Empresas.prototype, "emId", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_RAZAO", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emRazao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_LOGRA", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emLogra", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "EM_CEP", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emCep", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "EM_CIDADE", nullable: true }),
        __metadata("design:type", Number)
    ], Empresas.prototype, "emCidade", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "EM_CNPJ", nullable: true, length: 15 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emCnpj", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_IE", nullable: true, length: 15 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emIe", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_TEL1", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emTel1", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_TEL2", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emTel2", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_TEL3", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emTel3", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "EM_DATA_CAD", nullable: true }),
        __metadata("design:type", Date)
    ], Empresas.prototype, "emDataCad", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_EMAIL", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emEmail", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_HOME", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emHome", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_NUMERO", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emNumero", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "EM_BAIRRO", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "emBairro", void 0);
    Empresas = __decorate([
        typeorm_1.Index("EMPRESAS_IDX1", ["emId"], {}),
        typeorm_1.Index("EMPRESAS_IDX2", ["emRazao"], {}),
        typeorm_1.Entity("EMPRESAS", { schema: "dbo" })
    ], Empresas);
    return Empresas;
}());
exports.Empresas = Empresas;
//# sourceMappingURL=Empresas.js.map