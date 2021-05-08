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
var Igp = /** @class */ (function () {
    function Igp() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "IG_ID" }),
        __metadata("design:type", Number)
    ], Igp.prototype, "igId", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "IG_PERCENTUAL",
            nullable: true,
            precision: 14,
            scale: 4,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Igp.prototype, "igPercentual", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "IG_MESANO",
            nullable: true,
            length: 6,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Igp.prototype, "igMesano", void 0);
    Igp = __decorate([
        typeorm_1.Index("PK_IGP", ["igId"], { unique: true }),
        typeorm_1.Entity("IGP", { schema: "dbo" })
    ], Igp);
    return Igp;
}());
exports.Igp = Igp;
//# sourceMappingURL=Igp.js.map