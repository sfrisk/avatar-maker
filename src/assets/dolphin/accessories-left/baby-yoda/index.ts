import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const BabyYoda: CustomizableItem = {
  name: "Baby Yoda",
  y: 806,
  x: 0,
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

export default BabyYoda;
