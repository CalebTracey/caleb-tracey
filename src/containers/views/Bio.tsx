import React, { FC, useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Header from '../../components/Header'
import ScrollContext from '../../context/ScrollContext'

const Bio: FC = () => {
    const { ref, inView } = useInView({ threshold: 0.75 })
    const { scrollCurrent, setScrollStatus } = useContext(ScrollContext)
    useEffect(() => {
        if (inView && setScrollStatus && scrollCurrent !== 'bio') {
            setScrollStatus(true, 'bio')
        }
    }, [inView, scrollCurrent, setScrollStatus])

    return (
        <div ref={ref} id="bio" className="view" style={{ top: '100vh' }}>
            <Header title="A little about me" />
        </div>
    )
}

export default Bio
