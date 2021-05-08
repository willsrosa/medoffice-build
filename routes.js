"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientesController_1 = require("./controller/ClientesController");
var DepartamentoController_1 = require("./controller/DepartamentoController");
var LoteamentoController_1 = require("./controller/LoteamentoController");
var LotesCondicoesController_1 = require("./controller/LotesCondicoesController");
var LotesController_1 = require("./controller/LotesController");
var PermissoesUsuarioController_1 = require("./controller/PermissoesUsuarioController");
var UsuarioController_1 = require("./controller/UsuarioController");
var UsuarioPermissoesController_1 = require("./controller/UsuarioPermissoesController");
exports.Routes = [
    { method: "get", route: "/usuario", controller: UsuarioController_1.UsuarioController, action: "all" },
    { method: "get", route: "/usuario/:id", controller: UsuarioController_1.UsuarioController, action: "one" },
    { method: "post", route: "/usuario", controller: UsuarioController_1.UsuarioController, action: "save" },
    { method: "post", route: "/usuario/Cadastrar", controller: UsuarioController_1.UsuarioController, action: "CriarUsuario" },
    { method: "post", route: "/usuario/autenticar", controller: UsuarioController_1.UsuarioController, action: "auth" },
    { method: "delete", route: "/usuario", controller: UsuarioController_1.UsuarioController, action: "remove" },
    { method: "get", route: "/departamento", controller: DepartamentoController_1.DepartamentoController, action: "all" },
    { method: "get", route: "/departamento/:id", controller: DepartamentoController_1.DepartamentoController, action: "one" },
    { method: "post", route: "/departamento", controller: DepartamentoController_1.DepartamentoController, action: "save" },
    { method: "delete", route: "/departamento/:id", controller: DepartamentoController_1.DepartamentoController, action: "remove" },
    { method: "get", route: "/loteamento", controller: LoteamentoController_1.LoteamentoController, action: "all" },
    { method: "get", route: "/loteamento/:id", controller: LoteamentoController_1.LoteamentoController, action: "one" },
    { method: "post", route: "/loteamento", controller: LoteamentoController_1.LoteamentoController, action: "save" },
    { method: "delete", route: "/loteamento/:id", controller: LoteamentoController_1.LoteamentoController, action: "remove" },
    { method: "get", route: "/lotes", controller: LotesController_1.LotesController, action: "all" },
    { method: "get", route: "/lotes/:id", controller: LotesController_1.LotesController, action: "one" },
    { method: "post", route: "/lotes", controller: LotesController_1.LotesController, action: "save" },
    { method: "delete", route: "/lotes/:id", controller: LotesController_1.LotesController, action: "remove" },
    { method: "get", route: "/lotescondicoes", controller: LotesCondicoesController_1.LotesCondicoesController, action: "all" },
    { method: "get", route: "/lotescondicoes/:id", controller: LotesCondicoesController_1.LotesCondicoesController, action: "one" },
    { method: "post", route: "/lotescondicoes", controller: LotesCondicoesController_1.LotesCondicoesController, action: "save" },
    { method: "delete", route: "/lotescondicoes/:id", controller: LotesCondicoesController_1.LotesCondicoesController, action: "remove" },
    { method: "get", route: "/permissoesusuarios", controller: PermissoesUsuarioController_1.PermissoesUsuariosController, action: "all" },
    { method: "get", route: "/permissoesusuarios/:id", controller: PermissoesUsuarioController_1.PermissoesUsuariosController, action: "one" },
    { method: "post", route: "/permissoesusuarios", controller: PermissoesUsuarioController_1.PermissoesUsuariosController, action: "save" },
    { method: "delete", route: "/permissoesusuarios/:id", controller: PermissoesUsuarioController_1.PermissoesUsuariosController, action: "remove" },
    { method: "get", route: "/clientes", controller: ClientesController_1.ClientesController, action: "all" },
    { method: "get", route: "/clientes/:id", controller: ClientesController_1.ClientesController, action: "one" },
    { method: "post", route: "/clientes", controller: ClientesController_1.ClientesController, action: "save" },
    { method: "delete", route: "/clientes/:id", controller: ClientesController_1.ClientesController, action: "remove" },
    { method: "get", route: "/usuariospermissoes", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "all" },
    { method: "get", route: "/usuariospermissoes/:id/permissoes", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "getAllPermissoes" },
    { method: "get", route: "/usuariospermissoes/:id", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "one" },
    { method: "post", route: "/usuariospermissoes", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "save" },
    { method: "delete", route: "/usuariospermissoes/:id", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "remove" },
];
//# sourceMappingURL=routes.js.map