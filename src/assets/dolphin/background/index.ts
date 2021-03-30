import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";
import Blank from "../blank";
import Bubble from "./bubble";
import Circle from "./circle";
import Pride from "./pride";
import RoundedSquare from "./rounded-square";
import RoundedSquareDots from "./rounded-square-dots";
import Stripes from "./stripes";

const Background: AvatarItem = {
  name: "Background Patterns",
  url: require("./bubble/transparent-black.png"),
  items: [
    Blank,
    Bubble,
    Circle,
    Pride,
    RoundedSquare,
    RoundedSquareDots,
    Stripes,
  ],
};

export default Background;
