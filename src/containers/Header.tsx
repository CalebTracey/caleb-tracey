import React, { FC } from 'react'
import NavigationBar from './NavigationBar'
import ScrollToTop from '../components/ScrollToTop'

const Header: FC = () => {
    return (
        <div className="main-header">
            <NavigationBar />
            <ScrollToTop />
        </div>
    )
}

export default Header
