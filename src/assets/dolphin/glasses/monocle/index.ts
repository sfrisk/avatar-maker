import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Monocle: CustomizableItem = {
  name: "Monocle",
  x: 148,
  y: 415,
  options: [
    {
      name: "Black",
      color: "#31302e",
      url: require("./black.png"),
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

export default Monocle;
