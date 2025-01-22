import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';

export enum ValidateProfileError {
    INCORRECT_NAME = 'INCORRECT_NAME',
    INCORRECT_LAST_NAME = 'INCORRECT_LAST_NAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_STREET = 'INCORRECT_STREET',
    INCORRECT_HOUSE_NUMBER = 'INCORRECT_HOUSE_NUMBER',
    INCORRECT_APARTMENT_NUMBER = 'INCORRECT_APARTMENT_NUMBER',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}

export interface Profile {
    id?: string;
    name?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    street?: string;
    houseNumber?: number;
    apartmentNumber?: number;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
