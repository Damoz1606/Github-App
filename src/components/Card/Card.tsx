import React, { CSSProperties, ReactNode } from 'react'
import styleCSS from '@/styles/Card.module.css'

type CardProps = {
    children: ReactNode;
    style?: CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
    return (
        <div className={styleCSS.card} style={style}> {children}</div >
    )
}

export { Card }