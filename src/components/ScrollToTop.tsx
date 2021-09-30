import React, { FC, useEffect, useState, useContext } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { animateScroll as scroll } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import useWindowDimensions from '../hooks/useWindowDimensions'
import ScrollContext from '../context/ScrollContext'

const ScrollToTop: FC = () => {
    const controls = useAnimation()
    const { width } = useWindowDimensions()
    const [inFocus, setInFocus] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const { scrollStatus } = useContext(ScrollContext)

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 0.5,
            transition: {
                duration: 0.5,
                stiffness: 500,
            },
        },
        active: {
            opacity: 0.85,
            transition: {
                duration: 0.5,
                stiffness: 500,
                damping: 20,
            },
        },
    }

    useEffect(() => {
        if (inFocus) {
            controls.start('active')
        }
        if (isVisible) {
            controls.start('visible')
        }
        if (!isVisible) {
            controls.start('hidden')
        }
    }, [controls, isVisible, inFocus])

    useEffect(() => {
        if (scrollStatus) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [scrollStatus])

    return (
        <>
            {isVisible && (
                <motion.div
                    layout
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="scroll-container element-focus"
                    data-active={inFocus}
                >
                    <button
                        type="button"
                        className="scroll-to-top"
                        aria-label="scroll-to-top"
                        onMouseEnter={() => setInFocus(true)}
                        onMouseLeave={() => setInFocus(false)}
                        onClick={scrollToTop}
                    >
                        {inFocus && width > 820 ? (
                            <span
                                style={{ color: '#3b429f', margin: 0 }}
                                className="font-ossb"
                            >
                                Top
                            </span>
                        ) : (
                            <FaArrowUp className="button-icon" />
                        )}
                    </button>
                </motion.div>
            )}
        </>
    )
}

export default ScrollToTop
