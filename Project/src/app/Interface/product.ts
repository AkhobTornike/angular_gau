export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    frontImage: string;
    backImage: string;
    manequenImage: string;
    category: string;
    assessment: Float32Array;
    sizes: string[];
    colors: string[];
    isDiscounted: boolean;
    discount: number;
    uploadDate: Date;
}
