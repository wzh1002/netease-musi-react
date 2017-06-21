import React, { PureComponent } from 'react';

class Play extends PureComponent {

    constructor(props) {
        super(props);

        const song = document.createElement('audio');
        const { updateIndexState } = this.props;
        this.song = song;
        this.listener = () => updateIndexState(song.currentTime)
    }

    componentDidMount() {
        const { src } = this.props;
        this.song.src = src;
        this.listenPlay();
        this.listenPause();
        this.listenEnd();
    }

    componentWillUnmount() {
        this.clear();
        this.song.pause();
        this.song = null;
    }

    listenProgress() {
        this.song.addEventListener('timeupdate', this.listener);
    }

    clearListen() {
        this.song.removeEventListener('timeupdate', this.updateProgress);
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
            self.clearListen();
        })
    }

    listenEnd() {
        const { updatePlayState, updateEndState } = this.props;
        const self = this;
        this.song.addEventListener('ended', () => {
            updatePlayState();
            updateEndState(true);
            self.clearListen();
        });
    }

    render() {
        const { props, song } = this;
        if (props.playing === false) {
            song.pause();
        } else {
            song.play();
        }
        return null;
    }
}

export default Play;
