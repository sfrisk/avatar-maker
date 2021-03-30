import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Original: CustomizableItem = {
  name: "Original",
  y: 355,
  x: 171,
  options: [
    {
      name: "Black",
      color: "#333333",
      url: require("./black.png"),
    },
    {
      name: "Blue",
      color: "#1075a3",
      url: require("./blue.png"),
    },
    {
      name: "Dark Green",
      color: "#073028",
      url: require("./dark-green.png"),
    },
    {
      name: "Lime Green",
      color: "#7ea76a",
      url: require("./lime-green.png"),
    },
    {
      name: "Pink",
      color: "#f594bf",
      url: require("./pink.png"),
    },
    {
      name: "Purple",
      color: "#664397",
      url: require("./purple.png"),
    },

    {
      name: "Red",
      color: "#971921",
      url: require("./red.png"),
    },
  ],
};

export default Original;
