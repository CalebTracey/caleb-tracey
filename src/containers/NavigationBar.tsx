import React, { FC, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageNav from '../components/PageNav'
import useWindowDimensions from '../hooks/useWindowDimensions'

const NavigationBar: FC = () => {
    const views = ['bio', 'tech', 'portfolio', 'links']
    const controls = useAnimation()
    const { ref, inView } = useInView()
    const { width, height } = useWindowDimensions()
    const [isScrolling, setIsScrolling] = useState(false)

    const toggleIsScrolling = () => {
        if (window.pageYOffset > 500) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
    }

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
            },
        },
        shift: {
            y: '6rem',
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 50,
            },
        },
    }
    const listVariants = {
        hidden: { opacity: 0, y: '-10vh' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 50,
            },
        },
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (width < 820 && isScrolling) {
            if (height > width) {
                controls.start('shift')
            }
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView, width, height, isScrolling])

    useEffect(() => {
        window.addEventListener('scroll', toggleIsScrolling)
    }, [])

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className="navigation-bar"
            // data-smallScreen={isSmall}
        >
            {views.map((id) => {
                return (
                    <motion.div
                        style={{ width: '100%' }}
                        variants={listVariants}
                    >
                        <PageNav
                            isScrolling={isScrolling}
                            key={id}
                            id={id}
                            title={id}
                        />
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

export default NavigationBar
