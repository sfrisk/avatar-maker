import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Adswizz from "./adswizz";
import Podcasts from "./podcasts";
import PodSquad from "./podsquad";
import SailorScout from "./sailorscout";
import Simplecast from "./simplecast";
import Tshirt from "./tshirt";

const Tops: AvatarItem = {
  name: "Tops",
  url: require("./tshirt/black.png"),
  items: [Blank, Adswizz, Podcasts, PodSquad, Simplecast, Tshirt, SailorScout],
};

export default Tops;
