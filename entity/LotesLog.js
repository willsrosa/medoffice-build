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
var Lotes_1 = require("./Lotes");
var LotesLog = /** @class */ (function () {
    function LotesLog() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], LotesLog.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "DataOcorrencia", nullable: true }),
        __metadata("design:type", Date)
    ], LotesLog.prototype, "dataOcorrencia", void 0);
    __decorate([
        typeorm_1.Column("varchar", { name: "Historico", nullable: true, length: 1000 }),
        __metadata("design:type", String)
    ], LotesLog.prototype, "historico", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "usuario", nullable: true }),
        __metadata("design:type", Number)
    ], LotesLog.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "datahora", nullable: true }),
        __metadata("design:type", Date)
    ], LotesLog.prototype, "datahora", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Lotes_1.Lotes; }, function (lotes) { return lotes.lotesLogs; }),
        typeorm_1.JoinColumn([
            { name: "Loteamento", referencedColumnName: "ltLoteamento" },
            { name: "Quadra", referencedColumnName: "ltQuadra" },
            { name: "Lote", referencedColumnName: "ltLote" },
            { name: "Contrato", referencedColumnName: "ltContrato" },
        ]),
        __metadata("design:type", Lotes_1.Lotes)
    ], LotesLog.prototype, "lotes", void 0);
    LotesLog = __decorate([
        typeorm_1.Index("PK_Lotes_log", ["id"], { unique: true }),
        typeorm_1.Entity("LOTES_LOG", { schema: "dbo" })
    ], LotesLog);
    return LotesLog;
}());
exports.LotesLog = LotesLog;
//# sourceMappingURL=LotesLog.js.map