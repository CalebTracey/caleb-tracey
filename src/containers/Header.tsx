import React, { FC } from 'react'
import NavigationBar from './NavigationBar'
import HeaderTitle from '../components/HeaderTitle'

const Header: FC = () => {
    return (
        <div className="header">
            <HeaderTitle />
            <NavigationBar />
        </div>
    )
}

export default Header
