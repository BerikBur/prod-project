import { Country, Currency } from 'shared/const/common';

export interface Profile {
    name: string;
    lastName: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    street: string;
    houseNumber: number;
    apartmentNumber: number;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
