import { StateSchema } from 'app/providers/StoreProvider';

/**
 * Select counter value from state
 *
 * @param state - application state
 * @returns counter value
 */
export const getCounter = (state: StateSchema) => state.counter;
