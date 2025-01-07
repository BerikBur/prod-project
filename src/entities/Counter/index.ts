export { counterReducer, counterActions } from './model/slice/counterSlice';
export { Counter } from './ui/Counter';
export type { CounterSchema } from './model/types/counterSchema';

export { getCounterValue } from './model/selectors/getCounterValue/getCounterValue';
