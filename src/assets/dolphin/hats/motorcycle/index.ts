import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Motorcycle: CustomizableItem = {
  name: "Motorcycle Helmet",
  x: 90,
  y: 127,
  options: [
    {
      name: "Black",
      color: "#141417",
      url: require("./black.png"),
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

export default Motorcycle;
