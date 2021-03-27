import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Dolphin: AvatarItem[] = [
  {
    name: "Base",
    url: require("./base/a.png"),
    items: [
      {
        name: "Default",
        y: 140,
        x: 86,
        options: [
          {
            color: "rgba(0,0,0,0)",
            url: require("./base/a.png"),
          },
        ],
      },
    ],
  },
  {
    name: "Eyes",
    url: require("./eyes/A/black.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            color: "rgba(0,0,0,0)",
            url: require("./blank.png")
          }
        ]
      },
      {
        name: "A",
        x: 343,
        y: 410,
        options: [
          {
            color: "#31302e",
            url: require("./eyes/A/black.png"),
          },
          {
            color: "#295569",
            url: require("./eyes/A/blue.png"),
          },
          {
            color: "#3e2f27",
            url: require("./eyes/A/brown.png"),
          },
          {
            color: "#2f673b",
            url: require("./eyes/A/green.png"),
          },
          {
            color: "#55214f",
            url: require("./eyes/A/purple.png"),
          },
          {
            color: "#7d0000",
            url: require("./eyes/A/red.png"),
          },
        ],
      },
      {
        name: "B",
        x: 325,
        y: 402,
        options: [
          {
            color: "#31302e",
            url: require("./eyes/B/black.png"),
          },
          {
            color: "#295569",
            url: require("./eyes/B/blue.png"),
          },
          {
            color: "#3e2f27",
            url: require("./eyes/B/brown.png"),
          },
          {
            color: "#2f673b",
            url: require("./eyes/B/green.png"),
          },
          {
            color: "#55214f",
            url: require("./eyes/B/purple.png"),
          },
          {
            color: "#7d0000",
            url: require("./eyes/B/red.png"),
          },
        ],
      },
    ],
  },
];

export default Dolphin;
