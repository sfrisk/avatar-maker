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
  {
    name: "Headphones",
    url: require("./headphones/airpod/airpod.png"),
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
        name: "Default",
        y: 511,
        x: 249,
        options: [
          {
            color: "white",
            url: require("./headphones/airpod/airpod.png"),
          },
        ],
      },
      {
        name: "Anime",
        y: 105,
        x: 144,
        options: [
          {
            color: "#e60013",
            url: require("./headphones/anime/red.png"),
          },
          {
            color: "#5d3971",
            url: require("./headphones/anime/purple.png"),
          },
          {
            color: "#009944",
            url: require("./headphones/anime/green.png"),
          },
          {
            color: "#b74986",
            url: require("./headphones/anime/pink.png"),
          },
          {
            color: "#1a1a1a",
            url: require("./headphones/anime/black.png"),
          },
        ],
      },
      {
        name: "Original",
        y: 274,
        x: 131,
        options: [
          {
            color: "#333333",
            url: require("./headphones/original/black.png"),
          },
          {
            color: "#1075a3",
            url: require("./headphones/original/blue.png"),
          },
          {
            color: "#073028",
            url: require("./headphones/original/dark-green.png"),
          },
          {
            color: "#7ea76a",
            url: require("./headphones/original/lime-green.png"),
          },
          {
            color: "#f594bf",
            url: require("./headphones/original/pink.png"),
          },
          {
            color: "#664397",
            url: require("./headphones/original/purple.png"),
          },

          {
            color: "#971921",
            url: require("./headphones/original/red.png"),
          },
        ],
      },
    ],
  },
];

export default Dolphin;
