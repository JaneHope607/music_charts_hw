import React, { Component } from 'react';
import SongList from '../components/SongList.js';

class MusicContainer extends Component {
    constructor(){
        super();

        this.state = {
            songs: [],
        };
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
            .then(res => res.json())
            .then(songs => this.setState({ songs: songs.feed.entry}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="chart-box">
                <h2 className="header">UK Top 20 Charts</h2>
                <SongList songs={this.state.songs} />
            </div>
        )
    } 
}

export default MusicContainer;