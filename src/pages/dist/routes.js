"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Landing_1 = require("./Landing");
var OrphanagesMap_1 = require("./OrphanagesMap");
function Routes() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Landing_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/app", component: OrphanagesMap_1["default"] }))));
}
exports["default"] = Routes;
