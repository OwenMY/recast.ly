import {exampleVideoData} from '/src/data/exampleVideoData.js';
import {VideoList} from './VideoList.js';
import {VideoPlayer} from './VideoPlayer.js';
import {searchYouTube} from '/src/lib/searchYouTube.js';
import {Search} from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVid: exampleVideoData[0],
      videos: []
    };

    this.changeVideo = this.changeVideo.bind(this);
    this.searchFor = this.searchFor.bind(this);

  }

  componentDidMount() {

    var self = this;
    searchYouTube('react', function(videos) {
      console.log(videos);
      self.setState({
        videos: videos,
        video: videos[0]
      });
    });

  }

  changeVideo(video) {

    this.setState({
      currentVid: video,
    });

  }

  searchFor() {
    let searchInput = document.getElementsByClassName('form-control')[0].value;
    console.log(searchInput);
    searchYouTube(searchInput, function(videos) {
      console.log(videos);
      self.setState({
        videos: videos,
        video: videos[0]
      });
    });
    //we need to save user input
    //we need to send that search input to the youtube API
    //when we get the info back, we need to
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search func={this.searchFor}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} changeVideo={this.changeVideo}/>
          </div>
        </div>
      </div>
    );
  }
}


// <VideoList videos={exampleVideoData} />
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;






// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );