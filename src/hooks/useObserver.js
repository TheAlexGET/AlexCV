import { useEffect, useRef } from "react";

export const useObserver = (ref, callback) => {
    const observer = useRef()
    useEffect(() => {
        if(observer.current) observer.current.disconnect()
        let cb = (entries) => {
          if(entries[0].isIntersecting){
            callback()
            observer.current.disconnect()
          }
        };
        
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
      }, [])
}