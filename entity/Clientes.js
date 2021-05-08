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
var Clientes = /** @class */ (function () {
    function Clientes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "CL_ID" }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clId", void 0);
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "CL_LOTEAMENTO" }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clLoteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CL_GRUPO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clGrupo", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_NOME",
            nullable: true,
            length: 120,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clNome", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_SITUACAO",
            nullable: true,
            length: 1,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clSituacao", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_PESSOA",
            nullable: true,
            length: 1,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clPessoa", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_CLASSIF",
            nullable: true,
            length: 1,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clClassif", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_CEP_RES",
            nullable: true,
            length: 8,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clCepRes", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_LOGR_RES",
            nullable: true,
            length: 120,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clLogrRes", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_NUM_RES",
            nullable: true,
            length: 10,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clNumRes", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_COMPL_RES",
            nullable: true,
            length: 30,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clComplRes", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_BAIRRO_RES",
            nullable: true,
            length: 30,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clBairroRes", void 0);
    __decorate([
        typeorm_1.Column("int", {
            name: "CL_CIDADE_RES",
            nullable: true,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clCidadeRes", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_TELEFONE1_RES",
            nullable: true,
            length: 20,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clTelefone1Res", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_TELEFONE2_RES",
            nullable: true,
            length: 20,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clTelefone2Res", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_EMAIL_RES",
            nullable: true,
            length: 100,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clEmailRes", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_CEP_COM",
            nullable: true,
            length: 8,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clCepCom", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_LOGR_COM",
            nullable: true,
            length: 120,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clLogrCom", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_NUM_COM",
            nullable: true,
            length: 10,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clNumCom", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_COMPL_COM",
            nullable: true,
            length: 30,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clComplCom", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_BAIRRO_COM",
            nullable: true,
            length: 30,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clBairroCom", void 0);
    __decorate([
        typeorm_1.Column("int", {
            name: "CL_CIDADE_COM",
            nullable: true,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clCidadeCom", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_TELEFONE1_COM",
            nullable: true,
            length: 20,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clTelefone1Com", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_TELEFONE2_COM",
            nullable: true,
            length: 20,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clTelefone2Com", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_EMAIL_COM",
            nullable: true,
            length: 100,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clEmailCom", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_CPF",
            nullable: true,
            length: 20,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clCpf", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CL_RG",
            nullable: true,
            length: 25,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clRg", void 0);
    __decorate([
        typeorm_1.Column("int", {
            name: "CL_ESTADOCIVIL",
            nullable: true,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clEstadocivil", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CL_DIAPAGTO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clDiapagto", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CL_OBS", nullable: true, length: 500 }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clObs", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CL_ENDPADRAO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clEndpadrao", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "CL_DTCADASTRO", nullable: true }),
        __metadata("design:type", Date)
    ], Clientes.prototype, "clDtcadastro", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "CL_DTALTERACAO", nullable: true }),
        __metadata("design:type", Date)
    ], Clientes.prototype, "clDtalteracao", void 0);
    __decorate([
        typeorm_1.Column("int", {
            name: "CL_USCADASTRO",
            nullable: true,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clUscadastro", void 0);
    __decorate([
        typeorm_1.Column("int", {
            name: "CL_USALTERACAO",
            nullable: true,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Clientes.prototype, "clUsalteracao", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CL_CIDADE_RES_NOME", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clCidadeResNome", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CL_CIDADE_COM_NOME", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clCidadeComNome", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CL_ESTADO_RES", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clEstadoRes", void 0);
    __decorate([
        typeorm_1.Column("char", { name: "CL_ESTADO_COM", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], Clientes.prototype, "clEstadoCom", void 0);
    Clientes = __decorate([
        typeorm_1.Index("IX_CLIENTES_CL_CPF", [
            "clId",
            "clLoteamento",
            "clGrupo",
            "clNome",
            "clSituacao",
            "clPessoa",
            "clClassif",
            "clCepRes",
            "clLogrRes",
            "clNumRes",
            "clComplRes",
            "clBairroRes",
            "clCidadeRes",
            "clTelefone1Res",
            "clTelefone2Res",
            "clEmailRes",
            "clCepCom",
            "clLogrCom",
            "clNumCom",
            "clComplCom",
            "clBairroCom",
            "clCidadeCom",
            "clTelefone1Com",
            "clTelefone2Com",
            "clEmailCom",
            "clRg",
            "clEstadocivil",
            "clDiapagto",
            "clObs",
            "clEndpadrao",
            "clDtcadastro",
            "clDtalteracao",
            "clUscadastro",
            "clUsalteracao",
            "clCidadeResNome",
            "clCidadeComNome",
            "clEstadoRes",
            "clEstadoCom",
            "clCpf",
        ], {}),
        typeorm_1.Index("PK_CLIENTES", ["clLoteamento", "clId"], { unique: true }),
        typeorm_1.Entity("CLIENTES", { schema: "dbo" })
    ], Clientes);
    return Clientes;
}());
exports.Clientes = Clientes;
//# sourceMappingURL=Clientes.js.map