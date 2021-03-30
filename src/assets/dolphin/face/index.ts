import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Bandaid from "./bandaid";
import Blush from "./blush";
import Blush2 from "./blush-2";

const Face1: AvatarItem = {
  name: "Face 1",
  url: require("./blush/purple.png"),
  items: [Blank, Bandaid, Blush, Blush2],
};

const Face2: AvatarItem = {
  name: "Face 2",
  url: require("./blush-2/pink.png"),
  items: [Blank, Bandaid, Blush, Blush2],
};

export { Face1, Face2 };
