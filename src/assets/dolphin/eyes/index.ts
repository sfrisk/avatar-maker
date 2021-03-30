import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Anime from "./anime";
import AnimeLashes from "./anime-lashes";
import Plain from "./plain";

const Eyes: AvatarItem = {
  name: "Eyes",
  url: require("./anime/black.png"),
  items: [Anime, AnimeLashes, Plain],
};

export default Eyes;
