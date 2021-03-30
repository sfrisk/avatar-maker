import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Computer from "./computer";
import Mic from "./mic";

const AccessoriesRight: AvatarItem = {
  name: "Accessory Right",
  url: require("./mic/black.png"),
  items: [Blank, Computer, Mic],
};

export default AccessoriesRight;
