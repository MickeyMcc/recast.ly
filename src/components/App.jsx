class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  
  onListItemClick(newVid) {
    this.setState({
      currentVideo: newVid 
    });
  }
  
  handleNewSeach(newVids) {
    this.setState({
      allVideos: newVids,
      currentVideo: newVids[0]
    });
  }
  
  properFetch(query) {
    this.props.searchTheThing({
      key: YOUTUBE_API_KEY,
      max: 7,
      query: query
    }, this.handleNewSeach.bind(this)
    );
  }
  
  componentDidMount() {
    console.log('mounted');
    this.properFetch('cats');
  }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search searchTheThing = {this.properFetch.bind(this)}/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={this.state.currentVideo}/></div>
        </div>
        <div className="col-md-5">
          <div> <VideoList videos={this.state.allVideos} 
            clickFunction = {this.onListItemClick.bind(this)} /> </div>
        </div>
      </div>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
