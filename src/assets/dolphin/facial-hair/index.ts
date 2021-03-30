import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Imperial from "./imperial";
import Neckbeard from "./neckbeard";
import Shadow from "./shadow";
import Soulpatch from "./soulpatch";

const FacialHair: AvatarItem = {
  name: "Facial Hair",
  url: require("./imperial/black.png"),
  items: [Blank, Imperial, Neckbeard, Shadow, Soulpatch],
};
export default FacialHair;
