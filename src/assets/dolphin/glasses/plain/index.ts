import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Plain: CustomizableItem = {
  name: "Plain",
  x: 182,
  y: 240,
  options: [
    {
      name: "Black",
      color: "#31302e",
      url: require("./black.png"),
    },
    {
      name: "All Black",
      color: "#31302e",
      url: require("./black-2.png"),
    },
    {
      name: "White",
      color: "#edf3f7",
      url: require("./white.png"),
    },
    {
      name: "Red",
      color: "#4e0c0c",
      url: require("./red.png"),
    },
    {
      name: "Purple",
      color: "#593849",
      url: require("./purple.png"),
    },
    {
      name: "Blue",
      color: "#213a53",
      url: require("./blue.png"),
    },
    {
      name: "Green",
      color: "#263d2f",
      url: require("./green.png"),
    },
  ],
};

export default Plain;
