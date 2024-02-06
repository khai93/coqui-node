import vctkInfo from "../../assets/vctk_info.json";

export const getSpeakerList = () => vctkInfo.data.flatMap(s => s.ID)