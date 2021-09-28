import React, { FC, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HeaderTitle: FC = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView()

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
            },
        },
    }
    const listVariants = {
        hidden: { opacity: 0, x: '-10vw' },
        visible: {
            opacity: 1,
            x: 0,
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
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="header-text"
        >
            <motion.div variants={listVariants}>Caleb</motion.div>
            <motion.div variants={listVariants}>Tracey</motion.div>
        </motion.div>
    )
}

export default HeaderTitle
