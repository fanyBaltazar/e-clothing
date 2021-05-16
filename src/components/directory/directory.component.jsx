import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'

import './directory.styles.scss';

//this <MenuItem key={id} {...otherSectionProps}/> is equivalent to <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
const Directory = ({sections}) => {
    return(       
    <div className='directory-menu'>
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
    </div>
)};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);