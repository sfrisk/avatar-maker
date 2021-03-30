import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Bubble: CustomizableItem = {
  name: "Bubbles",
  y: 0,
  x: 0,
  options: [
    {
      color: "rgba(0,0,0,.5)",
      name: "Transparent Black",
      url: require("./transparent-black.png"),
    },
    {
      color: "rgba(255,255,255,.5)",
      name: "Transparent White",
      url: require("./transparent-white.png"),
    },
    {
      color: "white",
      name: "White",
      url: require("./white.png"),
    },
    {
      color: "rgba(180,249,255,.5)",
      name: "Transparent Blue",
      url: require("./transparent-blue.png"),
    },
    {
      color: "rgba(31,54,56,.5)",
      name: "Transparent Dark Blue",
      url: require("./transparent-dark-blue.png"),
    },
  ],
};

export default Bubble;
