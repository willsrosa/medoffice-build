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
var AspNetRoles = /** @class */ (function () {
    function AspNetRoles() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "Id", length: 450 }),
        __metadata("design:type", String)
    ], AspNetRoles.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "Name", nullable: true, length: 256 }),
        __metadata("design:type", String)
    ], AspNetRoles.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "NormalizedName", nullable: true, length: 256 }),
        __metadata("design:type", String)
    ], AspNetRoles.prototype, "normalizedName", void 0);
    __decorate([
        typeorm_1.Column("nvarchar", { name: "ConcurrencyStamp", nullable: true }),
        __metadata("design:type", String)
    ], AspNetRoles.prototype, "concurrencyStamp", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return AspNetUsers_1.AspNetUsers; }, function (aspNetUsers) { return aspNetUsers.aspNetRoles; }),
        __metadata("design:type", Array)
    ], AspNetRoles.prototype, "aspNetUsers", void 0);
    AspNetRoles = __decorate([
        typeorm_1.Index("PK_AspNetRoles", ["id"], { unique: true }),
        typeorm_1.Entity("AspNetRoles", { schema: "dbo" })
    ], AspNetRoles);
    return AspNetRoles;
}());
exports.AspNetRoles = AspNetRoles;
//# sourceMappingURL=AspNetRoles.js.map