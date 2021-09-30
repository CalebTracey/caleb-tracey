import React, { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import ScrollContext from '../context/ScrollContext'

interface Props {
    isScrolling: boolean
    title: string
    id: string
}

const PageNav: FC<Props> = (props: Props) => {
    const { title, id, isScrolling } = props
    const [highlight, setHighlight] = useState(false)
    const { scrollCurrent } = useContext(ScrollContext)

    useEffect(() => {
        if (scrollCurrent === id) {
            setHighlight(true)
        } else {
            setHighlight(false)
        }
    }, [scrollCurrent, id])

    return (
        <Link to={id} spy smooth="easeInOutCubic">
            <div
                className="font-ossb text-hover"
                data-highlight={highlight}
                data-scrolling={isScrolling}
            >
                {title}
            </div>
        </Link>
    )
}

export default PageNav
