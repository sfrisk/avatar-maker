import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Blush: CustomizableItem = {
  name: "Blush-1",
  y: 565,
  x: 435,
  options: [
    {
      name: "Purple",
      color: "#783370",
      url: require("./purple.png"),
    },
    {
      name: "Blue",
      color: "#719bbd",
      url: require("./blue.png"),
    },
    {
      name: "Pink",
      color: "#ea68a2",
      url: require("./pink.png"),
    },
  ],
};

export default Blush;
