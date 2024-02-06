import { TTSModel } from "../cli/models";
export declare class VctkSpeakerBuilder {
    private speaker;
    private ttsModel;
    constructor();
    setGender(gender: "M" | "F"): this;
    setAge(age: number): this;
    setModel(model: TTSModel): this;
    setAccent(accent: "English" | "Scottish" | "NorthernIrish" | "Indian" | "Welsh" | "Irish" | "SouthAfrican" | "American" | "Canadian" | "NewZealand English" | "Australian English" | "Unknown"): this;
    setRegion(region: "Toronto" | "Donegal" | "M/A" | "N/A" | "New Jersey" | "Derry" | "Florida" | "Johannesburg" | "Ohio" | "Pennsylvania" | "Dublin" | "Alberta" | "Chicago" | "Indiana" | "New York" | "Tennessee" | "Alabama" | "Ontario" | "Philadelphia" | "Hamilton" | "Iowa" | "San Francisco" | "Cape Town" | "Napa" | "Belfast" | "Pretoria" | "New England (Text and mic2 files unavailable)" | "Montreal" | "Cork" | "Athlone" | "Edinburgh" | "Galloway" | "Surrey" | "Perth" | "Birmingham" | "Oxford" | "Leicester" | "Cheshire" | "Suffolk" | "Midlothian" | "Essex" | "Belfast" | "Edinburgh" | "Orkney" | "Nottingham" | "SE England" | "Cardiff" | "Edinburgh" | "Aberdeen" | "West Lothian" | "Ross" | "West Dumfries" | "Fife" | "Argyll" | "Dublin" | "Tipperary" | "California" | "North Carolina" | "New York" | "San Francisco" | "New Jersey"): this;
    build(): string;
}
