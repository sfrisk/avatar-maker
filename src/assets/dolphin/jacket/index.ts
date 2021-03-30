import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Hoodie from "./hoodie";
import Leather from "./leather";
import LeatherSimplecast from "./leather-simplecast";

const Jackets: AvatarItem = {
  name: "Jackets",
  url: require("./hoodie/black.png"),
  items: [Blank, Hoodie, Leather, LeatherSimplecast],
};

export default Jackets;
