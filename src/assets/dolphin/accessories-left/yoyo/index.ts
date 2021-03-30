import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const YoYo: CustomizableItem = {
  name: "Yo-Yo",
  y: 640,
  x: 32,
  options: [
    {
      name: "Blue",
      color: "#003d5a",
      url: require("./blue.png"),
    },
    {
      name: "Red",
      color: "#971921",
      url: require("./red.png"),
    },
  ],
};

export default YoYo;
