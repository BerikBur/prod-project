import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<Dispatch>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn() as jest.MockedFn<Dispatch>;
        this.getState = jest.fn(() => ({} as StateSchema));

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch as any,
            this.getState,
            { api: this.api, navigate: this.navigate },
        );

        return result;
    }
}
