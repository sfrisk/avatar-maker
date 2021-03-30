import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Mic: CustomizableItem = {
  name: "Mic",
  y: 638,
  x: 911,
  options: [
    {
      name: "Black",
      color: "#333132",
      url: require("./black.png"),
    },
    {
      name: "White",
      color: "#ebebed",
      url: require("./white.png"),
    },
    {
      name: "Blue",
      color: "#003567",
      url: require("./blue.png"),
    },
    {
      name: "Adswizz Colors",
      color: "#8b2578",
      url: require("./adswizz.png"),
    },
  ],
};

export default Mic;
