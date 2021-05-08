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
var Parametros = /** @class */ (function () {
    function Parametros() {
    }
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PAR_JUROS",
            nullable: true,
            precision: 15,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Parametros.prototype, "parJuros", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "PAR_MULTA",
            nullable: true,
            precision: 15,
            scale: 2,
            default: function () { return "(0)"; },
        }),
        __metadata("design:type", Number)
    ], Parametros.prototype, "parMulta", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "PAR_IGP",
            nullable: true,
            length: 6,
            default: function () { return "'0'"; },
        }),
        __metadata("design:type", String)
    ], Parametros.prototype, "parIgp", void 0);
    __decorate([
        typeorm_1.Column("int", { primary: true, name: "par_id" }),
        __metadata("design:type", Number)
    ], Parametros.prototype, "parId", void 0);
    Parametros = __decorate([
        typeorm_1.Index("PK_Parametros", ["parId"], { unique: true }),
        typeorm_1.Entity("PARAMETROS", { schema: "dbo" })
    ], Parametros);
    return Parametros;
}());
exports.Parametros = Parametros;
//# sourceMappingURL=Parametros.js.map