import './directory.styles.scss'
import React from 'react'

import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';


const Directory = ({sections}) => (
	<div className='directory-menu'>
            {
                sections.map(( {id,title,imageUrl,size} ) => (
                    <MenuItem
                        key={id}   //uniqueness of our component
                        title={title}  //tilte
                        imageUrl={imageUrl}  //Image Url
                        size = {size}   //size appear
                    />
                )
                )
            }
        </div>
)

const mapStateToProps = () => createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps,null)(Directory)
