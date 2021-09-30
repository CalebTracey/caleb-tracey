import React, { FC, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
    title: string
}

const Header: FC<Props> = (props: Props) => {
    const { title } = props
    const controls = useAnimation()
    const { ref, inView } = useInView()

    const variants = {
        hidden: { opacity: 0, x: '-10vw' },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2,
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
            className="header"
        >
            <div className="header-text">
                <span>{title}</span>
            </div>
        </motion.div>
    )
}
export default Header
