export {
    Profile,
    ProfileSchema,
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
