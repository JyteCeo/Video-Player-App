import './right-controls.styles.css';

function RightControls() {
    return (
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
    )
}

export default RightControls;