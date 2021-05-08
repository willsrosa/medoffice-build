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
var AspNetUserClaims = /** @class */ (function () {
    function AspNetUserClaims() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], AspNetUserClaims.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "ClaimType", nullable: true }),
        __metadata("design:type", String)
    ], AspNetUserClaims.prototype, "claimType", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "ClaimValue", nullable: true }),
        __metadata("design:type", String)
    ], AspNetUserClaims.prototype, "claimValue", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return AspNetUsers_1.AspNetUsers; }, function (aspNetUsers) { return aspNetUsers.aspNetUserClaims; }, {
            onDelete: "CASCADE",
        }),
        typeorm_1.JoinColumn([{ name: "UserId", referencedColumnName: "id" }]),
        __metadata("design:type", AspNetUsers_1.AspNetUsers)
    ], AspNetUserClaims.prototype, "user", void 0);
    AspNetUserClaims = __decorate([
        typeorm_1.Index("PK_AspNetUserClaims", ["id"], { unique: true }),
        typeorm_1.Entity("AspNetUserClaims", { schema: "dbo" })
    ], AspNetUserClaims);
    return AspNetUserClaims;
}());
exports.AspNetUserClaims = AspNetUserClaims;
//# sourceMappingURL=AspNetUserClaims.js.map