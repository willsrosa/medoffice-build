"use strict";
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
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var routes_1 = require("./routes");
var config_1 = require("./configuration/config");
var auth_1 = require("./middlaware/auth");
var xml2js = require('xml2js');
var https = require('https');
var http = require('http');
var fs = require('fs');
var privateKey = fs.readFileSync('selfsigned.key', 'utf8');
var certificate = fs.readFileSync('selfsigned.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };
// create express app
var app = express();
app.use(bodyParser.json({ limit: '50mb' }));
var origins = ['http://localhost:4200', 'http://localhost:8100', 'http://localhost'];
var corsOptions = {
    origin: origins,
    optionsSuccessStatus: 200,
};
// app.use(cors(corsOptions));
app.use(cors());
app.use(auth_1.default);
// register express routes from defined application routes
routes_1.Routes.forEach(function (route) {
    app[route.method](route.route, function (req, res, next) {
        var result = (new route.controller)[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(function (d) {
                if (d && d.status)
                    res.status(d.status).send(d.message || d.errors);
                else if (d && d.file)
                    res.sendFile(d.file);
                else
                    res.json(d);
            });
        }
        else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(config_1.default.port, '0.0.0.0', function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Api initilze in port ".concat(config_1.default.port));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, typeorm_1.createConnection)()];
            case 2:
                _a.sent();
                console.log('Database connected');
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Data base not connected', error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=index.js.map