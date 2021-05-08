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
var Fornecedor = /** @class */ (function () {
    function Fornecedor() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "FOR_ID" }),
        __metadata("design:type", Number)
    ], Fornecedor.prototype, "forId", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_RAZAO_SOCIAL",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forRazaoSocial", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_FANTASIA",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forFantasia", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_ENDERECO",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forEndereco", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_COMPLEMENTO",
            nullable: true,
            length: 30,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forComplemento", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_BAIRRO",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forBairro", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_NUMERO",
            nullable: true,
            length: 6,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forNumero", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "FOR_CIDADE", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], Fornecedor.prototype, "forCidade", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_CNPJ",
            nullable: true,
            length: 14,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forCnpj", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_IE",
            nullable: true,
            length: 20,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forIe", void 0);
    __decorate([
        typeorm_1.Column("char", {
            name: "FOR_TELEFONE1",
            nullable: true,
            length: 10,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forTelefone1", void 0);
    __decorate([
        typeorm_1.Column("char", {
            name: "FOR_TELEFONE2",
            nullable: true,
            length: 10,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forTelefone2", void 0);
    __decorate([
        typeorm_1.Column("char", {
            name: "FOR_TELEFONE3",
            nullable: true,
            length: 10,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forTelefone3", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_CONTATO",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forContato", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "FOR_EMAIL",
            nullable: true,
            length: 100,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Fornecedor.prototype, "forEmail", void 0);
    Fornecedor = __decorate([
        typeorm_1.Index("PK_FORNECEDOR", ["forId"], { unique: true }),
        typeorm_1.Entity("FORNECEDOR", { schema: "dbo" })
    ], Fornecedor);
    return Fornecedor;
}());
exports.Fornecedor = Fornecedor;
//# sourceMappingURL=Fornecedor.js.map