import React from "react";
import './directory.styles.scss'

import MenuItem from '../../components/menu-item/menu-item.component';
import { connect } from 'react-redux';


function Directory({ directory }) {
    return (
        <div className='directory-menu'>
            {
                directory.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        directory: state.directory.data
    }
}

export default connect(mapStateToProps)(Directory);