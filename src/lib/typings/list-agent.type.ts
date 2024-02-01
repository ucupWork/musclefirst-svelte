export type ListAgen = {
  personName: string;
  distric?: string;
  agenType?: string;
  address?: string;
  noteAddress?: string;
  waNumber?: string;
  mapsLink?: string;
  waChatText?: string;
  linkLazada?: string;
  linkBukalapak?: string;
  linkTokped?: string;
  linkShopee?: string;
  codType ?: boolean;
  gojekType?: boolean;
  grabType?: boolean;
  link?: {
    text: string;
    href: string;
  };
};