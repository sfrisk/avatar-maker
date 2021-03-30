import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const AnimeLashes: CustomizableItem = {
  name: "Anime with Lashes",
  x: 328,
  y: 475,
  options: [
    {
      name: "Black",
      color: "#31302e",
      url: require("./black.png"),
    },
    {
      name: "Blue",
      color: "#295569",
      url: require("./blue.png"),
    },
    {
      name: "Brown",
      color: "#5a4219",
      url: require("./brown.png"),
    },
    {
      name: "Green",
      color: "#2f673b",
      url: require("./green.png"),
    },
    {
      name: "Purple",
      color: "#55214f",
      url: require("./purple.png"),
    },
    {
      name: "Red",
      color: "#7d0000",
      url: require("./red.png"),
    },
  ],
};

export default AnimeLashes;
