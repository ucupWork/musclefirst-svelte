interface ProductImage {
  full: string;
  thumbnail: string;
  alt: string;
}

export interface ProductSizeData {
  id: number;
  code?: string;
  sizeNumber: string;
  sizeType: string;
  price: number;
  quantity: number; 
  active: boolean;
}

export interface Product {
  id: string;
  sku?: string; 
  code?: string;
  category?: string;
  typeProduct?: string;
	productVarian?: string;
  name: string;
  cocok?: string;
  description?: string;
  linkHref?: string;
  imgUrl?: string;
  imgAlt?: string;
  inStock: boolean;
  priceShopee?: number;
  linkShopee?: string;
  labdoor?: boolean;
  labdoorData?: Array<{
    score: number;
    scoreTotal: number;
    scoreLabel: string;
    lot: string;
    tested: string;
    dataProteinKey?: Array<{
      proteinFound?: string;
      proteinClaime: string;
      leadFound: string;
      leadUspLimit: string;
      arsenicFound: string;
      arsenicUspLimit: string;
      cadmiumFound: string;
      cadmiumUspLimit: string;
      mercuryFound: string;
      mercuryUspLimit: string;
    }>;
    dataCreatineKey?: Array<{
      creatineFound?: string;
      creatineClaime: string;
      leadFound: string;
      leadUspLimit: string;
      arsenicFound: string;
      arsenicUspLimit: string;
      cadmiumFound: string;
      cadmiumUspLimit: string;
      leadTwoFound: string;
      leadTwoUspLimit: string;
    }>;
  }>;
  composition?: Array<{
    composName: string;
    compositionType?: string; 
  }>;
  flavor: Array<{
    id: number;
    code?: string;
    flavorName: string;
    active: boolean;
  }>;
  size: Array<ProductSizeData>;
  sequence?: Array<{
    sqeuenceGroup: string;
    sqeuencePart: string;
  }>;
  ratings?: Array<{
    rateProduct?: {
      quantity: number;
      value: number;
    };
    untappd?: {
      quantity: number;
      value: number;
    };
    total?: {
      quantity: number;
      value: number;
      date: string;
    };
  }>;
  quantityOption?: Array<{
    qtyIn?: number; 
    qtyOut?: number; 
    qtyCurrent?: number; 
  }>;
  priceOption?: {
    priceActual: number; 
    priceDiscount: number; 
  };
  barcode?: string;
  added?: string;
  updated?: string;
  images: ProductImage[];
  isClearance: boolean;
}

export interface CartProduct extends Pick<Product, "id" | "name"> {
  price: number;
  quantity: number;
  imgUrl?: string;
  imgAlt?: string;
  thumbnail: string;
}

export interface AppStore {
  mobileMenuOpen: boolean;
  cartOpen: boolean;
  cart: {
    products: CartProduct[];
    totalQuantity: number;
    totalPrice: number;
  };
}

export interface CheckoutDataMulti {
  showInfo: boolean;
  showShipping: boolean;
  showBilling: boolean;
  showPayment: boolean;
}

export interface CheckoutData {
  name: string;
  email: string;
  phone: string;
  shipAddress: string;
  shipState: string;
  shipPinCode: string;
  billAddress: string;
  billState: string;
  billPinCode: string;
  shipIsBill: boolean;
  paymentMethod: string;
}

const localStorageHash = "20bafd00-1322-409e-be88-a74f698cb06f";
const localStorageKeys = [`${localStorageHash}-mfc`] as const;
export type LocalStorageKey = typeof localStorageKeys[number];