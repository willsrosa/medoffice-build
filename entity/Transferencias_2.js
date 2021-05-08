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
var Transferencias_2 = /** @class */ (function () {
    function Transferencias_2() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], Transferencias_2.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Loteamento" }),
        __metadata("design:type", Number)
    ], Transferencias_2.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "transferenciaID" }),
        __metadata("design:type", Number)
    ], Transferencias_2.prototype, "transferenciaId", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Comprador2CPF", length: 14 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "comprador2Cpf", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Comprador2Nome", length: 50 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "comprador2Nome", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "usuario", nullable: true }),
        __metadata("design:type", Number)
    ], Transferencias_2.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "datahora", nullable: true }),
        __metadata("design:type", Date)
    ], Transferencias_2.prototype, "datahora", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nacionalidade", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "nacionalidade", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "rg", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "rg", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "ecivil", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "ecivil", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "telefone", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "telefone", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "profissao", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "profissao", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "endereco", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "endereco", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "cep", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "cep", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "bairro", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "bairro", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "cidade", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Transferencias_2.prototype, "cidade", void 0);
    Transferencias_2 = __decorate([
        typeorm_1.Entity("Transferencias_2", { schema: "dbo" })
    ], Transferencias_2);
    return Transferencias_2;
}());
exports.Transferencias_2 = Transferencias_2;
//# sourceMappingURL=Transferencias_2.js.map