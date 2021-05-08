"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Usuarios = /** @class */ (function (_super) {
    __extends(Usuarios, _super);
    function Usuarios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "US_ID" }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "usId", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "US_NOME", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "usNome", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "US_LOGIN", nullable: true, length: 10 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "usLogin", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "US_SENHA", nullable: true, length: 6 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "usSenha", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "US_DATA", nullable: true }),
        __metadata("design:type", Date)
    ], Usuarios.prototype, "usData", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "US_DEPTO", nullable: true }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "usDepto", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "US_STATUS", nullable: true }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "usStatus", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "US_EMAIL", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "usEmail", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "US_APROV", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "usAprov", void 0);
    __decorate([
        typeorm_1.Column("smallint", { name: "US_MASTER", nullable: true }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "usMaster", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "US_OPERADOR_CC", nullable: true }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "usOperadorCc", void 0);
    Usuarios = __decorate([
        typeorm_1.Index("PK_USUARIOS", ["usId"], { unique: true }),
        typeorm_1.Entity("USUARIOS", { schema: "dbo" })
    ], Usuarios);
    return Usuarios;
}(typeorm_1.BaseEntity));
exports.Usuarios = Usuarios;
//# sourceMappingURL=Usuarios.js.map