"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpeakerList = void 0;
var vctk_info_json_1 = __importDefault(require("../../assets/vctk_info.json"));
var getSpeakerList = function () { return vctk_info_json_1.default.data.flatMap(function (s) { return s.ID; }); };
exports.getSpeakerList = getSpeakerList;
//# sourceMappingURL=list.js.map