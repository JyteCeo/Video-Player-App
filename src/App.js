import './app.styles.css';
import Controls from './controls/controls.components';

function App() {


  return (
    <div class="player">

      <video src="https://pixabay.com/videos/download/video-31377_tiny.mp4?attachment" class="video"
        playsinline>

      </video>

      {/* show controls  */}

      <Controls />

    </div>


  );
}

export default App;
