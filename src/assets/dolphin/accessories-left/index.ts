import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import BabyYoda from "./baby-yoda";
import DietCoke from "./diet-coke";
import Pets from "./pets";
import YoYo from "./yoyo";

const AccessoriesLeft: AvatarItem = {
  name: "Accessory Left",
  url: require("./baby-yoda/black.png"),
  items: [Blank, BabyYoda, DietCoke, Pets, YoYo],
};

export default AccessoriesLeft;
