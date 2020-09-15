import React from 'react';
import SongListItem from './SongListItem';

const SongList = (props) => {
    const songOptions = props.songs.map((song, index) => {
        return (
        <SongListItem
        key={index}
        title={song['im:name'].label}
        artist={song['im:artist'].label}
        position={index + 1}
        logo={song['im:image'][2].label}
        audio={song.link[1].attributes.href}
        />
    );
});

    return (
        <>
            <ul className="chart-list">
                {songOptions}
            </ul>
        </>
    )
}

export default SongList;