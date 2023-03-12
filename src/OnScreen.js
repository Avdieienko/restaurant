import { useState, useEffect } from "react";
import { useRef } from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }

export function VisibilityDiv(props) {
    const ref=useRef();
    const isVisible = useIsVisible(ref)
    return(
        <div className={`${props.classname} ${isVisible?"visible":""}`} ref={ref}>
            {props.children}
        </div>
    )
}