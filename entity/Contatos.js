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
var Contatos = /** @class */ (function () {
    function Contatos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "CT_ID" }),
        __metadata("design:type", Number)
    ], Contatos.prototype, "ctId", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "CT_DATA", nullable: true }),
        __metadata("design:type", Date)
    ], Contatos.prototype, "ctData", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CT_USUARIO", nullable: true }),
        __metadata("design:type", Number)
    ], Contatos.prototype, "ctUsuario", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CT_CATEGORIA", nullable: true }),
        __metadata("design:type", Number)
    ], Contatos.prototype, "ctCategoria", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CT_LOTEAMENTO", nullable: true }),
        __metadata("design:type", Number)
    ], Contatos.prototype, "ctLoteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CT_CLIENTE", nullable: true }),
        __metadata("design:type", Number)
    ], Contatos.prototype, "ctCliente", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "CT_OBS", nullable: true, length: 255 }),
        __metadata("design:type", String)
    ], Contatos.prototype, "ctObs", void 0);
    Contatos = __decorate([
        typeorm_1.Index("CONTATOS_IDX1", ["ctLoteamento", "ctCliente"], {}),
        typeorm_1.Entity("CONTATOS", { schema: "dbo" })
    ], Contatos);
    return Contatos;
}());
exports.Contatos = Contatos;
//# sourceMappingURL=Contatos.js.map