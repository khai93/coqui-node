"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FemaleModels = exports.VocoderModel = exports.TTSModel = void 0;
var TTSModel;
(function (TTSModel) {
    TTSModel[TTSModel["tts_models/multilingual/multi-dataset/xtts_v2"] = 0] = "tts_models/multilingual/multi-dataset/xtts_v2";
    TTSModel[TTSModel["tts_models/multilingual/multi-dataset/xtts_v1.1"] = 1] = "tts_models/multilingual/multi-dataset/xtts_v1.1";
    TTSModel[TTSModel["tts_models/multilingual/multi-dataset/your_tts"] = 2] = "tts_models/multilingual/multi-dataset/your_tts";
    TTSModel[TTSModel["tts_models/multilingual/multi-dataset/bark"] = 3] = "tts_models/multilingual/multi-dataset/bark";
    TTSModel[TTSModel["tts_models/bg/cv/vits"] = 4] = "tts_models/bg/cv/vits";
    TTSModel[TTSModel["tts_models/cs/cv/vits"] = 5] = "tts_models/cs/cv/vits";
    TTSModel[TTSModel["tts_models/da/cv/vits"] = 6] = "tts_models/da/cv/vits";
    TTSModel[TTSModel["tts_models/et/cv/vits"] = 7] = "tts_models/et/cv/vits";
    TTSModel[TTSModel["tts_models/ga/cv/vits"] = 8] = "tts_models/ga/cv/vits";
    TTSModel[TTSModel["tts_models/en/ek1/tacotron2"] = 9] = "tts_models/en/ek1/tacotron2";
    TTSModel[TTSModel["tts_models/en/ljspeech/tacotron2-DDC"] = 10] = "tts_models/en/ljspeech/tacotron2-DDC";
    TTSModel[TTSModel["tts_models/en/ljspeech/tacotron2-DDC_ph"] = 11] = "tts_models/en/ljspeech/tacotron2-DDC_ph";
    TTSModel[TTSModel["tts_models/en/ljspeech/glow-tts"] = 12] = "tts_models/en/ljspeech/glow-tts";
    TTSModel[TTSModel["tts_models/en/ljspeech/speedy-speech"] = 13] = "tts_models/en/ljspeech/speedy-speech";
    TTSModel[TTSModel["tts_models/en/ljspeech/tacotron2-DCA"] = 14] = "tts_models/en/ljspeech/tacotron2-DCA";
    TTSModel[TTSModel["tts_models/en/ljspeech/vits"] = 15] = "tts_models/en/ljspeech/vits";
    TTSModel[TTSModel["tts_models/en/ljspeech/vits--neon"] = 16] = "tts_models/en/ljspeech/vits--neon";
    TTSModel[TTSModel["tts_models/en/ljspeech/fast_pitch"] = 17] = "tts_models/en/ljspeech/fast_pitch";
    TTSModel[TTSModel["tts_models/en/ljspeech/overflow"] = 18] = "tts_models/en/ljspeech/overflow";
    TTSModel[TTSModel["tts_models/en/ljspeech/neural_hmm"] = 19] = "tts_models/en/ljspeech/neural_hmm";
    TTSModel[TTSModel["tts_models/en/vctk/vits"] = 20] = "tts_models/en/vctk/vits";
    TTSModel[TTSModel["tts_models/en/vctk/fast_pitch"] = 21] = "tts_models/en/vctk/fast_pitch";
    TTSModel[TTSModel["tts_models/en/sam/tacotron-DDC"] = 22] = "tts_models/en/sam/tacotron-DDC";
    TTSModel[TTSModel["tts_models/en/blizzard2013/capacitron-t2-c50"] = 23] = "tts_models/en/blizzard2013/capacitron-t2-c50";
    TTSModel[TTSModel["tts_models/en/blizzard2013/capacitron-t2-c150_v2"] = 24] = "tts_models/en/blizzard2013/capacitron-t2-c150_v2";
    TTSModel[TTSModel["tts_models/en/multi-dataset/tortoise-v2"] = 25] = "tts_models/en/multi-dataset/tortoise-v2";
    TTSModel[TTSModel["tts_models/en/jenny/jenny"] = 26] = "tts_models/en/jenny/jenny";
    TTSModel[TTSModel["tts_models/es/mai/tacotron2-DDC"] = 27] = "tts_models/es/mai/tacotron2-DDC";
    TTSModel[TTSModel["tts_models/es/css10/vits"] = 28] = "tts_models/es/css10/vits";
    TTSModel[TTSModel["tts_models/fr/mai/tacotron2-DDC"] = 29] = "tts_models/fr/mai/tacotron2-DDC";
    TTSModel[TTSModel["tts_models/fr/css10/vits"] = 30] = "tts_models/fr/css10/vits";
    TTSModel[TTSModel["tts_models/uk/mai/glow-tts"] = 31] = "tts_models/uk/mai/glow-tts";
    TTSModel[TTSModel["tts_models/uk/mai/vits"] = 32] = "tts_models/uk/mai/vits";
    TTSModel[TTSModel["tts_models/zh-CN/baker/tacotron2-DDC-GST"] = 33] = "tts_models/zh-CN/baker/tacotron2-DDC-GST";
    TTSModel[TTSModel["tts_models/nl/mai/tacotron2-DDC"] = 34] = "tts_models/nl/mai/tacotron2-DDC";
    TTSModel[TTSModel["tts_models/nl/css10/vits"] = 35] = "tts_models/nl/css10/vits";
    TTSModel[TTSModel["tts_models/de/thorsten/tacotron2-DCA"] = 36] = "tts_models/de/thorsten/tacotron2-DCA";
    TTSModel[TTSModel["tts_models/de/thorsten/vits"] = 37] = "tts_models/de/thorsten/vits";
    TTSModel[TTSModel["tts_models/de/thorsten/tacotron2-DDC"] = 38] = "tts_models/de/thorsten/tacotron2-DDC";
    TTSModel[TTSModel["tts_models/de/css10/vits-neon"] = 39] = "tts_models/de/css10/vits-neon";
    TTSModel[TTSModel["tts_models/ja/kokoro/tacotron2-DDC"] = 40] = "tts_models/ja/kokoro/tacotron2-DDC";
    TTSModel[TTSModel["tts_models/tr/common-voice/glow-tts"] = 41] = "tts_models/tr/common-voice/glow-tts";
    TTSModel[TTSModel["tts_models/it/mai_female/glow-tts"] = 42] = "tts_models/it/mai_female/glow-tts";
    TTSModel[TTSModel["tts_models/it/mai_female/vits"] = 43] = "tts_models/it/mai_female/vits";
    TTSModel[TTSModel["tts_models/it/mai_male/glow-tts"] = 44] = "tts_models/it/mai_male/glow-tts";
    TTSModel[TTSModel["tts_models/it/mai_male/vits"] = 45] = "tts_models/it/mai_male/vits";
    TTSModel[TTSModel["tts_models/ewe/openbible/vits"] = 46] = "tts_models/ewe/openbible/vits";
    TTSModel[TTSModel["tts_models/hau/openbible/vits"] = 47] = "tts_models/hau/openbible/vits";
    TTSModel[TTSModel["tts_models/lin/openbible/vits"] = 48] = "tts_models/lin/openbible/vits";
    TTSModel[TTSModel["tts_models/tw_akuapem/openbible/vits"] = 49] = "tts_models/tw_akuapem/openbible/vits";
    TTSModel[TTSModel["tts_models/tw_asante/openbible/vits"] = 50] = "tts_models/tw_asante/openbible/vits";
    TTSModel[TTSModel["tts_models/yor/openbible/vits"] = 51] = "tts_models/yor/openbible/vits";
    TTSModel[TTSModel["tts_models/hu/css10/vits"] = 52] = "tts_models/hu/css10/vits";
    TTSModel[TTSModel["tts_models/el/cv/vits"] = 53] = "tts_models/el/cv/vits";
    TTSModel[TTSModel["tts_models/fi/css10/vits"] = 54] = "tts_models/fi/css10/vits";
    TTSModel[TTSModel["tts_models/hr/cv/vits"] = 55] = "tts_models/hr/cv/vits";
    TTSModel[TTSModel["tts_models/lt/cv/vits"] = 56] = "tts_models/lt/cv/vits";
    TTSModel[TTSModel["tts_models/lv/cv/vits"] = 57] = "tts_models/lv/cv/vits";
    TTSModel[TTSModel["tts_models/mt/cv/vits"] = 58] = "tts_models/mt/cv/vits";
    TTSModel[TTSModel["tts_models/pl/mai_female/vits"] = 59] = "tts_models/pl/mai_female/vits";
    TTSModel[TTSModel["tts_models/pt/cv/vits"] = 60] = "tts_models/pt/cv/vits";
    TTSModel[TTSModel["tts_models/ro/cv/vits"] = 61] = "tts_models/ro/cv/vits";
    TTSModel[TTSModel["tts_models/sk/cv/vits"] = 62] = "tts_models/sk/cv/vits";
    TTSModel[TTSModel["tts_models/sl/cv/vits"] = 63] = "tts_models/sl/cv/vits";
    TTSModel[TTSModel["tts_models/sv/cv/vits"] = 64] = "tts_models/sv/cv/vits";
    TTSModel[TTSModel["tts_models/ca/custom/vits"] = 65] = "tts_models/ca/custom/vits";
    TTSModel[TTSModel["tts_models/fa/custom/glow-tts"] = 66] = "tts_models/fa/custom/glow-tts";
    TTSModel[TTSModel["tts_models/bn/custom/vits-male"] = 67] = "tts_models/bn/custom/vits-male";
    TTSModel[TTSModel["tts_models/bn/custom/vits-female"] = 68] = "tts_models/bn/custom/vits-female";
    TTSModel[TTSModel["tts_models/be/common-voice/glow-tts"] = 69] = "tts_models/be/common-voice/glow-tts";
})(TTSModel || (exports.TTSModel = TTSModel = {}));
var VocoderModel;
(function (VocoderModel) {
    VocoderModel[VocoderModel["vocoder_models/universal/libri-tts/wavegrad"] = 0] = "vocoder_models/universal/libri-tts/wavegrad";
    VocoderModel[VocoderModel["vocoder_models/universal/libri-tts/fullband-melgan"] = 1] = "vocoder_models/universal/libri-tts/fullband-melgan";
    VocoderModel[VocoderModel["vocoder_models/en/ek1/wavegrad"] = 2] = "vocoder_models/en/ek1/wavegrad";
    VocoderModel[VocoderModel["vocoder_models/en/ljspeech/multiband-melgan"] = 3] = "vocoder_models/en/ljspeech/multiband-melgan";
    VocoderModel[VocoderModel["vocoder_models/en/ljspeech/hifigan_v2"] = 4] = "vocoder_models/en/ljspeech/hifigan_v2";
    VocoderModel[VocoderModel["vocoder_models/en/ljspeech/univnet"] = 5] = "vocoder_models/en/ljspeech/univnet";
    VocoderModel[VocoderModel["vocoder_models/en/blizzard2013/hifigan_v2"] = 6] = "vocoder_models/en/blizzard2013/hifigan_v2";
    VocoderModel[VocoderModel["vocoder_models/en/vctk/hifigan_v2"] = 7] = "vocoder_models/en/vctk/hifigan_v2";
    VocoderModel[VocoderModel["vocoder_models/en/sam/hifigan_v2"] = 8] = "vocoder_models/en/sam/hifigan_v2";
    VocoderModel[VocoderModel["vocoder_models/nl/mai/parallel-wavegan"] = 9] = "vocoder_models/nl/mai/parallel-wavegan";
    VocoderModel[VocoderModel["vocoder_models/de/thorsten/wavegrad"] = 10] = "vocoder_models/de/thorsten/wavegrad";
    VocoderModel[VocoderModel["vocoder_models/de/thorsten/fullband-melgan"] = 11] = "vocoder_models/de/thorsten/fullband-melgan";
    VocoderModel[VocoderModel["vocoder_models/de/thorsten/hifigan_v1"] = 12] = "vocoder_models/de/thorsten/hifigan_v1";
    VocoderModel[VocoderModel["vocoder_models/ja/kokoro/hifigan_v1"] = 13] = "vocoder_models/ja/kokoro/hifigan_v1";
    VocoderModel[VocoderModel["vocoder_models/uk/mai/multiband-melgan"] = 14] = "vocoder_models/uk/mai/multiband-melgan";
    VocoderModel[VocoderModel["vocoder_models/tr/common-voice/hifigan"] = 15] = "vocoder_models/tr/common-voice/hifigan";
    VocoderModel[VocoderModel["vocoder_models/be/common-voice/hifigan"] = 16] = "vocoder_models/be/common-voice/hifigan";
})(VocoderModel || (exports.VocoderModel = VocoderModel = {}));
exports.FemaleModels = [
    TTSModel["tts_models/en/jenny/jenny"],
    TTSModel["tts_models/en/ljspeech/fast_pitch"],
    TTSModel["tts_models/en/ljspeech/neural_hmm"],
];
//# sourceMappingURL=models.js.map