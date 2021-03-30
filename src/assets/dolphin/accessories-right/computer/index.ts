import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Computer: CustomizableItem = {
  name: "Computer",
  y: 830,
  x: 696,
  options: [
    {
      name: "Black",
      color: "#2f2f2e",
      url: require("./black.png"),
    },
    {
      name: "Black with Stickers",
      color: "#2f2f2f",
      url: require("./black-stickers.png"),
    },
    {
      name: "White",
      color: "#c3c2c2",
      url: require("./white.png"),
    },
    {
      name: "White with Stickers",
      color: "#c3c2c1",
      url: require("./white-stickers.png"),
    },
  ],
};

export default Computer;
