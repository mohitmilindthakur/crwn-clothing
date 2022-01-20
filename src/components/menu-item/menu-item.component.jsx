import React from "react"
import './menu-item.styles.scss'



export default function MenuItem ({item: {title, subtitle, imageUrl, size}}) {
    return (
        <div className={`menu-item ${size}`}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>shop now</span>
            </div>
        </div>
    )
}