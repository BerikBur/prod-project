import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntries = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children: ReactNode;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (
    props: DynamicModuleLoaderProps,
) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntries) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntries) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
