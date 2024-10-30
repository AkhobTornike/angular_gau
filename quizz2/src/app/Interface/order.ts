import { DateTime } from "luxon";

export interface Order {
    id: number;
    invoice: string;
    date: DateTime;
    amount: number;
    paymentMethod: string;
    status: 'Paid' | 'Pending' | 'Cancelled';
}
