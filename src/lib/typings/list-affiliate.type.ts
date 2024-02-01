export type ListAffiliate = {
    profilePicture: string;
    personName?: string;
    sequence?: number;
    username: string;
    point?: number;
    link?: {
      text: string;
      href: string;
    };
};