"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
     port: 2083,
    folderStorage: process.env.URL_STORAGE || "./storage",
    secretyKey: process.env.SECRETYKEY || 'f5ccc0f3-cbb6-4788-b4c8-403c22cd110f',
    publicRoutes: process.env.PUBLICROUTERS || ['usuario/Cadastrar', 'usuario/autenticar', 'categoria', 'banner', 'produtos/:id/categoria', 'usuario/cadastro', 'usuario/logar', 'usuario', 'adicionais', 'produtos', 'pedido/notificacao', '/pedido/token', '/pedido/Pagamento', 'parametros']
};
//# sourceMappingURL=config.js.map