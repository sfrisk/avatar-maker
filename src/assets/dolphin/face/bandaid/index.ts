import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Bandaid: CustomizableItem = {
  name: "Bandaid",
  y: 308,
  x: 778,
  options: [
    {
      name: "Green",
      color: "#569874",
      url: require("./green.png"),
    },
    {
      name: "Pink",
      color: "#ea68a2",
      url: require("./pink.png"),
    },
    {
      name: "Purple",
      color: "#9790b1",
      url: require("./purple.png"),
    },
    {
      name: "Peach",
      color: "#fad6ad",
      url: require("./peach.png"),
    },
  ],
};

export default Bandaid;
