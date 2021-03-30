import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const RoundedSquareDots: CustomizableItem = {
  name: "Rounded Square With Dots",
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
      color: "#969eed",
      name: "Blue",
      url: require("./blue.png"),
    },
    {
      color: "#ed96e0",
      name: "Pink",
      url: require("./pink.png"),
    },
    {
      color: "#af4d4d",
      name: "Red",
      url: require("./red.png"),
    },
    {
      color: "#f2d76c",
      name: "Yellow",
      url: require("./yellow.png"),
    },
  ],
};

export default RoundedSquareDots;
