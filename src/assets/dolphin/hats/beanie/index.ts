import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Beanie: CustomizableItem = {
  name: "Beanie",
  x: 155,
  y: 160,
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
      color: "#edf3f7",
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
  ],
};

export default Beanie;
