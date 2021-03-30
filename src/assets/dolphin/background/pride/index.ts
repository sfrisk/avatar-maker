import { CustomizableItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Pride: CustomizableItem = {
  name: "Pride",
  y: 0,
  x: 0,
  options: [
    {
      name: "LGBTQ+",
      color:
        "linear-gradient(180deg, #FE0001 16.66%, #FD8C00 16.66%, 33.32%, #FFE500 33.32%, 49.98%, #119F0B 49.98%, 66.64%, #0644B3 66.64%, 83.3%, #C22EDC 83.3%)",
      url: require("./pride.png"),
    },
    {
      name: "New LGBTQ+",
      color:
        "linear-gradient(180deg, #FE0000 16.66%, #FD8C00 16.66%, 33.32%, #FFE500 33.32%, 49.98%, #119F0B 49.98%, 66.64%, #0644B3 66.64%, 83.3%, #C22EDC 83.3%)",
      url: require("./modern-pride.png"),
    },
    {
      name: "Ace",
      color:
        "linear-gradient(180deg, #181818 25%, #A3A3A3 25%, 50%, #FFFFFF 50%, 75%, #800080 75%)",
      url: require("./ace.png"),
    },
    {
      name: "Agender",
      color:
        "linear-gradient(180deg, #181818 14.285%, #C3C3C3 14.285%, 28.57%, #FFFFFF 28.57%, 42.855%, #B8F483 42.855%, 57.14%, #FFFFFF 57.14%, 71.425%, #C3C3C3 71.425%, 85.71%, #181818 85.71%)",
      url: require("./agender.png"),
    },
    {
      name: "Bisexual",
      color:
        "linear-gradient(180deg, #D60270 40%, #9B4F96 40%, 60%, #0038A8 60%)",
      url: require("./bisexual.png"),
    },
    {
      name: "Genderfluid",
      color:
        "linear-gradient(180deg, #FF77A3 20%, #FFFFFF 20%, 40%, #BE18D6 40%, 60%, #181818 60%, 80%, #333EBD 80%)",
      url: require("./fluid.png"),
    },
    {
      name: "Genderqueer",
      color:
        "linear-gradient(180deg, #B57EDC 33.33%, #FFFFFF 33.33%, 66.66%, #4A8123 66.66%)",
      url: require("./gender-queer.png"),
    },
    {
      name: "Intersex",
      color: "#ffd800",
      url: require("./intersex.png"),
    },
    {
      name: "Lesbian",
      color:
        "linear-gradient(180deg, #8C1D00 14.285%, #C74D52 14.285%, 28.57%, #E5ABD0 28.57%, 42.855%, #EDEDEB 42.855%, 57.14%, #D260A7 57.14%, 71.425%, #B95393 71.425%, 85.71%, #A60061 85.71%)",
      url: require("./lesbian.png"),
    },
    {
      name: "Nonbinary",
      color:
        "linear-gradient(180deg, #FFF430 25%, #FFFFFF 25%, 50%, #9C59D1 50%, 75%, #181818 75%)",
      url: require("./nb.png"),
    },
    {
      name: "Pansexual",
      color:
        "linear-gradient(180deg, #FF218C 33.33%, #FFD800 33.33%, 66.66%, #21B1FF 66.66%)",
      url: require("./pan.png"),
    },
    {
      name: "Trans",
      color:
        "linear-gradient(180deg, #5BCEFA 20%, #F5A9B8 20%, 40%, #FFFFFF 40%, 60%, #F5A9B8 60%, 80%, #5BCEFA 80%)",
      url: require("./trans.png"),
    },
  ],
};

export default Pride;
