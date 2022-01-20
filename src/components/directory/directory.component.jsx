import React from "react";
import './directory.styles.scss'

import MenuItem from '../../components/menu-item/menu-item.component';
import data from "./data";


export default function Directory(props) {
    return (
        <div className='directory-menu'>
            {
                data.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))
            }
        </div>
    )
}
