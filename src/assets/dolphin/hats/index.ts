import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Beanie from "./beanie";
import Bike from "./bike";
import Boater from "./boater";
import Flat from "./flat";
import Motorcycle from "./motorcycle";
import Sweatband from "./sweatband";
import Tiara from "./tiara";

const HatsLower: AvatarItem = {
  name: "Hats Lower",
  url: require("./tiara/moon.png"),
  items: [Blank, Sweatband, Tiara],
};

const HatsUpper: AvatarItem = {
  name: "Hats Upper",
  url: require("./flat/black.png"),
  items: [Blank, Beanie, Bike, Boater, Flat, Motorcycle],
};

export { HatsLower, HatsUpper };
