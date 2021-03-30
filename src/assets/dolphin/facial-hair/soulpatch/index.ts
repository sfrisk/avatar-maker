import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Soulpatch: CustomizableItem = {
  name: "Soulpatch",
  y: 399,
  x: 988,
  options: [
    {
      name: "Grey",
      color: "#a6a6a6",
      url: require("./grey.png"),
    },
    {
      name: "Blond",
      color: "#c3974d",
      url: require("./blond.png"),
    },
    {
      name: "Black",
      color: "#333030",
      url: require("./black.png"),
    },
    {
      name: "Brown",
      color: "#5b3600",
      url: require("./brown.png"),
    },
    {
      name: "Blue",
      color: "#5e87a6",
      url: require("./blue.png"),
    },
    {
      name: "Red",
      color: "#550000",
      url: require("./red.png"),
    },
  ],
};

export default Soulpatch;
