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
var Departamento = /** @class */ (function () {
    function Departamento() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "dp_id" }),
        __metadata("design:type", Number)
    ], Departamento.prototype, "dpId", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "dp_desc", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Departamento.prototype, "dpDesc", void 0);
    Departamento = __decorate([
        typeorm_1.Index("Pk_departamento", ["dpId"], { unique: true }),
        typeorm_1.Entity("departamento", { schema: "dbo" })
    ], Departamento);
    return Departamento;
}());
exports.Departamento = Departamento;
//# sourceMappingURL=Departamento.js.map