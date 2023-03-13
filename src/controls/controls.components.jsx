import LeftControls from "../left controls/left-controls.components";
import RightControls from "../right controls/right-controls.components";
import './controls.styles.css'

function Controls() {
    return (
        <div class="show-controls">

            {/* controls container */}
            <div class="controls_container">

                {/* progress bar */}
                <div class="progress-range" title="Seek">
                    <div class="progress-bar"></div>
                </div>

                <div class="control-group">
                    {/* left controls  */}
                   <LeftControls />
                    {/*  right controls */}
                  <RightControls />

                </div>

            </div>

        </div>
    )
}

export default Controls;