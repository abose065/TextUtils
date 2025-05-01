import React, { useState } from "react";

export default function TextForm(props) {
    const speech = window.speechSynthesis;
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
    }
    const handleClearClick = () => {
        setText("");
    }
    const handleSpeechClick = () => {
        const newUtter = new SpeechSynthesisUtterance(text);
        speech.speak(newUtter);
    }
    const handlePauseSpeechClick = () => {
        speech.pause();
    }
    const handleResumeSpeechClick = () => {
        speech.resume();
    }
    const handleStopSpeechClick = () => {
        speech.cancel();
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode === "dark" ? "black" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                    }} value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder="Enter Text Here....."></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleSpeechClick}>Text to Speech</button>
                <button className="btn btn-primary mx-1" onClick={handlePauseSpeechClick}>Pause Speech</button>
                <button className="btn btn-primary mx-1" onClick={handleResumeSpeechClick}>Resume Speech</button>
                <button className="btn btn-primary mx-1" onClick={handleStopSpeechClick}>Stop Speech</button>
            </div>
            <div className={`container my-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
                <h1>Your text summary</h1>
                <p>{text.trim().length > 0 ? text.trim().split(" ").length : 0} words, {text.trim().length > 0 ? text.length : 0} characters</p>
                <p>{0.008 * (text.trim().length > 0 ? text.trim().split(" ").length : 0)} Minutes read</p>
                <h2>Preview</h2>
                <p id="previewText">{text.length > 0 ? text : "Enter Something in the textbox above"}</p>
            </div>
        </>
    );
}

