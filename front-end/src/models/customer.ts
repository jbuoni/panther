export interface Customer {
    id: string
    name: string;
    birthday: string; // ISO date string
    email: string;
    phone: string;
    address: string;
    matters: any[];
}

export interface CustomerTable {
    customers: Customer[];
    hasMore: boolean;
}