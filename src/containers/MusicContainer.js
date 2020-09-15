import React, { Component } from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';

class MusicContainer extends Component {
    constructor(){
        super();

        this.state = {
            songs: [],
            selectedSong: '',
        };
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
            .then(res => res.json())
            .then(songs => this.setState({ songs: songs.entry}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <h2>UK Top 20 Charts</h2>
                <SongList songs={this.state.songs} />
                <SongDetail />
            </>
        )
    } 
}

export default MusicContainer;