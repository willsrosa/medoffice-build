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
var CentroCusto = /** @class */ (function () {
    function CentroCusto() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "CC_ID" }),
        __metadata("design:type", Number)
    ], CentroCusto.prototype, "ccId", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "CC_DESCRICAO",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], CentroCusto.prototype, "ccDescricao", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "CC_TIPO", nullable: true, default: function () { return "(0)"; } }),
        __metadata("design:type", Number)
    ], CentroCusto.prototype, "ccTipo", void 0);
    CentroCusto = __decorate([
        typeorm_1.Index("PK_CENTRO_CUSTO", ["ccId"], { unique: true }),
        typeorm_1.Entity("CENTRO_CUSTO", { schema: "dbo" })
    ], CentroCusto);
    return CentroCusto;
}());
exports.CentroCusto = CentroCusto;
//# sourceMappingURL=CentroCusto.js.map