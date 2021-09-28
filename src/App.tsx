import React, { FC } from 'react'
import './App.css'
import Backdrop from './containers/Backdrop'

export const App: FC = () => {
    return (
        <div className="app">
            <Backdrop />
        </div>
    )
}
