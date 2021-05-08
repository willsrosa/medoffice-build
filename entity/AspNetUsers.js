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
var AspNetUserClaims_1 = require("./AspNetUserClaims");
var AspNetUserLogins_1 = require("./AspNetUserLogins");
var AspNetRoles_1 = require("./AspNetRoles");
var AspNetUserTokens_1 = require("./AspNetUserTokens");
var AspNetUsers = /** @class */ (function () {
    function AspNetUsers() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "Id", length: 450 }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "UserName", nullable: true, length: 256 }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "userName", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", {
            name: "NormalizedUserName",
            nullable: true,
            length: 256,
        }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "normalizedUserName", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "Email", nullable: true, length: 256 }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "NormalizedEmail", nullable: true, length: 256 }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "normalizedEmail", void 0);
    __decorate([
        typeorm_1.Column("bit", { name: "EmailConfirmed" }),
        __metadata("design:type", Boolean)
    ], AspNetUsers.prototype, "emailConfirmed", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "PasswordHash", nullable: true }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "passwordHash", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "SecurityStamp", nullable: true }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "securityStamp", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "ConcurrencyStamp", nullable: true }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "concurrencyStamp", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "PhoneNumber", nullable: true }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "phoneNumber", void 0);
    __decorate([
        typeorm_1.Column("bit", { name: "PhoneNumberConfirmed" }),
        __metadata("design:type", Boolean)
    ], AspNetUsers.prototype, "phoneNumberConfirmed", void 0);
    __decorate([
        typeorm_1.Column("bit", { name: "TwoFactorEnabled" }),
        __metadata("design:type", Boolean)
    ], AspNetUsers.prototype, "twoFactorEnabled", void 0);
    __decorate([
        typeorm_1.Column("datetimeoffset", { name: "LockoutEnd", nullable: true }),
        __metadata("design:type", Date)
    ], AspNetUsers.prototype, "lockoutEnd", void 0);
    __decorate([
        typeorm_1.Column("bit", { name: "LockoutEnabled" }),
        __metadata("design:type", Boolean)
    ], AspNetUsers.prototype, "lockoutEnabled", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "AccessFailedCount" }),
        __metadata("design:type", Number)
    ], AspNetUsers.prototype, "accessFailedCount", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "Discriminator", nullable: true }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "discriminator", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "Nome", nullable: true }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "nome", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "ClienteId", nullable: true }),
        __metadata("design:type", Number)
    ], AspNetUsers.prototype, "clienteId", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], AspNetUsers.prototype, "dataHora", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataAlteracao", nullable: true }),
        __metadata("design:type", Date)
    ], AspNetUsers.prototype, "dataAlteracao", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], AspNetUsers.prototype, "dataExclusao", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "Sobrenome", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], AspNetUsers.prototype, "sobrenome", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "Loteamento", nullable: true }),
        __metadata("design:type", Number)
    ], AspNetUsers.prototype, "loteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "UsuarioLotesId", nullable: true }),
        __metadata("design:type", Number)
    ], AspNetUsers.prototype, "usuarioLotesId", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return AspNetUserClaims_1.AspNetUserClaims; }, function (aspNetUserClaims) { return aspNetUserClaims.user; }),
        __metadata("design:type", Array)
    ], AspNetUsers.prototype, "aspNetUserClaims", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return AspNetUserLogins_1.AspNetUserLogins; }, function (aspNetUserLogins) { return aspNetUserLogins.user; }),
        __metadata("design:type", Array)
    ], AspNetUsers.prototype, "aspNetUserLogins", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return AspNetRoles_1.AspNetRoles; }, function (aspNetRoles) { return aspNetRoles.aspNetUsers; }),
        typeorm_1.JoinTable({
            name: "AspNetUserRoles",
            joinColumns: [{ name: "UserId", referencedColumnName: "id" }],
            inverseJoinColumns: [{ name: "RoleId", referencedColumnName: "id" }],
            schema: "dbo",
        }),
        __metadata("design:type", Array)
    ], AspNetUsers.prototype, "aspNetRoles", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return AspNetUserTokens_1.AspNetUserTokens; }, function (aspNetUserTokens) { return aspNetUserTokens.user; }),
        __metadata("design:type", Array)
    ], AspNetUsers.prototype, "aspNetUserTokens", void 0);
    AspNetUsers = __decorate([
        typeorm_1.Index("PK_AspNetUsers", ["id"], { unique: true }),
        typeorm_1.Entity("AspNetUsers", { schema: "dbo" })
    ], AspNetUsers);
    return AspNetUsers;
}());
exports.AspNetUsers = AspNetUsers;
//# sourceMappingURL=AspNetUsers.js.map