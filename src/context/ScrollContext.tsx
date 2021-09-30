import { createContext } from 'react'

interface ScrollContextProps {
    scrollStatus: boolean
    scrollCurrent: string | null
    setScrollStatus?: (scrollStatus: boolean, scrollCurrent: string) => void
}

const ScrollContext = createContext<ScrollContextProps>({
    scrollStatus: false,
    scrollCurrent: null,
})

export default ScrollContext
