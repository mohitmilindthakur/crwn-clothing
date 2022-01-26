import React from "react"
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom';



function MenuItem ({item: {title, subtitle, imageUrl, size, linkUrl}, history, match}) {
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`/${linkUrl}`)}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>shop now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);