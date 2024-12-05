import { User } from "./user";

export interface Review {
    reviewID: number;
    userID: number;
    createDateTime: string;
    stars: Float32Array;
    comment: string;
}
