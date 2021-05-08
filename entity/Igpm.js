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
var Igpm = /** @class */ (function () {
    function Igpm() {
    }
    __decorate([
        typeorm_1.Column("char", { primary: true, name: "dataref", length: 6 }),
        __metadata("design:type", String)
    ], Igpm.prototype, "dataref", void 0);
    __decorate([
        typeorm_1.Column("decimal", { name: "igpm", nullable: true, precision: 7, scale: 2 }),
        __metadata("design:type", Number)
    ], Igpm.prototype, "igpm", void 0);
    __decorate([
        typeorm_1.Column("decimal", {
            name: "fator_igpm",
            nullable: true,
            precision: 18,
            scale: 4,
        }),
        __metadata("design:type", Number)
    ], Igpm.prototype, "fatorIgpm", void 0);
    __decorate([
        typeorm_1.Column("decimal", {
            name: "igp_acumulado",
            nullable: true,
            precision: 18,
            scale: 2,
        }),
        __metadata("design:type", Number)
    ], Igpm.prototype, "igpAcumulado", void 0);
    __decorate([
        typeorm_1.Column("decimal", {
            name: "igp_acumulado_100000",
            nullable: true,
            precision: 12,
            scale: 4,
        }),
        __metadata("design:type", Number)
    ], Igpm.prototype, "igpAcumulado_100000", void 0);
    Igpm = __decorate([
        typeorm_1.Index("Pk_igpm", ["dataref"], { unique: true }),
        typeorm_1.Entity("igpm", { schema: "dbo" })
    ], Igpm);
    return Igpm;
}());
exports.Igpm = Igpm;
//# sourceMappingURL=Igpm.js.map