import type { ListCertified } from "$typings/list-certified.type";

import LabelOne from '$images/certified/optimize/logo-label-01.webp';
import LabelTwo from '$images/certified/optimize/logo-label-02.webp';
import LabelThree from '$images/certified/optimize/logo-label-03.webp';
import LabelFour from '$images/certified/optimize/logo-label-04.webp';
import LabelFive from '$images/certified/optimize/logo-label-05.webp';
import LabelSix from '$images/certified/optimize/logo-label-06.webp';
// import LabdoorCertified from '$images/certified/svg/labdoor-logo-2022.svg';
const cloudinaryAsset: boolean =  true;

export const certifiedList: ListCertified[] = [
    {
      id: 1,
      title: "BPOM Certified",
      imgUrl: cloudinaryAsset ? 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/certified/cloud/logo-label-01_do585w.webp' : LabelOne,
      altImg: "BPOM Certified",
    },
    {
      id: 2,
      title: "MUI Certified",
      imgUrl: cloudinaryAsset ? 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/certified/cloud/logo-label-02_polrzm.webp' : LabelTwo,
      altImg: "MUI Certified",
    },
    {
      id: 3,
      title: "HACCP Certified",
      imgUrl: cloudinaryAsset ? 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/certified/cloud/logo-label-03_lky00v.webp' : LabelThree,
      altImg: "HACCP Certified",
    },
    {
      id: 4,
      title: "GMP Quality Certified",
      imgUrl: cloudinaryAsset ? 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/certified/cloud/logo-label-04_crbh1f.webp' : LabelFour,
      altImg: "GMP Quality Certified",
    },
    {
      id: 5,
      title: "IISO 22000 Certified",
      imgUrl: cloudinaryAsset ? 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/certified/cloud/logo-label-05_vhveye.webp' : LabelFive,
      altImg: "IISO 22000 Certified",
    },
    {
      id: 6,
      title: "Labdoor Certified",
      imgUrl: cloudinaryAsset ? 'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/certified/cloud/labdoor-logo-2022_wc9xem.svg' : LabelSix,
      altImg: "Labdoor Certified",
    },
]

// export const certifiedList: ListCertified[] = [
//   {
//     id: 1,
//     title: "BPOM Certified",
//     imgUrl: LabelOne,
//     altImg: "BPOM Certified",
//   },
//   {
//     id: 2,
//     title: "MUI Certified",
//     imgUrl: LabelTwo,
//     altImg: "MUI Certified",
//   },
//   {
//     id: 3,
//     title: "HACCP Certified",
//     imgUrl: LabelThree,
//     altImg: "HACCP Certified",
//   },
//   {
//     id: 4,
//     title: "GMP Quality Certified",
//     imgUrl: LabelFour,
//     altImg: "GMP Quality Certified",
//   },
//   {
//     id: 5,
//     title: "IISO 22000 Certified",
//     imgUrl: LabelFive,
//     altImg: "IISO 22000 Certified",
//   },
//   {
//     id: 6,
//     title: "Labdoor Certified",
//     imgUrl: LabelSix,
//     altImg: "Labdoor Certified",
//   },
// ]