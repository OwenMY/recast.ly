import {exampleVideoData} from '/src/data/exampleVideoData.js';
import {VideoList} from './VideoList.js';
import {VideoPlayer} from './VideoPlayer.js';
console.log(exampleVideoData);
console.log('poop');
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidPlayer: exampleVideoData[0],
      vidList: exampleVideoData,
    };

  }


  onVideoListVidClick() {
    console.log(this);
    console.log(document.getElementById('app'));
    this.setState({
      vidPlayer: !this.state.done
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.vidPlayer}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state}/>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;




