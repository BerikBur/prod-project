import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<Dispatch>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn() as jest.MockedFn<Dispatch>;
        this.getState = jest.fn(() => ({} as StateSchema));
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch as any, this.getState, undefined);

        return result;
    }
}
