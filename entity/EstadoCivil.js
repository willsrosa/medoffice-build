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
var EstadoCivil = /** @class */ (function () {
    function EstadoCivil() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "EC_ID" }),
        __metadata("design:type", Number)
    ], EstadoCivil.prototype, "ecId", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            name: "EC_DESCRICAO",
            nullable: true,
            length: 20,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], EstadoCivil.prototype, "ecDescricao", void 0);
    EstadoCivil = __decorate([
        typeorm_1.Index("PK_ESTADO_CIVIL", ["ecId"], { unique: true }),
        typeorm_1.Entity("ESTADO_CIVIL", { schema: "dbo" })
    ], EstadoCivil);
    return EstadoCivil;
}());
exports.EstadoCivil = EstadoCivil;
//# sourceMappingURL=EstadoCivil.js.map