import type { CardProduct } from "$typings/home/card-product.type";

import ProductOne from '$images/product/optimize/pro-1.webp'
import ProductTwo from '$images/product/optimize/pro-2.webp'
import ProductThree from '$images/product/optimize/pro-3.webp'
import ProductFour from '$images/product/optimize/pro-4.webp'
import ProductFive from '$images/product/optimize/pro-5.webp'
import ProductSix from '$images/product/optimize/pro-6.webp'
import ProductSeven from '$images/product/optimize/pro-7.webp'
// CDN Set to Digita Ocean Space
let cdn: boolean = true;
// BMI Healthy List
export const bmiHealthy: CardProduct[] = [
    {
      id: "1",
      name: "Pro Isolate",
      linkHref: "products/pro-isolate",
      imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-1.webp` : ProductOne,
      imgAlt: "Musclefirst Pro Isolate",
      composition: [
        {
          composName: "27G Protein"
        },
        {
          composName: "7G BCAA"
        },
        {
          composName: "140 Calories"
        }
      ],
    },
    {
      id: "3",
      name: "Pro Whey",
      linkHref: "products/pro-whey",
      imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-3.webp` : ProductThree,
      imgAlt: "Musclefirst Pro Whey",
      composition: [
        {
          composName: "24G Protein"
        },
        {
          composName: "1G Fat"
        },
        {
          composName: "140 Calories"
        },
        {
          composName: "0 Sugar"
        }
      ],
    },
    {
      id: "4",
      name: "Pro Casein",
      linkHref: "products/pro-casein",
      imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-4.webp` : ProductFour,
      imgAlt: "Musclefirst Pro Casein",
      composition: [
        {
          composName: "24G Protein"
        },
        {
          composName: "1G Fat"
        },
        {
          composName: "120 Calories"
        }
      ],
    },
    {
      id: "5",
      name: "Pro BCAA",
      linkHref: "products/pro-bcaa",
      imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-5.webp` : ProductFive,
      imgAlt: "Musclefirst Pro BCAA",
      composition: [
        {
          composName: "7G BCAA"
        },
        {
          composName: "0 Sugar"
        },
        {
          composName: "0 Calories"
        },
        {
          composName: "30 Serving"
        }
      ],
    },
    {
      id: "6",
      name: "Pro Creatine",
      linkHref: "products/pro-creatine",
      imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-6.webp` : ProductSix,
      imgAlt: "Musclefirst Pro Creatine",
      composition: [
        {
          composName: "5G Creatine"
        },
        {
          composName: "100% Pure"
        },
        {
          composName: "0 Sugar"
        },
        {
          composName: "60 Serving"
        }
      ],
    },
    {
      id: "7",
      name: "Pro Nrgy",
      linkHref: "products/pro-pro-nrgy",
      imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-7.webp` : ProductSeven,
      imgAlt: "Musclefirst Pro Nrgy",
      composition: [
        {
          composName: "5G Creatine"
        },
        {
          composName: "100% Pure"
        },
        {
          composName: "0 Sugar"
        },
        {
          composName: "60 Serving"
        }
      ],
    },
]
// BMI Obese List
export const bmiObese: CardProduct[] = [
    {
        id: "1",
        name: "Pro Whey",
        linkHref: "products/pro-whey",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-3.webp` : ProductThree,
        imgAlt: "Musclefirst Pro Whey",
        composition: [
          {
            composName: "24G Protein"
          },
          {
            composName: "1G Fat"
          },
          {
            composName: "140 Calories"
          },
          {
            composName: "0 Sugar"
          }
        ],
    },
    {
        id: "2",
        name: "Pro Isolate",
        linkHref: "products/pro-isolate",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-1.webp` : ProductOne,
        imgAlt: "Musclefirst Pro Isolate",
        composition: [
            {
            composName: "27G Protein"
            },
            {
            composName: "7G BCAA"
            },
            {
            composName: "140 Calories"
            }
        ],
    },
    {
        id: "3",
        name: "Pro BCAA",
        linkHref: "products/pro-bcaa",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-5.webp` : ProductFive,
        imgAlt: "Musclefirst Pro BCAA",
        composition: [
            {
            composName: "7G BCAA"
            },
            {
            composName: "0 Sugar"
            },
            {
            composName: "0 Calories"
            },
            {
            composName: "30 Serving"
            }
        ],
    },
    {
        id: "4",
        name: "Pro Casein",
        linkHref: "products/pro-casein",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-4.webp` : ProductFour,
        imgAlt: "Musclefirst Pro Casein",
        composition: [
            {
            composName: "24G Protein"
            },
            {
            composName: "1G Fat"
            },
            {
            composName: "120 Calories"
            }
        ],
    },
]
// BMI Overweight List
export const bmiOverweight: CardProduct[] = [
    {
        id: "1",
        name: "Pro Whey",
        linkHref: "products/pro-whey",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-3.webp` : ProductThree,
        imgAlt: "Musclefirst Pro Whey",
        composition: [
          {
            composName: "24G Protein"
          },
          {
            composName: "1G Fat"
          },
          {
            composName: "140 Calories"
          },
          {
            composName: "0 Sugar"
          }
        ],
    },
    {
        id: "2",
        name: "Pro Isolate",
        linkHref: "products/pro-isolate",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-1.webp` : ProductOne,
        imgAlt: "Musclefirst Pro Isolate",
        composition: [
            {
            composName: "27G Protein"
            },
            {
            composName: "7G BCAA"
            },
            {
            composName: "140 Calories"
            }
        ],
    },
    {
        id: "3",
        name: "Pro BCAA",
        linkHref: "products/pro-bcaa",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-5.webp` : ProductFive,
        imgAlt: "Musclefirst Pro BCAA",
        composition: [
            {
            composName: "7G BCAA"
            },
            {
            composName: "0 Sugar"
            },
            {
            composName: "0 Calories"
            },
            {
            composName: "30 Serving"
            }
        ],
    },
    {
        id: "4",
        name: "Pro Casein",
        linkHref: "products/pro-casein",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-4.webp` : ProductFour,
        imgAlt: "Musclefirst Pro Casein",
        composition: [
            {
            composName: "24G Protein"
            },
            {
            composName: "1G Fat"
            },
            {
            composName: "120 Calories"
            }
        ],
    },
]
// BMI Underweight List
export const bmiUnderweight: CardProduct[] = [
    {
        id: "1",
        name: "Pro Gainer",
        linkHref: "products/pro-gainer",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-2.webp` : ProductTwo,
        imgAlt: "Musclefirst Pro Gainer",
        composition: [
        {
            composName: "55G Protein"
        },
        {
            composName: "160G Carbs"
        },
        {
            composName: "1030 Calories"
        }
        ],
    },
    {
        id: "2",
        name: "Pro Isolate",
        linkHref: "products/pro-isolate",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-1.webp` : ProductOne,
        imgAlt: "Musclefirst Pro Isolate",
        composition: [
            {
            composName: "27G Protein"
            },
            {
            composName: "7G BCAA"
            },
            {
            composName: "140 Calories"
            }
        ],
    },
    {
        id: "3",
        name: "Pro Creatine",
        linkHref: "products/pro-creatine",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-6.webp` : ProductSix,
        imgAlt: "Musclefirst Pro Creatine",
        composition: [
        {
            composName: "5G Creatine"
        },
        {
            composName: "100% Pure"
        },
        {
            composName: "0 Sugar"
        },
        {
            composName: "60 Serving"
        }
        ],
    },
    {
        id: "4",
        name: "Pro Casein",
        linkHref: "products/pro-casein",
        imgUrl: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-4.webp` : ProductFour,
        imgAlt: "Musclefirst Pro Casein",
        composition: [
            {
            composName: "24G Protein"
            },
            {
            composName: "1G Fat"
            },
            {
            composName: "120 Calories"
            }
        ],
    },
]