import React from 'react';

const SongListItem = (props) => {
    if(!props) return null;
    
    return (
        <div className="song">
            <h3>{props.title}</h3>

        </div>
    )
}

export default SongListItem;