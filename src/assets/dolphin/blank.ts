import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Blank: CustomizableItem = {
  name: "None",
  y: 0,
  x: 0,
  options: [
    {
      name: "None",
      color: "rgba(0,0,0,0)",
      url: require("./blank.png"),
    },
  ],
};

export default Blank;
