import { tts } from "../src/cli/wrapper";
import { TTSModel } from "../src/cli/models";

import { VctkSpeakerBuilder } from "../src/vctk/builder";
import { getSpeakerList } from "../src/vctk/list";

const out_dir = __dirname + "/outputs/test.wav";

async function main() {
    const speakerList = getSpeakerList();

    const output = await tts({text: "Well not really?", out_path: out_dir, model_name: TTSModel["tts_models/en/vctk/vits"], speaker_idx: speakerList[0]});
    console.log(output);
}

main()