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
var ContasBanc = /** @class */ (function () {
    function ContasBanc() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "CB_ID" }),
        __metadata("design:type", Number)
    ], ContasBanc.prototype, "cbId", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CB_BANCO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], ContasBanc.prototype, "cbBanco", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_AGENCIA",
            nullable: true,
            length: 5,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbAgencia", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_CONTA",
            nullable: true,
            length: 20,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbConta", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_NOME",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbNome", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_ENDERECO",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbEndereco", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_NUMERO",
            nullable: true,
            length: 10,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbNumero", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_BAIRRO",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbBairro", void 0);
    __decorate([
        typeorm_1.Column("char", {
            name: "CB_CEP",
            nullable: true,
            length: 8,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbCep", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CB_CIDADE", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], ContasBanc.prototype, "cbCidade", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CB_STATUS", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], ContasBanc.prototype, "cbStatus", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CB_TIPO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], ContasBanc.prototype, "cbTipo", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CB_CONTAB", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], ContasBanc.prototype, "cbContab", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CB_OBS", nullable: true, length: 500 }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbObs", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_CONTATO1",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbContato1", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_CONTATO2",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbContato2", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_TELEFONE1",
            nullable: true,
            length: 10,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbTelefone1", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_TELEFONE2",
            nullable: true,
            length: 10,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbTelefone2", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_SETOR1",
            nullable: true,
            length: 25,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbSetor1", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CB_SETOR2",
            nullable: true,
            length: 25,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], ContasBanc.prototype, "cbSetor2", void 0);
    ContasBanc = __decorate([
        typeorm_1.Index("PK_CONTAS_BANC", ["cbId"], { unique: true }),
        typeorm_1.Entity("CONTAS_BANC", { schema: "dbo" })
    ], ContasBanc);
    return ContasBanc;
}());
exports.ContasBanc = ContasBanc;
//# sourceMappingURL=ContasBanc.js.map