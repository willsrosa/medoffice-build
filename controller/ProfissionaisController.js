"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
exports.ProfissionaisController = void 0;
var typeorm_1 = require("typeorm");
var Profissionais_1 = require("../entity/Profissionais");
var UsuariosEmpresas_1 = require("../entity/UsuariosEmpresas");
var BaseController_1 = require("./BaseController");
var ProfissionaisController = /** @class */ (function (_super) {
    __extends(ProfissionaisController, _super);
    function ProfissionaisController() {
        var _this = _super.call(this, Profissionais_1.Profissionais) || this;
        _this._empresa = typeorm_1.getRepository(UsuariosEmpresas_1.UsuariosEmpresas);
        return _this;
    }
    ProfissionaisController.prototype.save = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _obj;
            return __generator(this, function (_a) {
                _obj = request.body;
                _super.prototype.isRequired.call(this, _obj.nome, 'o nome é obrigatório');
                _super.prototype.isRequired.call(this, _obj.cpf, 'o CPF é obrigatório');
                _super.prototype.isRequired.call(this, _obj.rg, 'o RG é obrigatório');
                _super.prototype.isRequired.call(this, _obj.dtNasc, 'a data de nascimento é obrigatória');
                _super.prototype.isRequired.call(this, _obj.empresaid, 'a empresa é obrigatória');
                _super.prototype.isRequired.call(this, _obj.conselhoProfissional, 'o conselho é obrigatório');
                _super.prototype.isRequired.call(this, _obj.registroProfissional, 'o registro profissional é obrigatório');
                _super.prototype.isRequired.call(this, _obj.cep, 'o cep é obrigatório');
                _super.prototype.isRequired.call(this, _obj.endereco, 'o endereço é obrigatório');
                _super.prototype.isRequired.call(this, _obj.numero, 'o numero é obrigatório');
                _super.prototype.isRequired.call(this, _obj.bairro, 'o bairro é obrigatório');
                _super.prototype.isRequired.call(this, _obj.cidade, 'a cidade é obrigatória');
                _super.prototype.isRequired.call(this, _obj.uf, 'o UF é obrigatório');
                return [2 /*return*/, _super.prototype.save.call(this, _obj, request)];
            });
        });
    };
    ProfissionaisController.prototype.getByProfissional = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var id, empresas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.numeros(request.headers['x-user-include']);
                        return [4 /*yield*/, this._empresa.findOne({ where: { usuario2: id } })];
                    case 1:
                        empresas = _a.sent();
                        return [2 /*return*/, this.repository.find({
                                where: {
                                    profissionalAgenda: request.params.id,
                                    empresaid: empresas,
                                    dataExclusao: typeorm_1.IsNull()
                                }
                            })];
                }
            });
        });
    };
    return ProfissionaisController;
}(BaseController_1.BaseController));
exports.ProfissionaisController = ProfissionaisController;
//# sourceMappingURL=ProfissionaisController.js.map