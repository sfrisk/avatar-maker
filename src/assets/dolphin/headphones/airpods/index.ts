import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Airpods: CustomizableItem = {
  name: "Airpods",
  y: 586,
  x: 261,
  options: [
    {
      name: "White",
      color: "#f1f1f3",
      url: require("./white.png"),
    },
    {
      name: "Black",
      color: "#262626",
      url: require("./black.png"),
    },
  ],
};

export default Airpods;
