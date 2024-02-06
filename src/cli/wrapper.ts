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
}

export async function tts(options: TTSOptions) {
    const params = [
        `--text "${options.text}"`,
        `--out_path "${options.out_path}"`,
        options.model_name ? `--model_name "${Object.keys(TTSModel)[Object.values(TTSModel).indexOf(options.model_name)]}"` : undefined,
        options.speaker_idx ? `--speaker_idx ${options.speaker_idx}` : undefined,
        options.vocoder_name ? `--vocoder_name "${options.vocoder_name}"` : undefined,
       
    ];

    console.debug(params);

    const { stdout, stderr } = await exec(`tts ${params.join(" ")}`);
    console.log(stderr)
    if (stderr) {
        throw Promise.reject(stderr);
    }

    return stdout;
}