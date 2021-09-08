import { useRef, useEffect } from "react"

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()
    useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        var cb = (arg) => {
            if (arg[0].isIntersecting && canLoad) {
                callback()
            }
        }
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [isLoading])
}