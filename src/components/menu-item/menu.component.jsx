import React from 'react';

import './menu.styles.scss';

const MenuItem = ( { title, imageUrl, size } ) => (

            <div className={`${size} menu-item`} style={{backgroundImage:`url(${imageUrl})`}}>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>Shop now</span>
                </div>
            </div>

)

export default MenuItem;