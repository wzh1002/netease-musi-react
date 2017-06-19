import React, { Component } from 'react';

class Play extends Component {

    constructor(props) {
        super(props);
        this.song = document.createElement('audio');
    }

    listenProgress() {
        const { updateProgress } = this.props;
        const { song } = this;
        this.timer = setInterval(() => {
            updateProgress(song.currentTime);
        }, 500);
    }

    clear() {
        clearInterval(this.timer);
    }

    listenPlay() {
        const self = this;
        this.song.addEventListener('play', () => {
            self.listenProgress();
        })
    }

    listenPause() {
        const self = this;
        this.song.addEventListener('pause', () => {
            self.clear();
        })
    }

    listenEnd() {
        const { updatePlayStatus, updateEndStatus } = this.props;
        const self = this;
        this.song.addEventListener('ended', () => {
            updatePlayStatus();
            updateEndStatus(true);
            self.clear();
        });
    }

    componentDidMount() {
        const { data } = this.props;
        this.song.src = data[0].url;
        this.listenPlay();
        this.listenPause();
        this.listenEnd();
    }

    componentWillUnmount() {
        this.clear();
        this.song.pause();
        this.song = null;
    }

    render() {
        const { props, song } = this;
        if (props.status.playing === false) {
            song.pause();
        } else {
            song.play();
        }
        return null;
    }
}

export default Play;
