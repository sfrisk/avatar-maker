import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Leather: CustomizableItem = {
  name: "Leather Jacket",
  y: 681,
  x: 106,
  options: [
    {
      name: "Black",
      color: "#141417",
      url: require("./black.png"),
    },
    {
      name: "Grey",
      color: "#262626",
      url: require("./grey.png"),
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
    {
      name: "Purple",
      color: "#593849",
      url: require("./purple.png"),
    },
    {
      name: "Red",
      color: "#4e0c0c",
      url: require("./red.png"),
    },
    {
      name: "All Red",
      color: "#4e0c0d",
      url: require("./red-2.png"),
    },
    {
      name: "Red/Black",
      color: "#4e0c0b",
      url: require("./red-3.png"),
    },
    {
      name: "Yellow",
      color: "#fff100",
      url: require("./yellow.png"),
    },
  ],
};

export default Leather;
