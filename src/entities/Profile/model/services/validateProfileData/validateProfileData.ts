import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profileData?: Profile) => {
    if (!profileData) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        name,
        lastName,
        age,
        country,
        city,
        street,
        houseNumber,
        apartmentNumber,
    } = profileData;
    const errors: ValidateProfileError[] = [];

    if (!name || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_NAME);
    }

    if (!age) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    if (!street) {
        errors.push(ValidateProfileError.INCORRECT_STREET);
    }

    if (!houseNumber) {
        errors.push(ValidateProfileError.INCORRECT_HOUSE_NUMBER);
    }

    if (!apartmentNumber) {
        errors.push(ValidateProfileError.INCORRECT_APARTMENT_NUMBER);
    }

    return errors;
};
