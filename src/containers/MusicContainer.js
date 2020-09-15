import React, { Component } from 'react';
import SongList from '../components/SongList.js';
import SongDetail from '../components/SongDetail.js';

class MusicContainer extends Component {
    constructor(){
        super();

        this.state = {
            songs: [],
            selectedSong: '',
        };

        this.handleSongSelected = this.handleSongSelected.bind(this);
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
            .then(res => res.json())
            .then(songs => this.setState({ songs: songs.feed.entry}))
            .catch(err => console.log(err));
    }

    handleSongSelected(id) {
        this.setState({ selectedSong : id});
    }

    render() {
        return (
            <div className="chart-box">
                <h2 className="header">UK Top 20 Charts</h2>
                <SongList songs={this.state.songs} handleSongSelected={this.handleSongSelected} />
                <SongDetail />
            </div>
        )
    } 
}

export default MusicContainer;