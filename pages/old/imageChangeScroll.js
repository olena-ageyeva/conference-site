import React, { useState, useRef, useEffect } from "react";
import ImageToggleScroll from "../../src/old/ImageToggleScroll";


const ImageChangeScroll = () => {
    return (
        <div>
            {['Olena_Ageyeva', 'Olena_Ageyeva', 'Olena_Ageyeva'].map(speakerId => {
                return (
                    <div key={speakerId}>
                        <ImageToggleScroll
                            primaryImg={`/static/bw/${speakerId}BW.jpg`}
                            secondaryImg={`/static/bw/${speakerId}.jpg`}
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageChangeScroll;