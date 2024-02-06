import { exec as execS } from "child_process";
import { promisify } from "util";
import { TTSModel, VocoderModel } from "./models";
const exec = promisify(execS);

export interface TTSOptions {
    text: string;
    out_path: string;
    model_name?: TTSModel;
    vocoder_name?: VocoderModel;
    speaker_idx?: string;
    use_cuda?: boolean;
}

export async function tts(options: TTSOptions) {
    const formatted = options.text
            .replaceAll(/"|'/g, "") // remove quotes
            .replaceAll(/\r?\n|\r/g, " ") // remove new lines
    
    const urlParams = new URLSearchParams();
    urlParams.append('text', formatted);
    urlParams.append('speaker_id', options.speaker_idx);

    return (await fetch('http://localhost:5002/api/tts?' + urlParams.toString())).body
}