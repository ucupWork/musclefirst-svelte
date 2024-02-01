import type { Product } from "$typings/shop/shop.type";
// CDN Set to Digita Ocean Space
let cdn: boolean = false;
// Products Musclefirst List
export const productList: Product[] = [
  {
    id: "1",
    code: "M1PGPI01",
    typeProduct: "Gold", 
    name: "Pro Isolate",
    category: "powder",
    productVarian: "white",
    cocok: "Suplemen efektif untuk diet, menambah asupan protein dan menjaga bentuk badan ideal",
    linkHref: "products/pro-isolate",
    imgUrl: 'https://musclefirst-space.sgp1.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png',
    imgAlt: "Musclefirst Pro Isolate",
    inStock: true,
    priceShopee: 537000,
    linkShopee: 'https://shopee.co.id/Muscle-First-Gold-Series-Pro-Isolate-Whey-Protein-2lbs-900g-25-Servings-Suplemen-Fitness-i.8802988.429428928?utm_source=shopee&utm_medium=quick-buy&utm_campaign=isolate_shopee_click&utm_id=M1PGPI01-Shopee&utm_term=isolate',
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
    flavor: [
      {
        id: 1,
        code: "M1PGPI01R-1",
        flavorName: "Chocolate Soul",
        active: true
      },
      {
        id: 2,
        code: "M1PGPI01R-2",
        flavorName: "Honey Banana",
        active: true
      },
      {
        id: 3,
        code: "M1PGPI01R-3",
        flavorName: "Taro Velvet",
        active: true
      },
      {
        id: 4,
        code: "M1PGPI01R-4",
        flavorName: "Indian Mango",
        active: true
      },
      {
        id: 5,
        code: "M1PGPI01R-5",
        flavorName: "Banana Coffee",
        active: true
      },
      {
        id: 6,
        code: "M1PGPI01R-6",
        flavorName: "Strawberry Parfait",
        active: true
      },
    ],
    size: [
      {
        id: 1,
        code: "M1PGPI01-1",
        sizeNumber: "2",
        sizeType: "LBS",
        price: 537500,
        quantity: 99, 
        active: true
      },
      {
        id: 2,
        code: "M1PGPI01-2",
        sizeNumber: "5",
        sizeType: "LBS",
        price: 1347000,
        quantity: 99, 
        active: false
      }
    ],
    priceOption: {
        priceActual: 0,
        priceDiscount: 10,
    },
    "images": [
      { 
        "full": 'https://musclefirst-space.sgp1.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png', 
        "thumbnail": 'https://musclefirst-space.sgp1.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png', 
        "alt": "Musclefirst Pro Isolate" 
      }
    ],
    isClearance: false
  },
  {
    id: "3",
    // M1:Powser/Silver Pro Gainer/01
    code: "M1PSPW01",
    typeProduct: "Silver",
    name: "Pro Whey",
    category: "powder",
    productVarian: "white",
    cocok: "Suplemen efektif meningkatkan performa saat berolahraga, pertumbuhan massa otot, dan mengurangi berat badan",
    linkHref: "products/pro-whey",
    imgUrl: 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png',
    imgAlt: "Musclefirst Pro Whey",
    inStock: true,
    priceShopee: 393750,
    linkShopee: 'https://shopee.co.id/Muscle-First-Pro-Whey-100-2lbs-Whey-Protein-900gr-23-Serving-i.8802988.5876940790?utm_source=shopee&utm_medium=quick-buy&utm_campaign=whey_shopee_click&utm_id=M1PSPW01-Shopee&utm_term=whey',
    labdoor: true,
    labdoorData:[
      {
        score: 97.4,
        scoreTotal: 100,
        scoreLabel: 'A+',
        lot: '0422062401',
        tested: 'Sep 28,2022',
        dataProteinKey: [
          {
            proteinFound: '23.7g',
            proteinClaime: '24.0g',
            leadFound: '0.388ug/serving',
            leadUspLimit: '5.0ug/day',
            arsenicFound: 'Undetected',
            arsenicUspLimit: '15.0ug/day',
            cadmiumFound: 'Undetected',
            cadmiumUspLimit: '5.0ug/day',
            mercuryFound: 'Undetected',
            mercuryUspLimit: '15.0ug/day',
          }
        ]
      }
    ],
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
        composName: "1 Sugar"
      }
    ],
    flavor: [
      {
        id: 1,
        code: "M1PSPW01R-1",
        flavorName: "Chocolate",
        active: true
      },
      {
        id: 2,
        code: "M1PSPW01R-2",
        flavorName: "Vanilla Kurma Madu",
        active: true
      },
      {
        id: 3,
        code: "M1PSPW01R-3",
        flavorName: "Stroberi",
        active: true
      },
    ],
    size: [
      {
        id: 1,
        code: "M1PSPW01-1",
        sizeNumber: "1",
        sizeType: "Box",
        price: 110000,
        quantity: 99, 
        active: true
      },
      {
        id: 2,
        code: "M1PSPW02-1",
        sizeNumber: "2",
        sizeType: "LBS",
        price: 613800,
        quantity: 99, 
        active: true
      },
      {
        id: 3,
        code: "M1PSPW02-2",
        sizeNumber: "4",
        sizeType: "LBS",
        price: 697500,
        quantity: 99, 
        active: false
      },
      {
        id: 4,
        code: "M1PSPW02-3",
        sizeNumber: "10",
        sizeType: "LBS",
        price: 1725000,
        quantity: 99, 
        active: false
      }
    ],
    priceOption: {
        priceActual: 0,
        priceDiscount: 10,
    },
    "images": [
      { 
        "full": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png', 
        "thumbnail": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png', 
        "alt": "Musclefirst Pro Whey" 
      }
    ],
    isClearance: false
  },
  {
    id: "4",
    code: "M1PGPC01",
    typeProduct: "Gold",
    name: "Pro Casein",
    category: "powder",
    productVarian: "white",
    cocok: "Suplemen efektif membangun massa otot, menambah kekuatan otot, dan meningkatkan metabolisme tubuh dengan maksimal",
    linkHref: "products/pro-casein",
    imgUrl: 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png',
    imgAlt: "Musclefirst Pro Casein",
    inStock: true,
    priceShopee: 412500,
    linkShopee: 'https://shopee.co.id/Muscle-First-Pro-Gold-Casein-With-Egg-Power-2Lbs-M1-Whey-Protein-Suplemen-i.8802988.2559112272?sp_atk=35c85997-80ff-4139-a563-80a6b815367a&xptdk=35c85997-80ff-4139-a563-80a6b815367a&utm_source=shopee&utm_medium=quick-buy&utm_campaign=casein_shopee_click&utm_id=M1PGPI01-Shopee&utm_term=casein',
    composition: [
      {
        composName: "24G Protein"
      },
      {
        composName: "120 Calories"
      },
      {
        composName: "1G Fat"
      },
      {
        composName: "0 Sugar"
      }
    ],
    flavor: [
      {
        id: 1,
        code: "M1PGPC01R-1",
        flavorName: "Chocolate Soul",
        active: true
      },
      {
        id: 2,
        code: "M1PGPC01R-2",
        flavorName: "Banana Splash",
        active: true
      },
    ],
    size: [
      {
        id: 1,
        code: "M1PGPC01-1",
        sizeNumber: "2",
        sizeType: "LBS",
        price: 412500,
        quantity: 99, 
        active: true
      }
    ],
    priceOption: {
        priceActual: 0,
        priceDiscount: 10,
    },
    "images": [
      { 
        "full": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png', 
        "thumbnail": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png', 
        "alt": "Musclefirst Pro Casein" 
      }
    ],
    isClearance: false
  },
  {
    id: "8",
    code: "M1CWPC01",
    typeProduct: "White Series",
    name: "Pro Collafit",
    category: "collagen",
    productVarian: "white",
    cocok: "Suplemen efektif untuk meningkatkan fokus dan menambah energi untuk performa lebih baik",
    linkHref: "products/pro-collafit",
    imgUrl: 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png',
    imgAlt: "Musclefirst Procollafit",
    inStock: true,
    priceShopee: 119990,
    linkShopee: '/',
    composition: [
      {
        composName: "4G Protein"
      },
      {
        composName: "80 Calories"
      },
      {
        composName: "0 Sugar"
      },
      {
        composName: "11 Serving"
      }
    ],
    flavor: [
      {
        id: 1,
        code: "M1CWPC01R-1",
        flavorName: "Mix Berry",
        active: true
      },
      
    ],
    size: [
      {
        id: 1,
        code: "M1CWPC01-1",
        sizeNumber: "11",
        sizeType: "Servings",
        price: 119990,
        quantity: 99, 
        active: true
      }
    ],
    priceOption: {
      priceActual: 0,
      priceDiscount: 10,
    },
    "images": [
      { 
        "full": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png', 
        "thumbnail": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png', 
        "alt": "Musclefirst Pro Collafit" 
      }
    ],
    isClearance: false
  },
  {
    id: "5",
    code: "M1BGPB01",
    typeProduct: "Gold",
    name: "Pro BCAA",
    category: "bcaa",
    productVarian: "white",
    cocok: "Suplemen efektif mempertahankan dan memulihkan massa otot yang dibentuk setelah olahraga",
    linkHref: "products/pro-bcaa",
    imgUrl: 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-bcaa/pronew-05_pcwx1q.png',
    imgAlt: "Musclefirst Pro BCAA",
    inStock: true,
    priceShopee: 375000,
    linkShopee: 'https://shopee.co.id/Muscle-First-(M1)-Pro-Gold-BCAA-300gr-Mempertahankan-dan-Memulihkan-Otot-i.8802988.789609619?sp_atk=fb3b5a8f-dc8b-4f8b-a788-b163b1a31f4b&xptdk=fb3b5a8f-dc8b-4f8b-a788-b163b1a31f4b&utm_source=shopee&utm_medium=quick-buy&utm_campaign=bcaa_shopee_click&utm_id=M1PGPI01-Shopee&utm_term=bcaa',
    composition: [
      {
        composName: "7G BCAA"
      },
      {
        composName: "1 Sugar"
      },
      {
        composName: "20 Calories"
      },
      {
        composName: "30 Serving"
      }
    ],
    flavor: [
      {
        id: 1,
        code: "M1BGPB01R-1",
        flavorName: "Grape Bush",
        active: true
      },
      {
        id: 2,
        code: "M1BGPB01R-2",
        flavorName: "Green Apple",
        active: true
      },
      {
        id: 3,
        code: "M1BGPB01R-3",
        flavorName: "Orange Cooler",
        active: true
      },
    ],
    size: [
      {
        id: 1,
        code: "M1BGPB01-1",
        sizeNumber: "300",
        sizeType: "Gr",
        price: 375000,
        quantity: 99, 
        active: true
      }
    ],
    priceOption: {
        priceActual: 0,
        priceDiscount: 10,
    },
    "images": [
      { 
        "full": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-bcaa/pronew-05_pcwx1q.png', 
        "thumbnail": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-bcaa/pronew-05_pcwx1q.png', 
        "alt": "Musclefirst Pro BCAA" 
      }
    ],
    isClearance: false
  },
  {
    id: "6",
    code: "M1CGPC01",
    typeProduct: "Gold",
    name: "Pro Creatine",
    category: "creatine",
    productVarian: "black",
    cocok: "Suplemen efektif untuk meningkatkan performa olahraga sekaligus meningkatkan massa otot dan bebas lemak",
    linkHref: "products/pro-creatine",
    imgUrl: 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png',
    imgAlt: "Musclefirst Pro Creatine",
    inStock: true,
    priceShopee: 252000,
    linkShopee: 'https://shopee.co.id/Muscle-First-Pro-Gold-Creatine-300gr-i.8802988.289998377?sp_atk=ae6ad16b-f065-455a-8d99-599fb1bd2a19&xptdk=ae6ad16b-f065-455a-8d99-599fb1bd2a19&utm_source=shopee&utm_medium=quick-buy&utm_campaign=creatine_shopee_click&utm_id=M1PGPI01-Shopee&utm_term=creatine',
    labdoor: true,
    labdoorData:[
      {
        score: 98.1,
        scoreTotal: 100,
        scoreLabel: 'A+',
        lot: '0422062401',
        tested: 'Mar 10,2023',
        dataCreatineKey: [
          {
            creatineFound: '5.22 g',
            creatineClaime: '5.0 g',
            leadFound: '0.2886 ppm',
            leadUspLimit: '10.0 ppm',
            arsenicFound: '0.1302 ppm',
            arsenicUspLimit: '3.0 ppm',
            cadmiumFound: 'Below LOQ**',
            cadmiumUspLimit: '3.0 ppm',
            leadTwoFound: 'Below LOQ**',
            leadTwoUspLimit: '5.0 ug/day',
          }
        ]
      }
    ],
    composition: [
      {
        composName: "3G Protein"
      },
      {
        composName: "3G Carbs"
      },
      {
        composName: "300G Creatine"
      },
      {
        composName: "100% Pure"
      },
      {
        composName: "1 Sugar"
      },
      {
        composName: "25 Calories"
      },
      {
        composName: "60 Serving"
      }
    ],
    flavor: [
      {
        id: 1,
        code: "M1CGPC01R-1",
        flavorName: "Tropical Fruit",
        active: true
      },
      {
        id: 2,
        code: "M1CGPC01R-2",
        flavorName: "Guava",
        active: true
      },
      {
        id: 3,
        code: "M1CGPC01R-3",
        flavorName: "Green Apple",
        active: true
      },
      {
        id: 4,
        code: "M1CGPC01R-4",
        flavorName: "Peach",
        active: true
      },
      {
        id: 5,
        code: "M1CGPC01R-5",
        flavorName: "Mixberry",
        active: true
      },
      {
        id: 6,
        code: "M1CGPC01R-6",
        flavorName: "Bubblegum",
        active: true
      },
    ],
    size: [
      {
        id: 1,
        code: "M1CGPC01-1",
        sizeNumber: "360",
        sizeType: "Gr",
        price: 252000,
        quantity: 99, 
        active: true
      },
      {
        id: 1,
        code: "M1CGPC01-1",
        sizeNumber: "420",
        sizeType: "Gr",
        price: 252000,
        quantity: 99, 
        active: true
      },
      {
        id: 2,
        code: "M1CGPC02-1",
        sizeNumber: "1",
        sizeType: "Pouch",
        price: 250000,
        quantity: 99, 
        active: true
      },
      {
        id: 3,
        code: "M1CGPC03-1",
        sizeNumber: "1",
        sizeType: "Box",
        price: 75000,
        quantity: 99, 
        active: true
      }
    ],
    priceOption: {
        priceActual: 0,
        priceDiscount: 10,
    },
    "images": [
      { 
        "full": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png', 
        "thumbnail": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png', 
        "alt": "Musclefirst Pro Creatine" 
      }
    ],
    isClearance: false
  },
  {
    id: "7",
    code: "M1WBPN01",
    typeProduct: "Black Series",
    name: "Pro Nrgy",
    category: "workout",
    productVarian: "black",
    cocok: "Suplemen efektif untuk meningkatkan fokus dan menambah energi untuk performa lebih baik",
    linkHref: "products/pro-nrgy",
    imgUrl: 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png',
    imgAlt: "Musclefirst Pronrgy",
    inStock: true,
    priceShopee: 119990,
    linkShopee: 'https://shopee.co.id/Musclefirst-Pro-NRGY-Penambah-power-10-Servings-Suplemen-Fitness-i.8802988.19406803308?sp_atk=d221ff7f-2976-4b3f-b5d8-f68355bccc65&utm_source=shopee&utm_medium=quick-buy&utm_campaign=pro_nrgy_shopee_click&utm_id=M1PGPI01-Shopee&utm_term=pronrgy',
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
    flavor: [
      {
        id: 1,
        code: "M1WBPN01R-1",
        flavorName: "Watermelon Yuzu",
        active: true
      },
      {
        id: 2,
        code: "M1WBPN01R-2",
        flavorName: "Strawberry Orange",
        active: true
      },
      
    ],
    size: [
      {
        id: 1,
        code: "M1WBPN01-1",
        sizeNumber: "10",
        sizeType: "Servings",
        price: 119990,
        quantity: 99, 
        active: true
      }
    ],
    priceOption: {
      priceActual: 0,
      priceDiscount: 10,
    },
    "images": [
      { 
        "full": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png', 
        "thumbnail": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png', 
        "alt": "Musclefirst Pro Nrgy" 
      }
    ],
    isClearance: false
  },
  {
    id: "2",
    code: "M1GGPG01",
    typeProduct: "Gold",
    name: "Pro Gainer",
    category: "gainer",
    productVarian: "black",
    cocok: "Suplemen efektif membantu pembentukan otot tubuh dan mampu menambah massa otot",
    linkHref: "products/pro-gainer",
    imgUrl: 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png',
    imgAlt: "Musclefirst Pro Gainer",
    inStock: true,
    priceShopee: 306250,
    linkShopee: 'https://shopee.co.id/Muscle-First-Gold-Pro-Mass-Gainer-2lbs-Penambah-Berat-Badan-i.8802988.896956194?utm_source=shopee&utm_medium=quick-buy&utm_campaign=gainer_shopee_click&utm_id=M1GGPG01-Shopee&utm_term=gainer',
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
    flavor: [
      {
        id: 1,
        code: "M1GGPG01R-1",
        flavorName: "Chocolate Glame",
        active: true
      },
      {
        id: 2,
        code: "M1GGPG01R-2",
        flavorName: "Caramel Fusion",
        active: true
      },
      {
        id: 3,
        code: "M1GGPG01R-3",
        flavorName: "Honeydrew Melon",
        active: true
      },
      {
        id: 4,
        code: "M1GGPG01R-4",
        flavorName: "Chocolate Mint",
        active: true
      },
      {
        id: 5,
        code: "M1GGPG01R-5",
        flavorName: "Vanilla Popcorn",
        active: true
      },
    ],
    size: [
      {
        id: 1,
        code: "M1GGPG01-1",
        sizeNumber: "2",
        sizeType: "LBS",
        price: 306350,
        quantity: 99, 
        active: true
      },
      {
        id: 2,
        code: "M1GGPG01-2",
        sizeNumber: "6",
        sizeType: "LBS",
        price: 569750,
        quantity: 99, 
        active: false
      }
    ],
    priceOption: {
        priceActual: 0,
        priceDiscount: 10,
    },
    "images": [
      { 
        "full": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png', 
        "thumbnail": 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png', 
        "alt": "Musclefirst Pro Gainer" 
      }
    ],
    isClearance: false
  },
]