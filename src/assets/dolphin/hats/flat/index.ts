import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Flat: CustomizableItem = {
  name: "Flat",
  y: 176,
  x: 219,
  options: [
    {
      name: "Black",
      color: "#2f2f2f",
      url: require("./black.png"),
    },
    {
      name: "Black Tie-Dye",
      color: "#34343a",
      url: require("./black-2.png"),
    },
    {
      name: "Dark Grey",
      color: "#414141",
      url: require("./dark-grey.png"),
    },
    {
      name: "Grey",
      color: "#676767",
      url: require("./grey.png"),
    },
    {
      name: "White",
      color: "#ebebed",
      url: require("./white.png"),
    },
    {
      name: "White Tie Dye",
      color: "#bbb9c9",
      url: require("./white-2.png"),
    },
    {
      name: "Brown",
      color: "#643f14",
      url: require("./brown.png"),
    },
    {
      name: "Blue",
      color: "#003567",
      url: require("./blue.png"),
    },
    {
      name: "Pink",
      color: "#ea68a2",
      url: require("./pink.png"),
    },
    {
      name: "Teal",
      color: "#005982",
      url: require("./teal.png"),
    },
  ],
};

export default Flat;
