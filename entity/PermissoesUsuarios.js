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
var PermissoesUsuarios = /** @class */ (function () {
    function PermissoesUsuarios() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], PermissoesUsuarios.prototype, "Id", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "Permissao",
            nullable: true,
            length: 60,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], PermissoesUsuarios.prototype, "Permissao", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "Descricao",
            nullable: true,
            length: 80,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], PermissoesUsuarios.prototype, "Descricao", void 0);
    PermissoesUsuarios = __decorate([
        typeorm_1.Index("PK_PermissoesUsuarios", ["Id"], { unique: true }),
        typeorm_1.Entity("PermissoesUsuarios", { schema: "dbo" })
    ], PermissoesUsuarios);
    return PermissoesUsuarios;
}());
exports.PermissoesUsuarios = PermissoesUsuarios;
//# sourceMappingURL=PermissoesUsuarios.js.map