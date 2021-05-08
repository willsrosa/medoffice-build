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
var AgendaContatos = /** @class */ (function () {
    function AgendaContatos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "id" }),
        __metadata("design:type", Number)
    ], AgendaContatos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "nome", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "empresa", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "empresa", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "dataCadastro", nullable: true }),
        __metadata("design:type", Date)
    ], AgendaContatos.prototype, "dataCadastro", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "usuario", nullable: true }),
        __metadata("design:type", Number)
    ], AgendaContatos.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "fone1", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "fone1", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "fone2", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "fone2", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "celular1", nullable: true, length: 11 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "celular1", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "celular2", nullable: true, length: 11 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "celular2", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "endereco", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "endereco", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "bairro", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "bairro", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "cep", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "cep", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "cidade", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "cidade", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "uf", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "uf", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "obs", nullable: true, length: 1000 }),
        __metadata("design:type", String)
    ], AgendaContatos.prototype, "obs", void 0);
    AgendaContatos = __decorate([
        typeorm_1.Entity("agenda_contatos", { schema: "dbo" })
    ], AgendaContatos);
    return AgendaContatos;
}());
exports.AgendaContatos = AgendaContatos;
//# sourceMappingURL=AgendaContatos.js.map