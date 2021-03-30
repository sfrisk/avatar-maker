import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Beanie from "./beanie";
import Bike from "./bike";
import Boater from "./boater";
import Flat from "./flat";
import Motorcycle from "./motorcycle";
import Sweatband from "./sweatband";
import Tiara from "./tiara";

const Hats: AvatarItem = {
  name: "Hats",
  url: require("./beanie/black.png"),
  items: [Blank, Beanie, Bike, Boater, Flat, Motorcycle, Sweatband, Tiara],
};

export default Hats;
