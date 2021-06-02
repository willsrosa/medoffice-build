"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacoesController = void 0;
var typeorm_1 = require("typeorm");
var AgendasConsultas_1 = require("../entity/AgendasConsultas");
var BaseController_1 = require("./BaseController");
var moment = require("moment");
var Aplicacoes_1 = require("../entity/Aplicacoes");
var AplicacoesController = /** @class */ (function (_super) {
    __extends(AplicacoesController, _super);
    function AplicacoesController() {
        var _this = _super.call(this, Aplicacoes_1.Aplicacoes) || this;
        _this._aplicacoes = typeorm_1.getRepository(Aplicacoes_1.Aplicacoes);
        _this._agendas = typeorm_1.getRepository(AgendasConsultas_1.AgendasConsultas);
        return _this;
    }
    AplicacoesController.prototype.save = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _obj;
            return __generator(this, function (_a) {
                _obj = request.body;
                // super.isRequired(_obj.tipo, 'o tipo  é obrigatório');
                // super.isRequired(_obj.obs, 'a observação é obrigatória');
                return [2 /*return*/, _super.prototype.save.call(this, _obj, request)];
            });
        });
    };
    AplicacoesController.prototype.ImportarAgenda = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _obj, agenda, all, data, agendaall, _i, agendaall_1, item, obj;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _obj = request.body;
                        agenda = _obj.profissionaisAgendas;
                        return [4 /*yield*/, this._aplicacoes.find({
                                profissionaisAgendas: agenda
                            })];
                    case 1:
                        all = _a.sent();
                        data = moment(new Date()).format("YYYY-MM-DD");
                        // for (var item in all) {
                        //     this._aplicacoes.delete(item[0]);
                        // }
                        return [4 /*yield*/, all.forEach(function (element) {
                                _this._aplicacoes.delete(element.id);
                            })];
                    case 2:
                        // for (var item in all) {
                        //     this._aplicacoes.delete(item[0]);
                        // }
                        _a.sent();
                        return [4 /*yield*/, this._agendas.find({
                                dataAgenda: data
                            })];
                    case 3:
                        agendaall = _a.sent();
                        for (_i = 0, agendaall_1 = agendaall; _i < agendaall_1.length; _i++) {
                            item = agendaall_1[_i];
                            obj = new Aplicacoes_1.Aplicacoes();
                            obj.paciente = item.pacienteNome;
                            obj.profissionaisAgendas = agenda;
                            if (item.paciente) {
                                obj.pacienteId = item.paciente.id;
                            }
                            obj.horario = item.hora;
                            obj.tipo = 1;
                            this._aplicacoes.save(obj);
                        }
                        // await agendaall.asyncForEach(element => {
                        //     var obj = new Aplicacoes();
                        //      obj.paciente = element.pacienteNome;
                        //      obj.profissionaisAgendas = agenda;
                        //      if(element.paciente){
                        //         obj.pacienteId = element.paciente.id;
                        //      }
                        //      obj.horario = element.hora;
                        //      obj.tipo = 1;
                        //     // console.log(obj)
                        //      this._aplicacoes.save(obj);
                        // }).then();
                        return [2 /*return*/, {
                                status: 200,
                                success: true,
                                message: "Importado com sucesso"
                            }];
                }
            });
        });
    };
    AplicacoesController.prototype.getProfissionalAgenda = function (request) {
        return this.repository.find({
            where: {
                profissionaisAgendas: request.params.id,
            }
        });
    };
    return AplicacoesController;
}(BaseController_1.BaseController));
exports.AplicacoesController = AplicacoesController;
//# sourceMappingURL=AplicacoesController.js.map