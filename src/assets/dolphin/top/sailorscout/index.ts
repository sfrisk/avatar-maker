import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const SailorScout: CustomizableItem = {
  name: "Sailor Scout",
  y: 624,
  x: 97,
  options: [
    {
      name: "Sailor Moon",
      color: "#b82132",
      url: require("./moon.png"),
    },
    {
      name: "Sailor Mercury",
      color: "#7ac7fa",
      url: require("./mercury.png"),
    },
    {
      name: "Sailor Venus",
      color: "#fe7d00",
      url: require("./venus.png"),
    },
    {
      name: "Sailor Mars",
      color: "#ac1c08",
      url: require("./mars.png"),
    },
    {
      name: "Sailor Jupiter",
      color: "#43a02d",
      url: require("./jupiter.png"),
    },
    {
      name: "Sailor Uranus",
      color: "#225fbb",
      url: require("./uranus.png"),
    },
    {
      name: "Sailor Neptune",
      color: "#0a7769",
      url: require("./neptune.png"),
    },
  ],
};

export default SailorScout;
