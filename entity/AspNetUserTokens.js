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
var AspNetUsers_1 = require("./AspNetUsers");
var AspNetUserTokens = /** @class */ (function () {
    function AspNetUserTokens() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "UserId", length: 450 }),
        __metadata("design:type", String)
    ], AspNetUserTokens.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "LoginProvider", length: 450 }),
        __metadata("design:type", String)
    ], AspNetUserTokens.prototype, "loginProvider", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "Name", length: 450 }),
        __metadata("design:type", String)
    ], AspNetUserTokens.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "Value", nullable: true }),
        __metadata("design:type", String)
    ], AspNetUserTokens.prototype, "value", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return AspNetUsers_1.AspNetUsers; }, function (aspNetUsers) { return aspNetUsers.aspNetUserTokens; }, {
            onDelete: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "UserId", referencedColumnName: "id" }]),
        __metadata("design:type", AspNetUsers_1.AspNetUsers)
    ], AspNetUserTokens.prototype, "user", void 0);
    AspNetUserTokens = __decorate([
        typeorm_1.Index("PK_AspNetUserTokens", ["userId", "loginProvider", "name"], {
            unique: true,
        }),
        typeorm_1.Entity("AspNetUserTokens", { schema: "dbo" })
    ], AspNetUserTokens);
    return AspNetUserTokens;
}());
exports.AspNetUserTokens = AspNetUserTokens;
//# sourceMappingURL=AspNetUserTokens.js.map