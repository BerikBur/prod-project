import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement | null>;
    wrapperRef: MutableRefObject<HTMLElement | null>;
}

export function useInfiniteScroll(options: UseInfiniteScrollOptions) {
    const observer = useRef<IntersectionObserver | null>(null);

    const { callback, triggerRef, wrapperRef } = options;

    useEffect(() => {
        if (callback) {
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, {
                root: wrapperRef.current,
                rootMargin: '0px 0px 300px 0px',
                threshold: 1,
            });

            if (triggerRef.current) {
                observer.current.observe(triggerRef.current);
            }
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
