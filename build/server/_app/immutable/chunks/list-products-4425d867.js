const productList = [
  {
    id: "1",
    code: "M1PGPI01",
    typeProduct: "Gold",
    name: "Pro Isolate",
    category: "powder",
    productVarian: "white",
    cocok: "Suplemen efektif untuk diet, menambah asupan protein dan menjaga bentuk badan ideal",
    description: "Suplemen efektif untuk diet, tinggi protein, dan tanpa lemak.",
    linkHref: "products/pro-isolate",
    imgUrl: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png",
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
    size: [
      {
        sizeName: "2",
        sizeType: "LBS"
      },
      {
        sizeName: "5",
        sizeType: "LBS"
      }
    ]
  },
  {
    id: "3",
    code: "M1PSPW01",
    typeProduct: "Silver",
    name: "Pro Whey",
    category: "powder",
    productVarian: "white",
    cocok: "Suplemen efektif meningkatkan performa saat berolahraga, pertumbuhan massa otot, dan mengurangi berat badan",
    description: "Suplemen efektif untuk pemula yang berolahraga untuk meningkatkan pertumbuhan otot, dan memenuhi asupan protein harian.",
    linkHref: "products/pro-whey",
    imgUrl: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png",
    imgAlt: "Musclefirst Pro Whey",
    labdoor: true,
    labdoorData: [
      {
        score: 97.4,
        scoreTotal: 100,
        scoreLabel: "A+",
        lot: "0422062401",
        tested: "Sep 28,2022",
        dataProteinKey: [
          {
            proteinFound: "23.7g",
            proteinClaime: "24.0g",
            leadFound: "0.388ug/serving",
            leadUspLimit: "5.0ug/day",
            arsenicFound: "Undetected",
            arsenicUspLimit: "15.0ug/day",
            cadmiumFound: "Undetected",
            cadmiumUspLimit: "5.0ug/day",
            mercuryFound: "Undetected",
            mercuryUspLimit: "15.0ug/day"
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
    size: [
      {
        sizeName: "1",
        sizeType: "Box"
      },
      {
        sizeName: "2",
        sizeType: "LBS"
      },
      {
        sizeName: "4",
        sizeType: "LBS"
      },
      {
        sizeName: "10",
        sizeType: "LBS"
      }
    ]
  },
  {
    id: "4",
    code: "M1PGPC01",
    typeProduct: "Gold",
    name: "Pro Casein",
    category: "powder",
    productVarian: "white",
    cocok: "Suplemen efektif membangun massa otot, menambah kekuatan otot, dan meningkatkan metabolisme tubuh dengan maksimal",
    description: "Suplemen efektif untuk intermitten fasting saat diet dengan protein tinggi untuk meningkatkan massa otot.",
    linkHref: "products/pro-casein",
    imgUrl: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png",
    imgAlt: "Musclefirst Pro Casein",
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
    size: [
      {
        sizeName: "2",
        sizeType: "LBS"
      }
    ]
  },
  {
    id: "8",
    code: "M1CWPC01",
    typeProduct: "White Series",
    name: "Pro Collafit",
    category: "collagen",
    productVarian: "white",
    cocok: "Cegah resiko penuaan dini dengan menjaga kesehatan dan kecantikan dari luar maupun dalam tubuh.",
    description: "Cegah resiko penuaan dini dengan menjaga kesehatan dan kecantikan dari luar maupun dalam tubuh.",
    linkHref: "products/pro-collafit",
    imgUrl: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png",
    imgAlt: "Musclefirst Procollafit",
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
    ]
  },
  {
    id: "5",
    code: "M1BGPB01",
    typeProduct: "Gold",
    name: "Pro BCAA",
    category: "bcaa",
    productVarian: "white",
    cocok: "Suplemen efektif mempertahankan dan memulihkan massa otot yang dibentuk setelah olahraga",
    description: "Suplemen efektif untuk mencegah penyusutan massa otot, memulihkan massa otot, dan menghindari otot dari kerusakan.",
    linkHref: "products/pro-bcaa",
    imgUrl: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-bcaa/pronew-05_pcwx1q.png",
    imgAlt: "Musclefirst Pro BCAA",
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
    ]
  },
  {
    id: "6",
    code: "M1CGPC01",
    typeProduct: "Gold",
    name: "Pro Creatine",
    category: "creatine",
    productVarian: "black",
    cocok: "Suplemen efektif untuk meningkatkan performa olahraga sekaligus meningkatkan massa otot dan bebas lemak",
    description: "Suplemen efektif untuk menebalkan massa otot, menambah kekuatan daya tahan otot dan bebas lemak.",
    linkHref: "products/pro-creatine",
    imgUrl: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png",
    imgAlt: "Musclefirst Pro Creatine",
    labdoor: true,
    labdoorData: [
      {
        score: 98.1,
        scoreTotal: 100,
        scoreLabel: "A+",
        lot: "0422062401",
        tested: "Mar 10,2023",
        dataCreatineKey: [
          {
            creatineFound: "5.22 g",
            creatineClaime: "5.0 g",
            leadFound: "0.2886 ppm",
            leadUspLimit: "10.0 ppm",
            arsenicFound: "0.1302 ppm",
            arsenicUspLimit: "3.0 ppm",
            cadmiumFound: "Below LOQ**",
            cadmiumUspLimit: "3.0 ppm",
            leadTwoFound: "Below LOQ**",
            leadTwoUspLimit: "5.0 ug/day"
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
    ]
  },
  {
    id: "7",
    code: "M1WBPN01",
    typeProduct: "Black Series",
    name: "Pro Nrgy",
    category: "workout",
    productVarian: "black",
    cocok: "Suplemen efektif untuk meningkatkan fokus dan menambah energi untuk performa lebih baik",
    description: "Minuman penambah energi dan fokus tanpa efek samping gelisah dan susah tidur, digunakan oleh olahragawan maupun pekerja kantoran.",
    linkHref: "products/pro-nrgy",
    imgUrl: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png",
    imgAlt: "Musclefirst Pronrgy",
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
    ]
  },
  {
    id: "2",
    code: "M1GGPG01",
    typeProduct: "Gold",
    name: "Pro Gainer",
    category: "gainer",
    productVarian: "black",
    cocok: "Suplemen efektif membantu pembentukan otot tubuh dan mampu menambah massa otot",
    description: "Suplemen efektif untuk bulking atau menambah berat badan, dan meningkatkan pertumbuhan otot.",
    linkHref: "products/pro-gainer",
    imgUrl: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png",
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
    size: [
      {
        sizeName: "2",
        sizeType: "LBS"
      },
      {
        sizeName: "6",
        sizeType: "LBS"
      }
    ]
  }
];
export {
  productList as p
};
