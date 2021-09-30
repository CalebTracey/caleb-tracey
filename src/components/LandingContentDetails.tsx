import React, { FC, useEffect, useMemo, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useWindowDimensions from '../hooks/useWindowDimensions'

const LandingContentDetails: FC = () => {
    const detailsLarge = useMemo(
        () => ['207-332-0452', '/', 'caleb.tracey@gmail.com'],
        []
    )
    const detailsSmall = useMemo(
        () => ['207-332-0452', 'caleb.tracey@gmail.com'],
        []
    )
    const [details, setDetails] = useState<string[]>(detailsLarge)
    const { width } = useWindowDimensions()
    const controls = useAnimation()
    const { ref, inView } = useInView()

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.8,
                staggerChildren: 0.2,
                staggerDirection: -1,
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

    useEffect(() => {
        if (width < 500) {
            setDetails(detailsSmall)
        } else {
            setDetails(detailsLarge)
        }
    }, [width, setDetails, detailsLarge, detailsSmall])

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className="details-text-wrapper"
        >
            {details.map((detail) => {
                return (
                    <motion.div
                        variants={listVariants}
                        className="details-text"
                    >
                        {detail}
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

export default LandingContentDetails
