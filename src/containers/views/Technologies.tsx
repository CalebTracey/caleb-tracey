import React, { FC, useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Header from '../../components/Header'
import ScrollContext from '../../context/ScrollContext'

const Technologies: FC = () => {
    const { ref, inView } = useInView({ threshold: 0.75 })
    const { scrollCurrent, setScrollStatus } = useContext(ScrollContext)
    useEffect(() => {
        if (inView && setScrollStatus && scrollCurrent !== 'tech') {
            setScrollStatus(true, 'tech')
        }
    }, [inView, scrollCurrent, setScrollStatus])

    return (
        <div ref={ref} id="tech" className="view" style={{ top: '200vh' }}>
            <Header title="What I've been using" />
        </div>
    )
}

export default Technologies
