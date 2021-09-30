import { createContext } from 'react'

type NavContextProps = {
    navState: string
    setNavState?: (navState: string) => void
}

export const NavContext = createContext<NavContextProps>({ navState: '' })
