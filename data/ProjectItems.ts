import {
  altacenterMain,
  karavanMain,
  epicenterMain,
  odeskiy_bulvarMain,
  blockbusterMain,
  river_mallMain,
} from "@/helpers/imagesImport";
import { IProjectItems } from "@/helpers/interfaces";

export const ProjectItems: IProjectItems = {
  trade_complexes: [
    { srcImg: altacenterMain, name: "altacenterMain" },
    { srcImg: karavanMain, name: "karavanMain" },
    { srcImg: epicenterMain, name: "epicenterMain" },
    { srcImg: blockbusterMain, name: "blockbusterMain" },
    { srcImg: river_mallMain, name: "river_mallMain" },
  ],
  hskc: [{ srcImg: odeskiy_bulvarMain, name: "odeskiy_bulvarMain" }],
};
