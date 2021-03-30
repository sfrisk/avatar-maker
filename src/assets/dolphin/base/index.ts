import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Base: AvatarItem = {
  name: "Base",
  url: require("./a.png"),
  items: [
    {
      name: "Default",
      y: 236,
      x: 134,
      options: [
        {
          name: "Dolphin",
          color: "rgba(0,0,0,0)",
          url: require("./a.png"),
        },
      ],
    },
  ],
};

export default Base;
