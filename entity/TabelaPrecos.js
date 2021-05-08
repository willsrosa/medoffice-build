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
var TabelaPrecos = /** @class */ (function () {
    function TabelaPrecos() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "tabelaPrecoId" }),
        __metadata("design:type", Number)
    ], TabelaPrecos.prototype, "tabelaPrecoId", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "tabelaPrecoLoteamento", nullable: true }),
        __metadata("design:type", Number)
    ], TabelaPrecos.prototype, "tabelaPrecoLoteamento", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "tabelaPrecoParcelas", nullable: true }),
        __metadata("design:type", Number)
    ], TabelaPrecos.prototype, "tabelaPrecoParcelas", void 0);
    __decorate([
        typeorm_1.Column("numeric", {
            name: "tabelaPrecoIndice",
            nullable: true,
            precision: 18,
            scale: 7,
        }),
        __metadata("design:type", Number)
    ], TabelaPrecos.prototype, "tabelaPrecoIndice", void 0);
    TabelaPrecos = __decorate([
        typeorm_1.Index("PK_tabelaPrecos", ["tabelaPrecoId"], { unique: true }),
        typeorm_1.Entity("tabelaPrecos", { schema: "dbo" })
    ], TabelaPrecos);
    return TabelaPrecos;
}());
exports.TabelaPrecos = TabelaPrecos;
//# sourceMappingURL=TabelaPrecos.js.map