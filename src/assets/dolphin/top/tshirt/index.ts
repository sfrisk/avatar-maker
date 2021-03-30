import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Tshirt: CustomizableItem = {
  name: "T-Shirt",
  y: 687,
  x: 116,
  options: [
    {
      name: "Black",
      color: "#31302e",
      url: require("./black.png"),
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
      color: "#fff",
      url: require("./white.png"),
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
      name: "Purple",
      color: "#8957a1",
      url: require("./purple.png"),
    },

    {
      name: "Red",
      color: "#7d0000",
      url: require("./red.png"),
    },

    {
      name: "Yellow",
      color: "#cdc651",
      url: require("./yellow.png"),
    },
    {
      name: "Black Tie-Dye",
      color: "#393134",
      url: require("./black-2.png"),
    },
  ],
};

export default Tshirt;
