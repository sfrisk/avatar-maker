import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const CatHeadphones: CustomizableItem = {
  name: "CatHeadphones",
  y: 206,
  x: 186,
  options: [
    {
      name: "Red",
      color: "#e60013",
      url: require("./red.png"),
    },
    {
      name: "Purple",
      color: "#5d3971",
      url: require("./purple.png"),
    },
    {
      name: "Green",
      color: "#009944",
      url: require("./green.png"),
    },
    {
      name: "Pink",
      color: "#b74986",
      url: require("./pink.png"),
    },
    {
      name: "Black",
      color: "#1a1a1a",
      url: require("./black.png"),
    },
  ],
};

export default CatHeadphones;
