"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var AgendaConsultasLogController_1 = require("./controller/AgendaConsultasLogController");
var AgendasConsultasController_1 = require("./controller/AgendasConsultasController");
var AgendasCoresOdontoController_1 = require("./controller/AgendasCoresOdontoController");
var AgendaStatusController_1 = require("./controller/AgendaStatusController");
var AgendaStatusCoresController_1 = require("./controller/AgendaStatusCoresController");
var AplicacoesController_1 = require("./controller/AplicacoesController");
var ConselhosRegionaisController_1 = require("./controller/ConselhosRegionaisController");
var ConveniosController_1 = require("./controller/ConveniosController");
var EmpresasController_1 = require("./controller/EmpresasController");
var ListaEsperaController_1 = require("./controller/ListaEsperaController");
var PacientePendenciasController_1 = require("./controller/PacientePendenciasController");
var PacientesController_1 = require("./controller/PacientesController");
var PermissoesController_1 = require("./controller/PermissoesController");
var ProcedimentosOdontoController_1 = require("./controller/ProcedimentosOdontoController");
var ProfissionaisAgendasController_1 = require("./controller/ProfissionaisAgendasController");
var ProfissionaisAgendasHorariosController_1 = require("./controller/ProfissionaisAgendasHorariosController");
var ProfissionaisController_1 = require("./controller/ProfissionaisController");
var ProfissionaisConveniosController_1 = require("./controller/ProfissionaisConveniosController");
var ProntuarioAnexosController_1 = require("./controller/ProntuarioAnexosController");
var ProntuarioController_1 = require("./controller/ProntuarioController");
var SalasAplicacoesController_1 = require("./controller/SalasAplicacoesController");
var TipoPendenciaController_1 = require("./controller/TipoPendenciaController");
var UsuarioController_1 = require("./controller/UsuarioController");
var UsuarioPermissoesController_1 = require("./controller/UsuarioPermissoesController");
var UsuariosAgendasController_1 = require("./controller/UsuariosAgendasController");
var UsuariosEmpresasController_1 = require("./controller/UsuariosEmpresasController");
exports.Routes = [
    { method: "get", route: "/usuario", controller: UsuarioController_1.UsuarioController, action: "all" },
    { method: "get", route: "/usuario/:id", controller: UsuarioController_1.UsuarioController, action: "one" },
    { method: "post", route: "/usuario", controller: UsuarioController_1.UsuarioController, action: "CriarUsuario" },
    { method: "post", route: "/usuario/Cadastrar", controller: UsuarioController_1.UsuarioController, action: "CriarUsuario" },
    { method: "post", route: "/usuario/autenticar", controller: UsuarioController_1.UsuarioController, action: "auth" },
    { method: "delete", route: "/usuario", controller: UsuarioController_1.UsuarioController, action: "remove" },
    { method: "get", route: "/agenda", controller: AgendasConsultasController_1.AgendaConsultasController, action: "all" },
    { method: "get", route: "/agenda/:id", controller: AgendasConsultasController_1.AgendaConsultasController, action: "one" },
    { method: "get", route: "/agenda/:id/profissional", controller: AgendasConsultasController_1.AgendaConsultasController, action: "getAgendas" },
    { method: "get", route: "/agenda/:id/:datasolicitada/agendasemanal", controller: AgendasConsultasController_1.AgendaConsultasController, action: "getProfissionalAgendasSemanal" },
    { method: "get", route: "/agenda/:profissional/:data/profissional", controller: AgendasConsultasController_1.AgendaConsultasController, action: "getProfissionalAgendas" },
    { method: "get", route: "/agenda/:profissionalagenda/:id/pesquisarconsultas", controller: AgendasConsultasController_1.AgendaConsultasController, action: "getconsultas" },
    { method: "get", route: "/agenda/:profissionalagenda/:paciente/consultaspaciente", controller: AgendasConsultasController_1.AgendaConsultasController, action: "getconsultasPaciente" },
    { method: "get", route: "/agenda/:profissionalagenda/:inicio/:termino", controller: AgendasConsultasController_1.AgendaConsultasController, action: "getDisponibilidade" },
    { method: "get", route: "/agenda/:id/vinculos", controller: AgendasConsultasController_1.AgendaConsultasController, action: "GetVinculos" },
    { method: "get", route: "/agenda/:profissionalagenda/:id/:data/trintadias", controller: AgendasConsultasController_1.AgendaConsultasController, action: "getconsultasTrintaDias" },
    { method: "post", route: "/agenda", controller: AgendasConsultasController_1.AgendaConsultasController, action: "save" },
    { method: "delete", route: "/agenda/:id", controller: AgendasConsultasController_1.AgendaConsultasController, action: "remove" },
    { method: "get", route: "/convenio", controller: ConveniosController_1.ConveniosController, action: "all" },
    { method: "get", route: "/convenio/:id", controller: ConveniosController_1.ConveniosController, action: "one" },
    { method: "post", route: "/convenio", controller: ConveniosController_1.ConveniosController, action: "save" },
    { method: "delete", route: "/convenio/:id", controller: ConveniosController_1.ConveniosController, action: "remove" },
    { method: "get", route: "/agendastatus", controller: AgendaStatusController_1.AgendaStatusController, action: "all" },
    { method: "get", route: "/agendastatus/:id", controller: AgendaStatusController_1.AgendaStatusController, action: "one" },
    { method: "post", route: "/agendastatus", controller: AgendaStatusController_1.AgendaStatusController, action: "save" },
    { method: "delete", route: "/agendastatus/:id", controller: AgendaStatusController_1.AgendaStatusController, action: "remove" },
    { method: "get", route: "/agendacoresstatus", controller: AgendaStatusCoresController_1.AgendaStatusCoresController, action: "all" },
    { method: "get", route: "/agendacoresstatus/:id", controller: AgendaStatusCoresController_1.AgendaStatusCoresController, action: "one" },
    { method: "get", route: "/agendacoresstatus/:id/agenda", controller: AgendaStatusCoresController_1.AgendaStatusCoresController, action: "GetAgendaCores" },
    { method: "post", route: "/agendacoresstatus", controller: AgendaStatusCoresController_1.AgendaStatusCoresController, action: "save" },
    { method: "delete", route: "/agendacoresstatus/:id", controller: AgendaStatusCoresController_1.AgendaStatusCoresController, action: "remove" },
    { method: "get", route: "/pacientependencias", controller: PacientePendenciasController_1.PacientePendenciasController, action: "all" },
    { method: "get", route: "/pacientependencias/:id", controller: PacientePendenciasController_1.PacientePendenciasController, action: "one" },
    { method: "get", route: "/pacientependencias/:id/:agenda", controller: PacientePendenciasController_1.PacientePendenciasController, action: "getPendencias" },
    { method: "get", route: "/pacientependencias/:id/pendencias/all", controller: PacientePendenciasController_1.PacientePendenciasController, action: "getAllPendencias" },
    { method: "post", route: "/pacientependencias", controller: PacientePendenciasController_1.PacientePendenciasController, action: "save" },
    { method: "delete", route: "/pacientependencias/:id", controller: PacientePendenciasController_1.PacientePendenciasController, action: "remove" },
    { method: "get", route: "/empresa", controller: EmpresasController_1.EmpresasController, action: "all" },
    { method: "get", route: "/empresa/:id", controller: EmpresasController_1.EmpresasController, action: "one" },
    { method: "post", route: "/empresa", controller: EmpresasController_1.EmpresasController, action: "save" },
    { method: "delete", route: "/empresa/:id", controller: EmpresasController_1.EmpresasController, action: "remove" },
    { method: "get", route: "/agendaconsultaslog", controller: AgendaConsultasLogController_1.AgendaConsultasLogController, action: "all" },
    { method: "get", route: "/agendaconsultaslog/:id", controller: AgendaConsultasLogController_1.AgendaConsultasLogController, action: "one" },
    { method: "get", route: "/agendaconsultaslog/:id/logs", controller: AgendaConsultasLogController_1.AgendaConsultasLogController, action: "getLogs" },
    { method: "post", route: "/agendaconsultaslog", controller: AgendaConsultasLogController_1.AgendaConsultasLogController, action: "save" },
    { method: "delete", route: "/agendaconsultaslog/:id", controller: AgendaConsultasLogController_1.AgendaConsultasLogController, action: "remove" },
    { method: "get", route: "/procedimentosodonto", controller: ProcedimentosOdontoController_1.ProcedimentosOdontoController, action: "all" },
    { method: "get", route: "/procedimentosodonto/:id", controller: ProcedimentosOdontoController_1.ProcedimentosOdontoController, action: "one" },
    { method: "post", route: "/procedimentosodonto", controller: ProcedimentosOdontoController_1.ProcedimentosOdontoController, action: "save" },
    { method: "delete", route: "/procedimentosodonto/:id", controller: ProcedimentosOdontoController_1.ProcedimentosOdontoController, action: "remove" },
    { method: "get", route: "/tipoPendencia", controller: TipoPendenciaController_1.TiposPendenciasController, action: "all" },
    { method: "get", route: "/tipoPendencia/:id", controller: TipoPendenciaController_1.TiposPendenciasController, action: "one" },
    { method: "post", route: "/tipoPendencia", controller: TipoPendenciaController_1.TiposPendenciasController, action: "save" },
    { method: "delete", route: "/tipoPendencia/:id", controller: TipoPendenciaController_1.TiposPendenciasController, action: "remove" },
    { method: "get", route: "/aplicacoes", controller: AplicacoesController_1.AplicacoesController, action: "all" },
    { method: "get", route: "/aplicacoes/:id", controller: AplicacoesController_1.AplicacoesController, action: "one" },
    { method: "get", route: "/aplicacoes/:id/aplicacoes", controller: AplicacoesController_1.AplicacoesController, action: "getProfissionalAgenda" },
    { method: "post", route: "/aplicacoes", controller: AplicacoesController_1.AplicacoesController, action: "save" },
    { method: "post", route: "/aplicacoes/salvar", controller: AplicacoesController_1.AplicacoesController, action: "ImportarAgenda" },
    { method: "delete", route: "/aplicacoes/:id", controller: AplicacoesController_1.AplicacoesController, action: "deleteAplicacoes" },
    { method: "get", route: "/agendacores", controller: AgendasCoresOdontoController_1.AgendasCoresOdontoController, action: "all" },
    { method: "get", route: "/agendacores/:id", controller: AgendasCoresOdontoController_1.AgendasCoresOdontoController, action: "one" },
    { method: "get", route: "/agendacores/:id/agenda", controller: AgendasCoresOdontoController_1.AgendasCoresOdontoController, action: "GetAgendaCores" },
    { method: "post", route: "/agendacores", controller: AgendasCoresOdontoController_1.AgendasCoresOdontoController, action: "save" },
    { method: "delete", route: "/agendacores/:id", controller: AgendasCoresOdontoController_1.AgendasCoresOdontoController, action: "remove" },
    { method: "get", route: "/listaespera", controller: ListaEsperaController_1.ListaEsperaController, action: "all" },
    { method: "get", route: "/listaespera/:id", controller: ListaEsperaController_1.ListaEsperaController, action: "one" },
    { method: "get", route: "/listaespera/:id/agenda", controller: ListaEsperaController_1.ListaEsperaController, action: "getListaEspera" },
    { method: "post", route: "/listaespera", controller: ListaEsperaController_1.ListaEsperaController, action: "save" },
    { method: "delete", route: "/listaespera/:id", controller: ListaEsperaController_1.ListaEsperaController, action: "removeId" },
    { method: "get", route: "/salaaplicacoes", controller: SalasAplicacoesController_1.SalaAplicacoesController, action: "all" },
    { method: "get", route: "/salaaplicacoes/:id", controller: SalasAplicacoesController_1.SalaAplicacoesController, action: "one" },
    { method: "get", route: "/salaaplicacoes/:id/salaaplicacoes", controller: SalasAplicacoesController_1.SalaAplicacoesController, action: "getProfissionalAgenda" },
    { method: "post", route: "/salaaplicacoes", controller: SalasAplicacoesController_1.SalaAplicacoesController, action: "save" },
    { method: "post", route: "/salaaplicacoes/salvar", controller: SalasAplicacoesController_1.SalaAplicacoesController, action: "ImportarAgenda" },
    { method: "delete", route: "/salaaplicacoes/:id", controller: SalasAplicacoesController_1.SalaAplicacoesController, action: "remove" },
    { method: "get", route: "/paciente", controller: PacientesController_1.PacientesController, action: "all" },
    { method: "get", route: "/paciente/:id", controller: PacientesController_1.PacientesController, action: "one" },
    { method: "get", route: "/paciente/:id/profissional", controller: PacientesController_1.PacientesController, action: "getProfissionalPacientes" },
    { method: "get", route: "/paciente/:id/pacientes", controller: PacientesController_1.PacientesController, action: "getPacientes" },
    { method: "get", route: "/paciente/:id/:profissional/prontuario", controller: PacientesController_1.PacientesController, action: "getPacienteProntuario" },
    { method: "get", route: "/paciente/:id/ultimoprontuario", controller: PacientesController_1.PacientesController, action: "getUltimoProntuario" },
    { method: "get", route: "/paciente/:id/:cpf", controller: PacientesController_1.PacientesController, action: "getPacienteCadastrado" },
    { method: "post", route: "/paciente", controller: PacientesController_1.PacientesController, action: "save" },
    { method: "delete", route: "/paciente/:id", controller: PacientesController_1.PacientesController, action: "remove" },
    { method: "get", route: "/permissao", controller: PermissoesController_1.PermissoesController, action: "all" },
    { method: "get", route: "/permissao/:id", controller: PermissoesController_1.PermissoesController, action: "one" },
    { method: "post", route: "/permissao", controller: PermissoesController_1.PermissoesController, action: "save" },
    { method: "delete", route: "/permissao/:id", controller: PermissoesController_1.PermissoesController, action: "remove" },
    { method: "get", route: "/profissional", controller: ProfissionaisController_1.ProfissionaisController, action: "all" },
    { method: "get", route: "/profissional/:id", controller: ProfissionaisController_1.ProfissionaisController, action: "one" },
    { method: "post", route: "/profissional", controller: ProfissionaisController_1.ProfissionaisController, action: "save" },
    { method: "delete", route: "/profissional/:id", controller: ProfissionaisController_1.ProfissionaisController, action: "remove" },
    { method: "get", route: "/profissionaisagenda", controller: ProfissionaisAgendasController_1.ProfissionaisAgendasController, action: "all" },
    { method: "get", route: "/profissionaisagenda/:id", controller: ProfissionaisAgendasController_1.ProfissionaisAgendasController, action: "one" },
    { method: "get", route: "/profissionaisagenda/:id/agenda", controller: ProfissionaisAgendasController_1.ProfissionaisAgendasController, action: "getAgenda" },
    { method: "post", route: "/profissionaisagenda", controller: ProfissionaisAgendasController_1.ProfissionaisAgendasController, action: "save" },
    { method: "delete", route: "/profissionaisagenda/:id", controller: ProfissionaisAgendasController_1.ProfissionaisAgendasController, action: "remove" },
    { method: "get", route: "/profissionaisagendaHorario", controller: ProfissionaisAgendasHorariosController_1.ProfissionaisAgendasHorariosController, action: "all" },
    { method: "get", route: "/profissionaisagendaHorario/:id", controller: ProfissionaisAgendasHorariosController_1.ProfissionaisAgendasHorariosController, action: "one" },
    { method: "get", route: "/profissionaisagendaHorario/:id/horarios", controller: ProfissionaisAgendasHorariosController_1.ProfissionaisAgendasHorariosController, action: "getHorario" },
    { method: "post", route: "/profissionaisagendaHorario", controller: ProfissionaisAgendasHorariosController_1.ProfissionaisAgendasHorariosController, action: "save" },
    { method: "delete", route: "/profissionaisagendaHorario/:id", controller: ProfissionaisAgendasHorariosController_1.ProfissionaisAgendasHorariosController, action: "remove" },
    { method: "get", route: "/profissionaisconvenios", controller: ProfissionaisConveniosController_1.ProfissionaisConveniosController, action: "all" },
    { method: "get", route: "/profissionaisconvenios/:id", controller: ProfissionaisConveniosController_1.ProfissionaisConveniosController, action: "one" },
    { method: "get", route: "/profissionaisconvenios/:id/convenios", controller: ProfissionaisConveniosController_1.ProfissionaisConveniosController, action: "getConvenio" },
    { method: "post", route: "/profissionaisconvenios", controller: ProfissionaisConveniosController_1.ProfissionaisConveniosController, action: "save" },
    { method: "delete", route: "/profissionaisconvenios/:id", controller: ProfissionaisConveniosController_1.ProfissionaisConveniosController, action: "remove" },
    { method: "get", route: "/usuariosagenda", controller: UsuariosAgendasController_1.UsuariosAgendasController, action: "all" },
    { method: "get", route: "/usuariosagenda/:id", controller: UsuariosAgendasController_1.UsuariosAgendasController, action: "one" },
    { method: "get", route: "/usuariosagenda/:id/agenda", controller: UsuariosAgendasController_1.UsuariosAgendasController, action: "getAgenda" },
    { method: "post", route: "/usuariosagenda", controller: UsuariosAgendasController_1.UsuariosAgendasController, action: "save" },
    { method: "delete", route: "/usuariosagenda/:id", controller: UsuariosAgendasController_1.UsuariosAgendasController, action: "remove" },
    { method: "get", route: "/usuariosempresa", controller: UsuariosEmpresasController_1.UsuariosEmpresasController, action: "all" },
    { method: "get", route: "/usuariosempresa/:id", controller: UsuariosEmpresasController_1.UsuariosEmpresasController, action: "one" },
    { method: "get", route: "/usuariosempresa/:id/empresas", controller: UsuariosEmpresasController_1.UsuariosEmpresasController, action: "getAgenda" },
    { method: "post", route: "/usuariosempresa", controller: UsuariosEmpresasController_1.UsuariosEmpresasController, action: "save" },
    { method: "delete", route: "/usuariosempresa/:id", controller: UsuariosEmpresasController_1.UsuariosEmpresasController, action: "remove" },
    { method: "get", route: "/conselhoregional", controller: ConselhosRegionaisController_1.ConselhosRegionaisController, action: "all" },
    { method: "get", route: "/conselhoregional/:id", controller: ConselhosRegionaisController_1.ConselhosRegionaisController, action: "one" },
    { method: "post", route: "/conselhoregional", controller: ConselhosRegionaisController_1.ConselhosRegionaisController, action: "save" },
    { method: "delete", route: "/conselhoregional/:id", controller: ConselhosRegionaisController_1.ConselhosRegionaisController, action: "remove" },
    { method: "get", route: "/usuariospermissoes", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "all" },
    { method: "get", route: "/usuariospermissoes/:id/permissoes", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "getAllPermissoes" },
    { method: "get", route: "/usuariospermissoes/:id", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "one" },
    { method: "post", route: "/usuariospermissoes", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "save" },
    { method: "delete", route: "/usuariospermissoes/:id", controller: UsuarioPermissoesController_1.UsuarioPermissoesController, action: "remove" },
    { method: "get", route: "/prontuario", controller: ProntuarioController_1.ProntuariosController, action: "all" },
    { method: "get", route: "/prontuario/:id", controller: ProntuarioController_1.ProntuariosController, action: "one" },
    { method: "get", route: "/prontuario/:id/paciente", controller: ProntuarioController_1.ProntuariosController, action: "getProntuario" },
    { method: "post", route: "/prontuario", controller: ProntuarioController_1.ProntuariosController, action: "save" },
    { method: "delete", route: "/prontuario/:id", controller: ProntuarioController_1.ProntuariosController, action: "remove" },
    { method: "get", route: "/prontuarioanexo", controller: ProntuarioAnexosController_1.ProntuariosAnexosController, action: "all" },
    { method: "get", route: "/prontuarioanexo/:id", controller: ProntuarioAnexosController_1.ProntuariosAnexosController, action: "one" },
    { method: "get", route: "/prontuarioanexo/:id/prontuario", controller: ProntuarioAnexosController_1.ProntuariosAnexosController, action: "getProntuario" },
    { method: "post", route: "/prontuarioanexo", controller: ProntuarioAnexosController_1.ProntuariosAnexosController, action: "save" },
    { method: "delete", route: "/prontuarioanexo/:id", controller: ProntuarioAnexosController_1.ProntuariosAnexosController, action: "remove" }
];
//# sourceMappingURL=routes.js.map