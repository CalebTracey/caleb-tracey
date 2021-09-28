import React, { FC, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageNav from '../components/PageNav'

const NavigationBar: FC = () => {
    const views = ['bio', 'technologies', 'portfolio', 'contact']
    const controls = useAnimation()
    const { ref, inView } = useInView()

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            // delay: 2,
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
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
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className="navigation-bar"
        >
            {views.map((id) => {
                return (
                    <motion.div variants={listVariants}>
                        <PageNav key={id} id={id} title={id} />
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

export default NavigationBar
