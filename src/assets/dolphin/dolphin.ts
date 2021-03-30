import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import AccessoriesLeft from "./accessories-left";
import AccessoriesRight from "./accessories-right";
import Background from "./background";
import Base from "./base";
import Eyes from "./eyes";
import { Face1, Face2 } from "./face";
import FacialHair from "./facial-hair";
import { HatsLower, HatsUpper } from "./hats";
import Jackets from "./jacket";
import Tops from "./top";

const Dolphin: AvatarItem[] = [
  Background,
  Base,
  Eyes,
  FacialHair,
  Face1,
  Face2,
  HatsLower,
  Tops,
  Jackets,
  HatsUpper,
  AccessoriesLeft,
  AccessoriesRight,
];

export default Dolphin;
