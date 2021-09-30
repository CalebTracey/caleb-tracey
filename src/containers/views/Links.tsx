import React, { FC, useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Header from '../../components/Header'
import ScrollContext from '../../context/ScrollContext'

const Links: FC = () => {
    const { ref, inView } = useInView({ threshold: 0.75 })
    const { scrollCurrent, setScrollStatus } = useContext(ScrollContext)
    useEffect(() => {
        if (inView && setScrollStatus && scrollCurrent !== 'links') {
            setScrollStatus(true, 'links')
        }
    }, [inView, scrollCurrent, setScrollStatus])

    return (
        <div ref={ref} id="links" className="view" style={{ top: '400vh' }}>
            <Header title="Get in touch" />
        </div>
    )
}

export default Links
