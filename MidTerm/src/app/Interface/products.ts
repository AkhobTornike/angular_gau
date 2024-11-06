export interface Products {
    name: string;
    description: string;
    price: number;
    discount: number;
    discountPercentage: number;
    isNew: boolean;
    imageName: string;
    quantity?: number;
}
