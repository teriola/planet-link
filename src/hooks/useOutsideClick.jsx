import { useEffect, useRef } from "react";

export function useOutsideClick(setDropDownOpen){
  const elementRef = useRef();

  useEffect(() => {
    const onClick = (e) => {
      if (!elementRef.current?.contains(e.target)){
        setDropDownOpen(false);
      } 
    };

    document.addEventListener('click', onClick);
    return () => document.body.addEventListener('click', onClick);
  }, []);

  return [elementRef];
}
