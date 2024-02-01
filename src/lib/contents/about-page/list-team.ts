import type { CardTeam } from "$typings/about/card-team.type";

import TeamOne from '$images/team/clint.png'
import TeamTwo from '$images/team/sally.png'
// CDN Set to Digita Ocean Space
let cdn: boolean = true;
// Products Musclefirst List
export const teamList: CardTeam[] = [
    {
      id: "1",
      role: "CO-Founder / CEO",
      name: "Clinton Augusto Kartawijaya",
      img: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/team/clint.png` : TeamOne
    },
    {
      id: "2",
      role: "CO-Founder / CEO",
      name: "Sally Varsly",
      img: cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/team/sally.png` : TeamTwo
    },
    {
      id: "3",
      role: "Brand Manager",
      name: "Mualana Arif Pratama",
      img: cdn ? `` : TeamTwo
    },
    {
      id: "4",
      role: "HRD Manager",
      name: "Innaya Dwitri Rasselin",
      img: cdn ? `` : TeamTwo
    }
]