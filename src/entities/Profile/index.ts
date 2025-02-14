export {
    Profile,
    ProfileSchema,
    ValidateProfileError,
} from './model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';

export {
    updateProfileData,
} from './model/services/updateProfileData/updateProfileData';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
export { getProfileValidateErrors } from './model/selectors/getProfileValidateErrors/getProfileValidateErrors';

// export {
//     getProfileData,
//     getProfileError,
//     getProfileIsLoading,
//     getProfileReadonly,
// } from './model/selectors/getProfileData/getProfileData';

// export {
//     updateProfileData,
// } from './model/services/updateProfileData/updateProfileData';

// export {
//     ValidateProfileError,
// } from './model/consts/consts';
