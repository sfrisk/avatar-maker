import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Plain from "./plain";
import Monocle from "./monocle";

const Glasses: AvatarItem = {
  name: "Glasses",
  url: require("./monocle/black.png"),
  items: [Blank, Monocle, Plain],
};

export default Glasses;
