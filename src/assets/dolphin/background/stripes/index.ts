import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Stripes: CustomizableItem = {
  name: "Stripes",
  y: 0,
  x: 0,
  options: [
    {
      color: "rgba(0,0,0,.5)",
      name: "Transparent Black",
      url: require("./transparent-black.png"),
    },
    {
      color: "rgba(255,255,255,.5)",
      name: "Transparent White",
      url: require("./transparent-white.png"),
    },
    {
      color: "white",
      name: "White",
      url: require("./white.png"),
    },
  ],
};

export default Stripes;
