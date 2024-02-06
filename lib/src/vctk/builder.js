"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VctkSpeakerBuilder = void 0;
var vctk_info_json_1 = __importDefault(require("../../assets/vctk_info.json"));
var models_1 = require("../cli/models");
var VctkSpeaker = (function () {
    function VctkSpeaker() {
        this.gender = "M";
    }
    return VctkSpeaker;
}());
var VctkSpeakerBuilder = (function () {
    function VctkSpeakerBuilder() {
        this.speaker = new VctkSpeaker();
    }
    VctkSpeakerBuilder.prototype.setGender = function (gender) {
        this.speaker.gender = gender;
        return this;
    };
    VctkSpeakerBuilder.prototype.setAge = function (age) {
        this.speaker.age = age;
        return this;
    };
    VctkSpeakerBuilder.prototype.setModel = function (model) {
        this.ttsModel = model;
        return this;
    };
    VctkSpeakerBuilder.prototype.setAccent = function (accent) {
        this.speaker.accents = accent;
        return this;
    };
    VctkSpeakerBuilder.prototype.setRegion = function (region) {
        this.speaker.region = region;
        return this;
    };
    VctkSpeakerBuilder.prototype.build = function () {
        var speaker;
        for (var _i = 0, _a = vctk_info_json_1.default.data; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.GENDER !== this.speaker.gender)
                continue;
            if (p.AGE !== this.speaker.age && this.speaker.age !== undefined)
                continue;
            if (p.ACCENTS !== this.speaker.accents && this.speaker.accents !== undefined)
                continue;
            if (p.REGION !== this.speaker.region && this.speaker.region !== undefined)
                continue;
            speaker = p;
        }
        console.log(speaker.GENDER);
        if (speaker === undefined)
            throw new Error("Speaker Could not be found with the input from builder. \nDATA: ".concat(JSON.stringify(this.speaker)));
        if (this.ttsModel === models_1.TTSModel["tts_models/en/vctk/fast_pitch"])
            return "VCTK_" + speaker.ID;
        return speaker.ID;
    };
    return VctkSpeakerBuilder;
}());
exports.VctkSpeakerBuilder = VctkSpeakerBuilder;
//# sourceMappingURL=builder.js.map