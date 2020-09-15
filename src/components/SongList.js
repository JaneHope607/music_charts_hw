import React from 'react';
import SongListItem from './SongListItem';

const SongList = (props) => {
    const songOptions = props.songs.map((song, index) => {
        return (
        <SongListItem
        value={index}
        key={index}
        title={song['im:name'].label}
        artist={song['im:artist'].label}
        position={index + 1}
        logo={song['im:image'][2].label}
        onClick={handleClick}
        />
    );
});
    
    function handleClick(event) {
        props.handleSongSelected(event.target.value);
  }

    return (
        <>
            <ul className="chart-list">
                {songOptions}
            </ul>
        </>
    )
}

export default SongList;