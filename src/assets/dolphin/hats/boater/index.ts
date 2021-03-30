import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Boater: CustomizableItem = {
  name: "Boater",
  y: 116,
  x: 178,
  options: [
    {
      name: "Black",
      color: "#2a2729",
      url: require("./black.png"),
    },
    {
      name: "Dark Grey",
      color: "#343138",
      url: require("./dark-grey.png"),
    },
    {
      name: "White",
      color: "#e7eaf2",
      url: require("./white.png"),
    },
    {
      name: "White Tie-Dye",
      color: "#aaa8bb",
      url: require("./white-2.png"),
    },
    {
      name: "Teal",
      color: "#295569",
      url: require("./teal.png"),
    },
  ],
};

export default Boater;
