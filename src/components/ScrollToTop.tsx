import React, { FC, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { animateScroll as scroll } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop: FC = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView()
    const [active, setActive] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    const handleOnClick = () => {
        scrollToTop()
        setActive(false)
    }
    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 0.5,
            transition: {
                duration: 0.5,
                stiffness: 500,
                damping: 20,
            },
        },
        active: {
            opacity: 1,
            transition: {
                duration: 0.5,
                stiffness: 500,
                damping: 20,
            },
        },
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    useEffect(() => {
        if (active) {
            controls.start('active')
        }
        if (!active) {
            controls.start('visible')
        }
    }, [controls, active])

    return (
        <motion.div
            ref={ref}
            layout
            initial="hidden"
            animate={controls}
            variants={variants}
            className="scroll-container"
            data-active={active}
        >
            <button
                type="button"
                className="scroll-to-top"
                aria-label="scroll-to-top"
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                onClick={handleOnClick}
            >
                {active ? (
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
    )
}

export default ScrollToTop
