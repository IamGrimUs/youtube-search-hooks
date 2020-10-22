import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videoList: [],
    selectedVideo: null
  };
  componentDidMount() {
    this.onSearchSubmit('skateboarding');
  }
  onSearchSubmit = async input => {
    const response = await youtube.get('/search', {
      params: {
        q: input
      }
    });
    this.setState({
      videoList: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log('from app: ', video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videoList} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
