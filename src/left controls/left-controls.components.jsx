import './left-controls.styles.css';

function LeftControls() {
    

    return (
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
    )
}

export default LeftControls;