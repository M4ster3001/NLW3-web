"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bi_1 = require("react-icons/bi");
var fi_1 = require("react-icons/fi");
var react_router_dom_1 = require("react-router-dom");
var mark_svg_1 = require("../images/mark.svg");
require("../styles/pages/orphanages-map.css");
function OrphanagesMap() {
    return (react_1["default"].createElement("div", { id: "page-map" },
        react_1["default"].createElement("aside", null,
            react_1["default"].createElement("header", null,
                react_1["default"].createElement("img", { src: mark_svg_1["default"], alt: "Icon marca no mapa" }),
                react_1["default"].createElement("h2", null, "Escolha um orfanato no map"),
                react_1["default"].createElement("p", null,
                    "Muitas crian\u00E7as est\u00E3o esperando a sua visita ",
                    react_1["default"].createElement(bi_1.BiHappyBeaming, { size: 22, color: "#000" }))),
            react_1["default"].createElement("footer", null,
                react_1["default"].createElement("strong", null, "Getulina"),
                react_1["default"].createElement("span", null, "S\u00E3o Paulo"))),
        react_1["default"].createElement("div", null),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "", className: "create-orphanage" },
            react_1["default"].createElement(fi_1.FiPlus, { size: 32, color: "#fff" }))));
}
exports["default"] = OrphanagesMap;
