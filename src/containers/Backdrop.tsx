import React, { FC, useState } from 'react'
import Bio from './views/Bio'
import LandingContent from './views/LandingContent'
import Portfolio from './views/Portfolio'
import Technologies from './views/Technologies'
import Links from './views/Links'
// import ScrollToTop from '../components/ScrollToTop'
import ScrollContext from '../context/ScrollContext'
import Header from './Header'

// interface ScrollStateObject {
//     status: boolean
//     current: string | null
// }
const Backdrop: FC = () => {
    const [scrollState, setScrollState] = useState({
        status: false,
        current: '',
    })
    return (
        <div className="backdrop">
            <ScrollContext.Provider
                value={{
                    scrollStatus: scrollState.status,
                    scrollCurrent: scrollState.current,
                    setScrollStatus: (
                        scrollStatus: boolean,
                        scrollCurrent: string
                    ) =>
                        setScrollState({
                            status: scrollStatus,
                            current: scrollCurrent,
                        }),
                }}
            >
                <Header />
                <LandingContent />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '85vh',
                    }}
                >
                    <Bio />
                    <Technologies />
                    <Portfolio />
                    <Links />
                </div>
            </ScrollContext.Provider>
        </div>
    )
}
export default Backdrop
