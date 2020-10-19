"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var react_router_dom_1 = require("react-router-dom");
require("../styles/pages/landing.css");
var Logo_svg_1 = require("../images/Logo.svg");
function Landing() {
    return (react_1["default"].createElement("div", { id: "page-landing" },
        react_1["default"].createElement("div", { className: "content-wrapper" },
            react_1["default"].createElement("img", { src: Logo_svg_1["default"], alt: "Logo da Happy" }),
            react_1["default"].createElement("main", null,
                react_1["default"].createElement("h1", null, "Leve a felicidade para o mundo"),
                react_1["default"].createElement("p", null, "Visite orfanatos e mude o dia de muitas crian\u00E7as.")),
            react_1["default"].createElement("div", { className: "location" },
                react_1["default"].createElement("strong", null, "Getulina"),
                react_1["default"].createElement("span", null, "S\u00E3o Paulo")),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/app", className: "enter-app" },
                react_1["default"].createElement(fi_1.FiArrowRight, { size: 26, color: "rgba(0, 0, 0, 0.6)" })))));
}
exports["default"] = Landing;
