import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Airpods from "./airpods";
import CatHeadphones from "./cat-headphones";
import Original from "./original";

const Headphones: AvatarItem = {
  name: "Headphones",
  url: require("./airpods/white.png"),
  items: [Blank, Airpods, CatHeadphones, Original],
};

export default Headphones;
