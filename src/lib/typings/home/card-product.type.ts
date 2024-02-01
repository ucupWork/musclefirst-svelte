interface ProductImage {
	full: string;
	thumbnail: string;
	alt: string;
}

interface ProductComposition {
	composName: string;
	compositionType?: string; 
}

interface ProductSize {
	sizeName: string;
	sizeType: string;
}

interface ProductSequence {
	sqeuenceGroup: string;
	sqeuencePart: string;
}

interface ProductQuantity {
	quantity: number; 
	qtyIn?: number; 
	qtyOut?: number; 
	qtyCurrent?: number; 
}

interface ProductPrice {
	price: number;
	priceActual?: number; 
	priceDiscount?: number; 
}

interface ProductLabdoor {
	score: number;
	scoreTotal: number;
	scoreLabel: string;
	lot: string;
	tested: string;
	dataProteinKey?: ProductLabdoorProteinKey[];
	dataCreatineKey?: ProductLabdoorCreatineKey[];
}

interface ProductLabdoorProteinKey {
	proteinFound: string;
	proteinClaime: string;
	leadFound: string;
	leadUspLimit: string;
	arsenicFound: string;
	arsenicUspLimit: string;
	cadmiumFound: string;
	cadmiumUspLimit: string;
	mercuryFound: string;
	mercuryUspLimit: string;
}

interface ProductLabdoorCreatineKey {
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
}

export type CardProduct = {
    id: string;
	sku?: string; 
    code?: string;
    type?: string;
    category?: string;
	typeProduct?: string;
    name: string;
    cocok?: string;
    description?: string;
    linkHref?: string;
    linkBlog?: string;
    imgUrl?: string;
    imgAlt?: string;
    labdoor?: boolean;
	labdoorData?: ProductLabdoor[];
	composition?: ProductComposition[];
	size?: ProductSize[];
	sequence?: ProductSequence[];
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
	quantity?: ProductQuantity[];
	price?: ProductPrice[];
	barcode?: string;
	added?: string;
	updated?: string;
	images?: ProductImage[];
}