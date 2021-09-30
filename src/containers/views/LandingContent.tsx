import React, { FC, useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import LandingContentDetails from '../../components/LandingContentDetails'
import NameTitle from '../../components/NameTitle'
import ScrollContext from '../../context/ScrollContext'

const LandingContent: FC = () => {
    const { ref, inView } = useInView({ threshold: 0.75 })
    const { scrollStatus, setScrollStatus } = useContext(ScrollContext)

    useEffect(() => {
        if (inView && setScrollStatus && scrollStatus !== false) {
            setScrollStatus(false, 'landing')
        }
    }, [inView, scrollStatus, setScrollStatus])

    return (
        <div ref={ref} style={{ position: 'absolute' }} className="view">
            <NameTitle />
            <LandingContentDetails />
        </div>
    )
}

export default LandingContent
