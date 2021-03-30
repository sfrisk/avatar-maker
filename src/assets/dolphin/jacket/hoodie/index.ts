import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Hoodie: CustomizableItem = {
  name: "Hoodie",
  y: 618,
  x: 48,
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
      name: "White",
      color: "#ebebed",
      url: require("./white.png"),
    },
    {
      name: "White Tie-Dye",
      color: "#bdced8",
      url: require("./white-2.png"),
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
      name: "Yellow",
      color: "#fff100",
      url: require("./yellow.png"),
    },
  ],
};

export default Hoodie;
