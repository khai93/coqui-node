import { TTSModel, VocoderModel } from "./models";
export interface TTSOptions {
    text: string;
    out_path: string;
    model_name?: TTSModel;
    vocoder_name?: VocoderModel;
    speaker_idx?: string;
    use_cuda?: boolean;
}
export declare function tts(options: TTSOptions): Promise<ReadableStream<Uint8Array>>;
