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
var LotesContatos = /** @class */ (function () {
    function LotesContatos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], LotesContatos.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], LotesContatos.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Categoria", nullable: true }),
        __metadata("design:type", Number)
    ], LotesContatos.prototype, "categoria", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "Contrato", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], LotesContatos.prototype, "contrato", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PropostaQuitacao",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], LotesContatos.prototype, "propostaQuitacao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], LotesContatos.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], LotesContatos.prototype, "dataHora", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "Anotacoes", nullable: true }),
        __metadata("design:type", String)
    ], LotesContatos.prototype, "anotacoes", void 0);
    LotesContatos = __decorate([
        typeorm_1.Index("PK_LOTES_CONTATOS", ["id"], { unique: true }),
        typeorm_1.Entity("lotes_contatos", { schema: "dbo" })
    ], LotesContatos);
    return LotesContatos;
}());
exports.LotesContatos = LotesContatos;
//# sourceMappingURL=LotesContatos.js.map