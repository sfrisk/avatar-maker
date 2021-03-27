import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Dolphin: AvatarItem[] = [
  {
    name: "Background",
    url: require("./background/rounded-square/blue.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Rounded Square",
        y: 0,
        x: 0,
        options: [
          {
            color: "rgba(0,0,0,.5)",
            url: require("./background/rounded-square/transparent-black.png"),
          },
          {
            color: "rgba(255,255,255,.5)",
            url: require("./background/rounded-square/transparent-white.png"),
          },
          {
            color: "white",
            url: require("./background/rounded-square/white.png"),
          },
          {
            color: "#969eed",
            url: require("./background/rounded-square/blue.png"),
          },
          {
            color: "#ed96e0",
            url: require("./background/rounded-square/pink.png"),
          },
          {
            color: "#af4d4d",
            url: require("./background/rounded-square/red.png"),
          },
          {
            color: "#f2d76c",
            url: require("./background/rounded-square/yellow.png"),
          },
        ],
      },
      {
        name: "Rounded Square With Dots",
        y: 0,
        x: 0,
        options: [
          {
            color: "rgba(0,0,0,.5)",
            url: require("./background/rounded-square-dots/transparent-black.png"),
          },
          {
            color: "rgba(255,255,255,.5)",
            url: require("./background/rounded-square-dots/transparent-white.png"),
          },
          {
            color: "white",
            url: require("./background/rounded-square-dots/white.png"),
          },
          {
            color: "#969eed",
            url: require("./background/rounded-square-dots/blue.png"),
          },
          {
            color: "#ed96e0",
            url: require("./background/rounded-square-dots/pink.png"),
          },
          {
            color: "#af4d4d",
            url: require("./background/rounded-square-dots/red.png"),
          },
          {
            color: "#f2d76c",
            url: require("./background/rounded-square-dots/yellow.png"),
          },
        ],
      },
      {
        name: "Circle",
        y: 0,
        x: 0,
        options: [
          {
            color: "black",
            url: require("./background/circle/black.png"),
          },
          {
            color: "rgba(0,0,0,.5)",
            url: require("./background/circle/transparent-black.png"),
          },
          {
            color: "rgba(255,255,255,.5)",
            url: require("./background/circle/transparent-white.png"),
          },
          {
            color: "white",
            url: require("./background/circle/white.png"),
          },
        ],
      },
    ],
  },
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
    url: require("./headphones/anime/pink.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Default",
        y: 511,
        x: 249,
        options: [
          {
            color: "#f1f1f3",
            url: require("./headphones/airpod/white.png"),
          },
          {
            color: "#262626",
            url: require("./headphones/airpod/black.png"),
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
  {
    name: "Simplecast",
    url: require("./simplecast/podcasts/black.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Talk About Podcasts",
        y: 635,
        x: 66,
        options: [
          {
            color: "#31302e",
            url: require("./simplecast/podcasts/black.png"),
          },
          {
            color: "#414141",
            url: require("./simplecast/podcasts/dark-grey.png"),
          },
          {
            color: "#676767",
            url: require("./simplecast/podcasts/grey.png"),
          },
          {
            color: "#003567",
            url: require("./simplecast/podcasts/blue.png"),
          },
          {
            color: "#ea68a2",
            url: require("./simplecast/podcasts/pink.png"),
          },
          {
            color: "#8957a1",
            url: require("./simplecast/podcasts/purple.png"),
          },

          {
            color: "#7d0000",
            url: require("./simplecast/podcasts/red.png"),
          },

          {
            color: "#cdc651",
            url: require("./simplecast/podcasts/yellow.png"),
          },
        ],
      },
      {
        name: "Pod Squad",
        y: 635,
        x: 66,
        options: [
          {
            color: "#31302e",
            url: require("./simplecast/podsquad/black.png"),
          },
          {
            color: "#414141",
            url: require("./simplecast/podsquad/dark-grey.png"),
          },
          {
            color: "#676767",
            url: require("./simplecast/podsquad/grey.png"),
          },
          {
            color: "#003567",
            url: require("./simplecast/podsquad/blue.png"),
          },
          {
            color: "#ea68a2",
            url: require("./simplecast/podsquad/pink.png"),
          },
          {
            color: "#8957a1",
            url: require("./simplecast/podsquad/purple.png"),
          },
          {
            color: "#7d0000",
            url: require("./simplecast/podsquad/red.png"),
          },
          {
            color: "#cdc651",
            url: require("./simplecast/podsquad/yellow.png"),
          },
        ],
      },
      {
        name: "Adswizz",
        y: 635,
        x: 66,
        options: [
          {
            color: "#31302e",
            url: require("./simplecast/adswizz/black.png"),
          },
          {
            color: "#414141",
            url: require("./simplecast/adswizz/dark-grey.png"),
          },
          {
            color: "#676767",
            url: require("./simplecast/adswizz/grey.png"),
          },
          {
            color: "#003567",
            url: require("./simplecast/adswizz/blue.png"),
          },
          {
            color: "#ea68a2",
            url: require("./simplecast/adswizz/pink.png"),
          },
          {
            color: "#8957a1",
            url: require("./simplecast/adswizz/purple.png"),
          },
        ],
      },
    ],
  },
];

export default Dolphin;
