import React, { FC, useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Header from '../../components/Header'
import ScrollContext from '../../context/ScrollContext'

const Portfolio: FC = () => {
    const { ref, inView } = useInView({ threshold: 0.75 })
    const { scrollCurrent, setScrollStatus } = useContext(ScrollContext)
    useEffect(() => {
        if (inView && setScrollStatus && scrollCurrent !== 'portfolio') {
            setScrollStatus(true, 'portfolio')
        }
    }, [inView, scrollCurrent, setScrollStatus])

    return (
        <div ref={ref} id="portfolio" className="view" style={{ top: '300vh' }}>
            <Header title="Stuff I've built" />
        </div>
    )
}

export default Portfolio
