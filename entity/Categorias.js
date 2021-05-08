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
var Categorias = /** @class */ (function () {
    function Categorias() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "CT_ID" }),
        __metadata("design:type", Number)
    ], Categorias.prototype, "ctId", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CT_DESCRICAO",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Categorias.prototype, "ctDescricao", void 0);
    Categorias = __decorate([
        typeorm_1.Index("PK_CATEGORIAS", ["ctId"], { unique: true }),
        typeorm_1.Entity("CATEGORIAS", { schema: "dbo" })
    ], Categorias);
    return Categorias;
}());
exports.Categorias = Categorias;
//# sourceMappingURL=Categorias.js.map