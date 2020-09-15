import React from 'react';

const SongListItem = (props) => {
    if(!props) return null;

    return (
        <div className="song">
            <li className="song-item">{props.position} : {props.title} | {props.artist}</li>
                <audio controls src={props.audio} alt="song-preview">Click For Song!</audio>
                <img src={props.logo} alt="song-cover" />
        </div>
    )
}

export default SongListItem;