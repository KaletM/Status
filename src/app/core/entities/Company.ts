export interface Company {
  id: number;
  name: string;
  legalName: string;
  description: string;
  email: string;
  phoneNumber: string;
  website: string;
  country: string;
  region: string;
  headquartersAddress: string;
  taxId: string;
  founder: string;
  foundedDate: string;         // O Date si lo vas a convertir
  brandSlogan: string;
  bannerUrl: string;
  logoUrl: string;

  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
  tikTokUrl: string;

  allowDelivery: boolean;
  allowReservations: boolean;
  allowOnlineOrders: boolean;
  isFranchiseModel: boolean
}
export default Company
