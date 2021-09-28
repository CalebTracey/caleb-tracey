import React, { FC } from 'react'
import Bio from './views/Bio'
import LandingContent from './views/LandingContent'
import Portfolio from './views/Portfolio'
import Technologies from './views/Technologies'
import Contact from './views/Contact'
import ScrollToTop from '../components/ScrollToTop'

const Backdrop: FC = () => {
    return (
        <div className="backdrop">
            <LandingContent />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Bio />
                <Technologies />
                <Portfolio />
                <Contact />
                <ScrollToTop />
            </div>
        </div>
    )
}
export default Backdrop
