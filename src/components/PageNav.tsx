import React, { FC } from 'react'
import { Link } from 'react-scroll'

interface Props {
    title: string
    id: string
}

const PageNav: FC<Props> = (props: Props) => {
    const { title, id } = props
    return (
        <Link to={id} spy smooth>
            <div className="font-ossb text-hover">
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default PageNav
