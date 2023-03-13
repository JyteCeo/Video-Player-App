import './app.styles.css';


function App() {


  return (
    <div className="App">
      <div class="player">
        <video src="https://pixabay.com/videos/download/video-31377_tiny.mp4?attachment" class="video"
          playsinline></video>
        {/* show controls  */}
        <div class="show-controls">
          {/* controls container */}
          <div class="controls_container">
            {/* progress bar */}
            <div class="progress-range" title="Seek">
              <div class="progress-bar"></div>
            </div>
            <div class="control-group">
              {/* left controls  */}
              <div class="controls-left">
                {/*  play/pause  */}
                <div class="play-controls">
                  <i class="fas fa-play" title="play" id="play-btn"></i>
                </div>
                {/*  volume-controls  */}
                <div class="volume">
                  <div class="volume-icon">
                    <i class="fas fa-volume-up" title="mute" id="volume-icon"></i>
                  </div>
                  <div class="volume-range" title="change-volume">
                    <div class="volume-bar"></div>
                  </div>
                </div>
              </div>
              {/*  right controls */}
              <div class="controls-right">
                {/*  Speed  */}
                <div class="speed" title="Playback Rate">
                  <select name="playbackRate" class="player-speed">
                    <option value="0.5">0.5 x</option>
                    <option value="0.75">0.75 x</option>
                    <option value="1" selected>1 x</option>
                    <option value="1.5">1.5 x</option>
                    <option value="2">2 x</option>
                  </select>
                </div>
                {/*  Time */}
                <div class="time">
                  <span class="time-elapsed">00.00 / </span>
                  <span class="time-duration">2:38</span>
                </div>
                {/*  Fullscreen  */}
                <div class="fullscreen">
                  <i class="fas fa-expand"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
