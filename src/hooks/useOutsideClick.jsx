import { useEffect, useRef } from "react";

export function useOutsideClick(setState){
    const elementRef = useRef();

    useEffect(() => {
        const onClick = (e) => {
            if (!elementRef.current?.contains(e.target)){
                setState(false);
            } 
        };

        document.addEventListener('click', onClick);
        return () => document.body.addEventListener('click', onClick);
    }, []);

    return [elementRef];
}
