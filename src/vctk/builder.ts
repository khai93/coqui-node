import vctkInfo from "../../assets/vctk_info.json";
import { TTSModel } from "../cli/models";


class VctkSpeaker {
    id: string;
    age: number;
    gender: "M" | "F" = "M";
    accents: "English" | "Scottish" | "NorthernIrish" | "Indian" | "Welsh" | "Irish" | "SouthAfrican" | "American" | "Canadian" | "NewZealand English" | "Australian English" | "Unknown";
    region: "Toronto" | "Donegal" | "M/A" | "N/A" | "New Jersey" | "Derry" | "Florida" | "Johannesburg" | "Ohio" | "Pennsylvania" | "Dublin" | "Alberta" | "Chicago" | "Indiana" | "New York" | "Tennessee" | "Alabama" | "Ontario" | "Philadelphia" | "Hamilton" | "Iowa" | "San Francisco" | "Cape Town" | "Napa" | "Belfast" | "Pretoria" | "New England (Text and mic2 files unavailable)" | "Montreal" | "Cork" | "Athlone" | "Edinburgh" | "Galloway" | "Surrey" | "Perth" | "Birmingham" | "Oxford" | "Leicester" | "Cheshire" | "Suffolk" | "Midlothian" | "Essex" | "Belfast" | "Edinburgh" | "Orkney" | "Nottingham" | "SE England" | "Cardiff" | "Edinburgh" | "Aberdeen" | "West Lothian" | "Ross" | "West Dumfries" | "Fife" | "Argyll" | "Dublin" | "Tipperary" | "California" | "North Carolina" | "New York" | "San Francisco" | "New Jersey";
}

// Builder for a Speaker Idx for models trained using VCTK dataset eg. VITS
export class VctkSpeakerBuilder {
    private speaker: VctkSpeaker;
    private ttsModel: TTSModel;

    constructor() {
        this.speaker = new VctkSpeaker();
    }

    setGender(gender: "M" | "F") {
        this.speaker.gender = gender;
        return this;
    }

    setAge(age: number) {
        this.speaker.age = age;
        return this;
    }

    setModel(model: TTSModel) {
        this.ttsModel = model;
        return this;
    }

    setAccent(accent: "English" | "Scottish" | "NorthernIrish" | "Indian" | "Welsh" | "Irish" | "SouthAfrican" | "American" | "Canadian" | "NewZealand English" | "Australian English" | "Unknown") {
        this.speaker.accents = accent;
        return this;
    }

    setRegion(region: "Toronto" | "Donegal" | "M/A" | "N/A" | "New Jersey" | "Derry" | "Florida" | "Johannesburg" | "Ohio" | "Pennsylvania" | "Dublin" | "Alberta" | "Chicago" | "Indiana" | "New York" | "Tennessee" | "Alabama" | "Ontario" | "Philadelphia" | "Hamilton" | "Iowa" | "San Francisco" | "Cape Town" | "Napa" | "Belfast" | "Pretoria" | "New England (Text and mic2 files unavailable)" | "Montreal" | "Cork" | "Athlone" | "Edinburgh" | "Galloway" | "Surrey" | "Perth" | "Birmingham" | "Oxford" | "Leicester" | "Cheshire" | "Suffolk" | "Midlothian" | "Essex" | "Belfast" | "Edinburgh" | "Orkney" | "Nottingham" | "SE England" | "Cardiff" | "Edinburgh" | "Aberdeen" | "West Lothian" | "Ross" | "West Dumfries" | "Fife" | "Argyll" | "Dublin" | "Tipperary" | "California" | "North Carolina" | "New York" | "San Francisco" | "New Jersey") {
        this.speaker.region = region;
        return this;
    }

    // returns the speaker index
    build(): string {
        let speaker;

        for (const p of vctkInfo.data) {
            if (p.GENDER !== this.speaker.gender) continue;
            if (p.AGE !== this.speaker.age && this.speaker.age !== undefined) continue;
            if (p.ACCENTS !== this.speaker.accents && this.speaker.accents !== undefined) continue;
            if (p.REGION !== this.speaker.region && this.speaker.region !== undefined) continue;
            speaker = p;
        }

        console.log(speaker.GENDER)

        if (speaker === undefined) throw new Error(`Speaker Could not be found with the input from builder. \nDATA: ${JSON.stringify(this.speaker)}`);

        if (this.ttsModel === TTSModel["tts_models/en/vctk/fast_pitch"]) return "VCTK_" + speaker.ID

        return speaker.ID;
    }
}