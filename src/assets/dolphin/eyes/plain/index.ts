import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Plain: CustomizableItem = {
  name: "Plain",
  x: 367,
  y: 482,
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
      color: "#3e2f27",
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

export default Plain;
