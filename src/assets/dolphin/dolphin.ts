import { AvatarItem } from "@/components/AvatarMaker/AvatarMaker.types";

const Dolphin: AvatarItem[] = [
  {
    name: "Background Patterns",
    url: require("./background/rounded-square/blue.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            color: "rgba(0,0,0,0)",
            name: "No Background Pattern",
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
            name: "Transparent Black",
            url: require("./background/rounded-square/transparent-black.png"),
          },
          {
            color: "rgba(255,255,255,.5)",
            name: "Transparent White",
            url: require("./background/rounded-square/transparent-white.png"),
          },
          {
            color: "white",
            name: "White",
            url: require("./background/rounded-square/white.png"),
          },
          {
            color: "#969eed",
            name: "Blue",
            url: require("./background/rounded-square/blue.png"),
          },
          {
            color: "#ed96e0",
            name: "Pink",
            url: require("./background/rounded-square/pink.png"),
          },
          {
            color: "#af4d4d",
            name: "Red",
            url: require("./background/rounded-square/red.png"),
          },
          {
            color: "#f2d76c",
            name: "Yellow",
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
            name: "Transparent Black",
            url: require("./background/rounded-square-dots/transparent-black.png"),
          },
          {
            color: "rgba(255,255,255,.5)",
            name: "Transparent White",
            url: require("./background/rounded-square-dots/transparent-white.png"),
          },
          {
            color: "white",
            name: "White",
            url: require("./background/rounded-square-dots/white.png"),
          },
          {
            color: "#969eed",
            name: "Blue",
            url: require("./background/rounded-square-dots/blue.png"),
          },
          {
            color: "#ed96e0",
            name: "Pink",
            url: require("./background/rounded-square-dots/pink.png"),
          },
          {
            color: "#af4d4d",
            name: "Red",
            url: require("./background/rounded-square-dots/red.png"),
          },
          {
            color: "#f2d76c",
            name: "Yellow",
            url: require("./background/rounded-square-dots/yellow.png"),
          },
        ],
      },
      {
        name: "Stripes",
        y: 0,
        x: 0,
        options: [
          {
            color: "rgba(0,0,0,.5)",
            name: "Transparent Black",
            url: require("./background/stripes/transparent-black.png"),
          },
          {
            color: "rgba(255,255,255,.5)",
            name: "Transparent White",
            url: require("./background/stripes/transparent-white.png"),
          },
          {
            color: "white",
            name: "White",
            url: require("./background/stripes/white.png"),
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
            name: "Black",
            url: require("./background/circle/black.png"),
          },
          {
            color: "rgba(0,0,0,.5)",
            name: "Transparent Black",
            url: require("./background/circle/transparent-black.png"),
          },
          {
            color: "rgba(255,255,255,.5)",
            name: "Transparent White",
            url: require("./background/circle/transparent-white.png"),
          },
          {
            color: "white",
            name: "White",
            url: require("./background/circle/white.png"),
          },
        ],
      },
      {
        name: "Bubbles",
        y: 0,
        x: 0,
        options: [
          {
            color: "rgba(0,0,0,.5)",
            name: "Transparent Black",
            url: require("./background/bubble/transparent-black.png"),
          },
          {
            color: "rgba(255,255,255,.5)",
            name: "Transparent White",
            url: require("./background/bubble/transparent-white.png"),
          },
          {
            color: "white",
            name: "White",
            url: require("./background/bubble/white.png"),
          },
          {
            color: "rgba(180,249,255,.5)",
            name: "Transparent Blue",
            url: require("./background/bubble/transparent-blue.png"),
          },
          {
            color: "rgba(31,54,56,.5)",
            name: "Transparent Dark Blue",
            url: require("./background/bubble/transparent-dark-blue.png"),
          },
        ],
      },
      {
        name: "Pride",
        y: 0,
        x: 0,
        options: [
          {
            name: "LGBTQ+",
            color:
              "linear-gradient(180deg, #FE0001 16.66%, #FD8C00 16.66%, 33.32%, #FFE500 33.32%, 49.98%, #119F0B 49.98%, 66.64%, #0644B3 66.64%, 83.3%, #C22EDC 83.3%)",
            url: require("./background/pride/pride.png"),
          },
          {
            name: "New LGBTQ+",
            color:
              "linear-gradient(180deg, #FE0000 16.66%, #FD8C00 16.66%, 33.32%, #FFE500 33.32%, 49.98%, #119F0B 49.98%, 66.64%, #0644B3 66.64%, 83.3%, #C22EDC 83.3%)",
            url: require("./background/pride/modern-pride.png"),
          },
          {
            name: "Ace",
            color:
              "linear-gradient(180deg, #181818 25%, #A3A3A3 25%, 50%, #FFFFFF 50%, 75%, #800080 75%)",
            url: require("./background/pride/ace.png"),
          },
          {
            name: "Agender",
            color:
              "linear-gradient(180deg, #181818 14.285%, #C3C3C3 14.285%, 28.57%, #FFFFFF 28.57%, 42.855%, #B8F483 42.855%, 57.14%, #FFFFFF 57.14%, 71.425%, #C3C3C3 71.425%, 85.71%, #181818 85.71%)",
            url: require("./background/pride/agender.png"),
          },
          {
            name: "Bisexual",
            color:
              "linear-gradient(180deg, #D60270 40%, #9B4F96 40%, 60%, #0038A8 60%)",
            url: require("./background/pride/bisexual.png"),
          },
          {
            name: "Genderfluid",
            color:
              "linear-gradient(180deg, #FF77A3 20%, #FFFFFF 20%, 40%, #BE18D6 40%, 60%, #181818 60%, 80%, #333EBD 80%)",
            url: require("./background/pride/fluid.png"),
          },
          {
            name: "Genderqueer",
            color:
              "linear-gradient(180deg, #B57EDC 33.33%, #FFFFFF 33.33%, 66.66%, #4A8123 66.66%)",
            url: require("./background/pride/gender-queer.png"),
          },
          {
            name: "Intersex",
            color: "#ffd800",
            url: require("./background/pride/intersex.png"),
          },
          {
            name: "Lesbian",
            color:
              "linear-gradient(180deg, #8C1D00 14.285%, #C74D52 14.285%, 28.57%, #E5ABD0 28.57%, 42.855%, #EDEDEB 42.855%, 57.14%, #D260A7 57.14%, 71.425%, #B95393 71.425%, 85.71%, #A60061 85.71%)",
            url: require("./background/pride/lesbian.png"),
          },
          {
            name: "Nonbinary",
            color:
              "linear-gradient(180deg, #FFF430 25%, #FFFFFF 25%, 50%, #9C59D1 50%, 75%, #181818 75%)",
            url: require("./background/pride/nb.png"),
          },
          {
            name: "Pansexual",
            color:
              "linear-gradient(180deg, #FF218C 33.33%, #FFD800 33.33%, 66.66%, #21B1FF 66.66%)",
            url: require("./background/pride/pan.png"),
          },
          {
            name: "Trans",
            color:
              "linear-gradient(180deg, #5BCEFA 20%, #F5A9B8 20%, 40%, #FFFFFF 40%, 60%, #F5A9B8 60%, 80%, #5BCEFA 80%)",
            url: require("./background/pride/trans.png"),
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
        y: 236,
        x: 134,
        options: [
          {
            name: "Dolphin",
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
        name: "Plain",
        x: 367,
        y: 482,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./eyes/A/black.png"),
          },
          {
            name: "Blue",
            color: "#295569",
            url: require("./eyes/A/blue.png"),
          },
          {
            name: "Brown",
            color: "#3e2f27",
            url: require("./eyes/A/brown.png"),
          },
          {
            name: "Green",
            color: "#2f673b",
            url: require("./eyes/A/green.png"),
          },
          {
            name: "Purple",
            color: "#55214f",
            url: require("./eyes/A/purple.png"),
          },
          {
            name: "Red",
            color: "#7d0000",
            url: require("./eyes/A/red.png"),
          },
        ],
      },
      {
        name: "Anime",
        x: 351,
        y: 475,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./eyes/B/black.png"),
          },
          {
            name: "Blue",
            color: "#295569",
            url: require("./eyes/B/blue.png"),
          },
          {
            name: "Brown",
            color: "#5a4219",
            url: require("./eyes/B/brown.png"),
          },
          {
            name: "Green",
            color: "#2f673b",
            url: require("./eyes/B/green.png"),
          },
          {
            name: "Purple",
            color: "#55214f",
            url: require("./eyes/B/purple.png"),
          },
          {
            name: "Red",
            color: "#7d0000",
            url: require("./eyes/B/red.png"),
          },
        ],
      },
      {
        name: "Anime with Lashes",
        x: 328,
        y: 475,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./eyes/B-2/black.png"),
          },
          {
            name: "Blue",
            color: "#295569",
            url: require("./eyes/B-2/blue.png"),
          },
          {
            name: "Brown",
            color: "#5a4219",
            url: require("./eyes/B-2/brown.png"),
          },
          {
            name: "Green",
            color: "#2f673b",
            url: require("./eyes/B-2/green.png"),
          },
          {
            name: "Purple",
            color: "#55214f",
            url: require("./eyes/B-2/purple.png"),
          },
          {
            name: "Red",
            color: "#7d0000",
            url: require("./eyes/B-2/red.png"),
          },
        ],
      },
    ],
  },
  {
    name: "Face 1",
    url: require("./face/blush/purple.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            name: "None",
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Blush-1",
        y: 565,
        x: 435,
        options: [
          {
            name: "Purple",
            color: "#783370",
            url: require("./face/blush/purple.png"),
          },
          {
            name: "Blue",
            color: "#719bbd",
            url: require("./face/blush/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./face/blush/pink.png"),
          },
        ],
      },
      {
        name: "Blush-2",
        y: 570,
        x: 430,
        options: [
          {
            name: "Purple",
            color: "#783370",
            url: require("./face/blush-2/purple.png"),
          },
          {
            name: "Pink",
            color: "#719bbd",
            url: require("./face/blush-2/blue.png"),
          },
          {
            name: "Blue",
            color: "#ea68a2",
            url: require("./face/blush-2/pink.png"),
          },
        ],
      },
      {
        name: "Bandaid",
        y: 308,
        x: 778,
        options: [
          {
            name: "Green",
            color: "#569874",
            url: require("./face/bandaid/green.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./face/bandaid/pink.png"),
          },
          {
            name: "Purple",
            color: "#9790b1",
            url: require("./face/bandaid/purple.png"),
          },
          {
            name: "Peach",
            color: "#fad6ad",
            url: require("./face/bandaid/peach.png"),
          },
        ],
      },
    ],
  },
  {
    name: "Face 2",
    url: require("./face/blush-2/pink.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            name: "None",
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Blush-1",
        y: 565,
        x: 435,
        options: [
          {
            name: "Purple",
            color: "#783370",
            url: require("./face/blush/purple.png"),
          },
          {
            name: "Blue",
            color: "#719bbd",
            url: require("./face/blush/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./face/blush/pink.png"),
          },
        ],
      },
      {
        name: "Blush-2",
        y: 570,
        x: 430,
        options: [
          {
            name: "Purple",
            color: "#783370",
            url: require("./face/blush-2/purple.png"),
          },
          {
            name: "Blue",
            color: "#719bbd",
            url: require("./face/blush-2/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./face/blush-2/pink.png"),
          },
        ],
      },
      {
        name: "Bandaid",
        y: 308,
        x: 778,
        options: [
          {
            name: "Green",
            color: "#569874",
            url: require("./face/bandaid/green.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./face/bandaid/pink.png"),
          },
          {
            name: "Purple",
            color: "#9790b1",
            url: require("./face/bandaid/purple.png"),
          },
          {
            name: "Peach",
            color: "#fad6ad",
            url: require("./face/bandaid/peach.png"),
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
            name: "None",
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Airpods",
        y: 586,
        x: 261,
        options: [
          {
            name: "White",
            color: "#f1f1f3",
            url: require("./headphones/airpod/white.png"),
          },
          {
            name: "Black",
            color: "#262626",
            url: require("./headphones/airpod/black.png"),
          },
        ],
      },
      {
        name: "Anime",
        y: 206,
        x: 186,
        options: [
          {
            name: "Red",
            color: "#e60013",
            url: require("./headphones/anime/red.png"),
          },
          {
            name: "Purple",
            color: "#5d3971",
            url: require("./headphones/anime/purple.png"),
          },
          {
            name: "Green",
            color: "#009944",
            url: require("./headphones/anime/green.png"),
          },
          {
            name: "Pink",
            color: "#b74986",
            url: require("./headphones/anime/pink.png"),
          },
          {
            name: "Black",
            color: "#1a1a1a",
            url: require("./headphones/anime/black.png"),
          },
        ],
      },
      {
        name: "Original",
        y: 355,
        x: 171,
        options: [
          {
            name: "Black",
            color: "#333333",
            url: require("./headphones/original/black.png"),
          },
          {
            name: "Blue",
            color: "#1075a3",
            url: require("./headphones/original/blue.png"),
          },
          {
            name: "Dark Green",
            color: "#073028",
            url: require("./headphones/original/dark-green.png"),
          },
          {
            name: "Lime Green",
            color: "#7ea76a",
            url: require("./headphones/original/lime-green.png"),
          },
          {
            name: "Pink",
            color: "#f594bf",
            url: require("./headphones/original/pink.png"),
          },
          {
            name: "Purple",
            color: "#664397",
            url: require("./headphones/original/purple.png"),
          },

          {
            name: "Red",
            color: "#971921",
            url: require("./headphones/original/red.png"),
          },
        ],
      },
    ],
  },
  {
    name: "Shirts",
    url: require("./simplecast/tshirt/black.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            name: "None",
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "T-Shirt",
        y: 687,
        x: 116,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./simplecast/tshirt/black.png"),
          },
          {
            name: "Dark Grey",
            color: "#414141",
            url: require("./simplecast/tshirt/dark-grey.png"),
          },
          {
            name: "Grey",
            color: "#676767",
            url: require("./simplecast/tshirt/grey.png"),
          },
          {
            name: "White",
            color: "#fff",
            url: require("./simplecast/tshirt/white.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./simplecast/tshirt/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./simplecast/tshirt/pink.png"),
          },
          {
            name: "Purple",
            color: "#8957a1",
            url: require("./simplecast/tshirt/purple.png"),
          },

          {
            name: "Red",
            color: "#7d0000",
            url: require("./simplecast/tshirt/red.png"),
          },

          {
            name: "Yellow",
            color: "#cdc651",
            url: require("./simplecast/tshirt/yellow.png"),
          },
          {
            name: "Black Tie-Dye",
            color: "#393134",
            url: require("./simplecast/tshirt/black-2.png"),
          },
        ],
      },
      {
        name: "Talk About Podcasts",
        y: 687,
        x: 116,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./simplecast/podcasts/black.png"),
          },
          {
            name: "Dark Grey",
            color: "#414141",
            url: require("./simplecast/podcasts/dark-grey.png"),
          },
          {
            name: "Grey",
            color: "#676767",
            url: require("./simplecast/podcasts/grey.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./simplecast/podcasts/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./simplecast/podcasts/pink.png"),
          },
          {
            name: "Purple",
            color: "#8957a1",
            url: require("./simplecast/podcasts/purple.png"),
          },

          {
            name: "Red",
            color: "#7d0000",
            url: require("./simplecast/podcasts/red.png"),
          },
          {
            name: "Yellow",
            color: "#cdc651",
            url: require("./simplecast/podcasts/yellow.png"),
          },
          {
            name: "Black Tie-Dye",
            color: "#393134",
            url: require("./simplecast/podcasts/black-2.png"),
          },
        ],
      },
      {
        name: "Pod Squad",
        y: 687,
        x: 116,
        options: [
          {
            color: "#31302e",
            name: "Black",
            url: require("./simplecast/podsquad/black.png"),
          },
          {
            name: "Dark Grey",
            color: "#414141",
            url: require("./simplecast/podsquad/dark-grey.png"),
          },
          {
            name: "Grey",
            color: "#676767",
            url: require("./simplecast/podsquad/grey.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./simplecast/podsquad/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./simplecast/podsquad/pink.png"),
          },
          {
            name: "Purple",
            color: "#8957a1",
            url: require("./simplecast/podsquad/purple.png"),
          },
          {
            name: "Red",
            color: "#7d0000",
            url: require("./simplecast/podsquad/red.png"),
          },
          {
            name: "Yellow",
            color: "#cdc651",
            url: require("./simplecast/podsquad/yellow.png"),
          },

          {
            name: "Black Tie-Dye",
            color: "#393134",
            url: require("./simplecast/podsquad/black-2.png"),
          },
        ],
      },
      {
        name: "Simplecast",
        y: 687,
        x: 116,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./simplecast/simplecast/black.png"),
          },
          {
            name: "Dark Grey",
            color: "#414141",
            url: require("./simplecast/simplecast/dark-grey.png"),
          },
          {
            name: "Grey",
            color: "#676767",
            url: require("./simplecast/simplecast/grey.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./simplecast/simplecast/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./simplecast/simplecast/pink.png"),
          },
          {
            name: "Purple",
            color: "#8957a1",
            url: require("./simplecast/simplecast/purple.png"),
          },
          {
            name: "Black Tie Dye",
            color: "#393134",
            url: require("./simplecast/simplecast/black-2.png"),
          },
        ],
      },
      {
        name: "Adswizz",
        y: 687,
        x: 116,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./simplecast/adswizz/black.png"),
          },
          {
            name: "Dark Grey",
            color: "#414141",
            url: require("./simplecast/adswizz/dark-grey.png"),
          },
          {
            name: "Grey",
            color: "#676767",
            url: require("./simplecast/adswizz/grey.png"),
          },
          {
            name: "White",
            color: "#edf3f7",
            url: require("./simplecast/adswizz/white.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./simplecast/adswizz/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./simplecast/adswizz/pink.png"),
          },
          {
            name: "Purple",
            color: "#8957a1",
            url: require("./simplecast/adswizz/purple.png"),
          },
          {
            name: "Black Tie-Dye",
            color: "#393134",
            url: require("./simplecast/adswizz/black-2.png"),
          },
        ],
      },
    ],
  },
  {
    name: "Jackets",
    url: require("./jacket/leather/black.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            name: "None",
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Leather Jacket",
        y: 681,
        x: 106,
        options: [
          {
            name: "Black",
            color: "#141417",
            url: require("./jacket/leather/black.png"),
          },
          {
            name: "Grey",
            color: "#262626",
            url: require("./jacket/leather/grey.png"),
          },
          {
            name: "Blue",
            color: "#213a53",
            url: require("./jacket/leather/blue.png"),
          },
          {
            name: "Green",
            color: "#263d2f",
            url: require("./jacket/leather/green.png"),
          },
          {
            name: "Purple",
            color: "#593849",
            url: require("./jacket/leather/purple.png"),
          },
          {
            name: "Red",
            color: "#4e0c0c",
            url: require("./jacket/leather/red.png"),
          },
          {
            name: "All Red",
            color: "#4e0c0d",
            url: require("./jacket/leather/red-2.png"),
          },
          {
            name: "Red/Black",
            color: "#4e0c0b",
            url: require("./jacket/leather/red-3.png"),
          },
          {
            name: "Yellow",
            color: "#fff100",
            url: require("./jacket/leather/yellow.png"),
          },
        ],
      },
      {
        name: "Leather Jacket (Simplecast)",
        y: 681,
        x: 106,
        options: [
          {
            name: "Black",
            color: "#141417",
            url: require("./jacket/leather-simplecast/black.png"),
          },
          {
            name: "Grey",
            color: "#262626",
            url: require("./jacket/leather-simplecast/grey.png"),
          },
          {
            name: "Blue",
            color: "#213a53",
            url: require("./jacket/leather-simplecast/blue.png"),
          },
          {
            name: "Green",
            color: "#263d2f",
            url: require("./jacket/leather-simplecast/green.png"),
          },
          {
            name: "Purple",
            color: "#593849",
            url: require("./jacket/leather-simplecast/purple.png"),
          },
          {
            name: "Red",
            color: "#4e0c0c",
            url: require("./jacket/leather-simplecast/red.png"),
          },
          {
            name: "All Red",
            color: "#4e0c0d",
            url: require("./jacket/leather-simplecast/red-2.png"),
          },
          {
            name: "Red/Black",
            color: "#4e0c0b",
            url: require("./jacket/leather-simplecast/red-3.png"),
          },
          {
            name: "Yellow",
            color: "#fff100",
            url: require("./jacket/leather-simplecast/yellow.png"),
          },
        ],
      },
      {
        name: "Hoodie",
        y: 618,
        x: 48,
        options: [
          {
            name: "Black",
            color: "#141417",
            url: require("./jacket/hoodie/black.png"),
          },
          {
            name: "Grey",
            color: "#262626",
            url: require("./jacket/hoodie/grey.png"),
          },
          {
            name: "White",
            color: "#ebebed",
            url: require("./jacket/hoodie/white.png"),
          },
          {
            name: "White Tie-Dye",
            color: "#bdced8",
            url: require("./jacket/hoodie/white-2.png"),
          },
          {
            name: "Blue",
            color: "#213a53",
            url: require("./jacket/hoodie/blue.png"),
          },
          {
            name: "Green",
            color: "#263d2f",
            url: require("./jacket/hoodie/green.png"),
          },
          {
            name: "Purple",
            color: "#593849",
            url: require("./jacket/hoodie/purple.png"),
          },
          {
            name: "Red",
            color: "#4e0c0c",
            url: require("./jacket/hoodie/red.png"),
          },
          {
            name: "Yellow",
            color: "#fff100",
            url: require("./jacket/hoodie/yellow.png"),
          },
        ],
      },
    ],
  },
  {
    name: "Glasses",
    url: require("./glasses/monocle/black.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            name: "None",
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Monocle",
        x: 148,
        y: 415,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./glasses/monocle/black.png"),
          },
          {
            name: "White",
            color: "#edf3f7",
            url: require("./glasses/monocle/white.png"),
          },
          {
            name: "Red",
            color: "#4e0c0c",
            url: require("./glasses/monocle/red.png"),
          },
          {
            name: "Purple",
            color: "#593849",
            url: require("./glasses/monocle/purple.png"),
          },
          {
            name: "Blue",
            color: "#213a53",
            url: require("./glasses/monocle/blue.png"),
          },
          {
            name: "Green",
            color: "#263d2f",
            url: require("./glasses/monocle/green.png"),
          },
        ],
      },
    ],
  },
  {
    name: "Hats",
    url: require("./hats/beanie/black.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            name: "None",
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Beanie",
        x: 155,
        y: 160,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./hats/beanie/black.png"),
          },
          {
            name: "Dark Grey",
            color: "#414141",
            url: require("./hats/beanie/dark-grey.png"),
          },
          {
            name: "Grey",
            color: "#676767",
            url: require("./hats/beanie/grey.png"),
          },
          {
            name: "White",
            color: "#edf3f7",
            url: require("./hats/beanie/white.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./hats/beanie/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./hats/beanie/pink.png"),
          },
          {
            name: "Purple",
            color: "#8957a1",
            url: require("./hats/beanie/purple.png"),
          },
        ],
      },
      {
        name: "Motorcycle Helmet",
        x: 90,
        y: 127,
        options: [
          {
            name: "Black",
            color: "#141417",
            url: require("./hats/motorcycle/black.png"),
          },
          {
            name: "Blue",
            color: "#213a53",
            url: require("./hats/motorcycle/blue.png"),
          },
          {
            name: "Green",
            color: "#263d2f",
            url: require("./hats/motorcycle/green.png"),
          },
          {
            name: "Purple",
            color: "#593849",
            url: require("./hats/motorcycle/purple.png"),
          },
          {
            name: "Red",
            color: "#4e0c0c",
            url: require("./hats/motorcycle/red.png"),
          },
          {
            name: "Yellow",
            color: "#fff100",
            url: require("./hats/motorcycle/yellow.png"),
          },
        ],
      },
      {
        name: "Bike",
        x: 48,
        y: 94,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./hats/bike/black.png"),
          },
          {
            name: "Dark Grey",
            color: "#414141",
            url: require("./hats/bike/dark-grey.png"),
          },
          {
            name: "Grey",
            color: "#676767",
            url: require("./hats/bike/grey.png"),
          },
          {
            name: "White",
            color: "#edf3f7",
            url: require("./hats/bike/white.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./hats/bike/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./hats/bike/pink.png"),
          },
          {
            name: "Purple",
            color: "#8957a1",
            url: require("./hats/bike/purple.png"),
          },
          {
            name: "Rubin",
            color: "#12527e",
            url: require("./hats/bike/rubin.png"),
          },
        ],
      },
      {
        name: "Sweatband",
        x: 187,
        y: 247,
        options: [
          {
            name: "Black",
            color: "#31302e",
            url: require("./hats/sweatband/black.png"),
          },
          {
            name: "Dark Grey",
            color: "#414141",
            url: require("./hats/sweatband/dark-grey.png"),
          },
          {
            name: "Grey",
            color: "#676767",
            url: require("./hats/sweatband/grey.png"),
          },
          {
            name: "White",
            color: "#edf3f7",
            url: require("./hats/sweatband/white.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./hats/sweatband/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./hats/sweatband/pink.png"),
          },
          {
            name: "Purple",
            color: "#8957a1",
            url: require("./hats/sweatband/purple.png"),
          },
        ],
      },
      {
        name: "Boater",
        y: 116,
        x: 178,
        options: [
          {
            name: "Black",
            color: "#2a2729",
            url: require("./hats/boater/black.png"),
          },
          {
            name: "Dark Grey",
            color: "#343138",
            url: require("./hats/boater/dark-grey.png"),
          },
          {
            name: "White",
            color: "#e7eaf2",
            url: require("./hats/boater/white.png"),
          },
          {
            name: "White Tie-Dye",
            color: "#aaa8bb",
            url: require("./hats/boater/white-2.png"),
          },
          {
            name: "Teal",
            color: "#295569",
            url: require("./hats/boater/teal.png"),
          },
        ],
      },
      {
        name: "Flat",
        y: 176,
        x: 219,
        options: [
          {
            name: "Black",
            color: "#2f2f2f",
            url: require("./hats/flat/black.png"),
          },
          {
            name: "Black Tie-Dye",
            color: "#34343a",
            url: require("./hats/flat/black-2.png"),
          },
          {
            name: "Dark Grey",
            color: "#414141",
            url: require("./hats/flat/dark-grey.png"),
          },
          {
            name: "Grey",
            color: "#676767",
            url: require("./hats/flat/grey.png"),
          },
          {
            name: "White",
            color: "#ebebed",
            url: require("./hats/flat/white.png"),
          },
          {
            name: "White Tie Dye",
            color: "#bbb9c9",
            url: require("./hats/flat/white-2.png"),
          },
          {
            name: "Brown",
            color: "#643f14",
            url: require("./hats/flat/brown.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./hats/flat/blue.png"),
          },
          {
            name: "Pink",
            color: "#ea68a2",
            url: require("./hats/flat/pink.png"),
          },
          {
            name: "Teal",
            color: "#005982",
            url: require("./hats/flat/teal.png"),
          },
        ],
      },
    ],
  },
  {
    name: "Accessory Left",
    url: require("./accessories-left/diet-coke/diet-coke.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            name: "None",
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Diet Coke",
        y: 1014,
        x: 195,
        options: [
          {
            name: "Diet Coke",
            color: "red",
            url: require("./accessories-left/diet-coke/diet-coke.png"),
          },
        ],
      },
      {
        name: "Yo-Yo",
        y: 640,
        x: 32,
        options: [
          {
            name: "Blue",
            color: "#003d5a",
            url: require("./accessories-left/yoyo/blue.png"),
          },
          {
            name: "Red",
            color: "#971921",
            url: require("./accessories-left/yoyo/red.png"),
          },
        ],
      },
      {
        name: "Coach",
        y: 795,
        x: 24,
        options: [
          {
            name: "Coach!",
            color: "#b08e78",
            url: require("./accessories-left/pets/coach.png"),
          },
        ],
      },
    ],
  },
  {
    name: "Accessory Right",
    url: require("./accessories-right/mic/black.png"),
    items: [
      {
        name: "None",
        x: 0,
        y: 0,
        options: [
          {
            name: "None",
            color: "rgba(0,0,0,0)",
            url: require("./blank.png"),
          },
        ],
      },
      {
        name: "Mic",
        y: 638,
        x: 911,
        options: [
          {
            name: "Black",
            color: "#333132",
            url: require("./accessories-right/mic/black.png"),
          },
          {
            name: "White",
            color: "#ebebed",
            url: require("./accessories-right/mic/white.png"),
          },
          {
            name: "Blue",
            color: "#003567",
            url: require("./accessories-right/mic/blue.png"),
          },
          {
            name: "Adswizz Colors",
            color: "#8b2578",
            url: require("./accessories-right/mic/adswizz.png"),
          },
        ],
      },
      {
        name: "Computer",
        y: 830,
        x: 696,
        options: [
          {
            name: "Black",
            color: "#2f2f2e",
            url: require("./accessories-right/computer/black.png"),
          },
          {
            name: "Black with Stickers",
            color: "#2f2f2f",
            url: require("./accessories-right/computer/black-stickers.png"),
          },
          {
            name: "White",
            color: "#c3c2c2",
            url: require("./accessories-right/computer/white.png"),
          },
          {
            name: "White with Stickers",
            color: "#c3c2c1",
            url: require("./accessories-right/computer/white-stickers.png"),
          },
        ],
      },
    ],
  },
];

export default Dolphin;
