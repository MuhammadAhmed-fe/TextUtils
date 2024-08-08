import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Has Been Converted To Upper Case", "success");
    };

    const handleLowClick = () => {
        // console.log("Uroiiopppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Has Been Converted To Lower Case", "success")
    };

    const handleParagraphToSentence = () => {
        let newText = text.replaceAll('.', "\n");
        setText(newText);
        props.showAlert("Paragraph Has Been Converted To Sentences", "success");
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Have Been Removed From The Text", "success");
    };

    const handleFindNumber = () => {
        const newText = text.replace(/[^0-9]/g, "");
        setText(newText);
        props.showAlert("Numbers Have Been Extracted From The Text", "success");
    };

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "textutils.txt";
        element.click();
        props.showAlert("File Has Been Downloaded", "success");
    };

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Text Has Been Capitalized", "success");
    };

    const handleReplaceClick = () => {
        var a = prompt("Replace this : ");
        var b = prompt("With this : ");

        let newText = text.replaceAll(a, b);

        setText(newText);
    };

    const handleInverseClick = () => {
        // console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newtext += text[i];
        }
        setText(newtext);
        props.showAlert("Text Has Been Inverted.", "success");
    };

    const handleFindText = () => {
        const newText = text.replace(/[^a-zA-Z]/g, "");
        setText(newText);
        props.showAlert("Text Has Been Extracted.", "success");
    };
    
    const speak = () => {
        const Speech = new SpeechSynthesisUtterance();
        const message = document.getElementById("myBox").value;
        Speech.lang = 'eng';
        Speech.text = message;
        window.speechSynthesis.speak(Speech);
        props.showAlert("Text Is Being Spoken", "success");
    };

    const stop = () => {
        const Speech = new SpeechSynthesisUtterance();
        const message = document.getElementById("myBox").value;
        Speech.lang = 'eng';
        Speech.text = message;
        window.speechSynthesis.cancel(Speech);
        props.showAlert("Text Speaking Has Been Stopped", "success");
    };

    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Has Been Cleared", "success")
    };


    const handleCopyText = () => {
        var text = document.getElementById("myBox").value;
        if (!navigator.clipboard) {
            // Clipboard API not available
            console.error('Clipboard API not supported');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            props.showAlert("Text Copied", "success");
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    const handleOnChange = (event) => {
        // console.log("On Change");qewruiopqweq
        setText(event.target.value);
    }

    // const handleCopyText = () => {
    //     var text = document.getElementById("myBox").value;
    //     navigator.clipboard.writeText(text);
    //     props.showAlert("Text Copied", "success")
    // }


    // const [fWord, findWord] = useState("");
    // const [rWord, replaceWord] = useState("");

    // const handlefindChange = (event) => {
    //     findWord(event.target.value);
    // };
    // const handleReplaceChange = (event) => {
    //     console.log(replaceWord(event.target.value));
    // };
    // const handlereplaceClick = () => {
    //     let newText = text.replaceAll(fWord, rWord);
    //     setText(newText);
    // };




    return (
        <>
            <div className='main mt-4'>
                <div className="container text-center my-4" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
                    <h1 className='mb-4 '>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#f8f9fa', color: props.mode === 'dark' ? 'white' : '#212529' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleParagraphToSentence}>Paragraph To Sentence</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleFindNumber}>Extract Number</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={downloadTxtFile}>Download File</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleReplaceClick}>Replace</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleInverseClick}>Inverse click</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleFindText}>Extract Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={speak} type="submit">Speak Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={stop} type="submit">Stop Speaking</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                </div>
                {/* <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
                    <h2>Replace Word :</h2>
                    <p className='my-2'>Replace This Word:</p>
                    <input className="form-control w-25" type="text" value={fWord} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#f8f9fa', color: props.mode === 'dark' ? 'white' : '#212529' }} onChange={handlefindChange} aria-label="default input example" />
                    <p className='my-2'>With This Word:</p>
                    <input className="form-control w-25" type="text" value={rWord} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#f8f9fa', color: props.mode === 'dark' ? 'white' : '#212529' }} onChange={handleReplaceChange} aria-label="default input example" />
                    <button className="btn btn-primary my-2" onClick={handlereplaceClick}>Replace</button>
                </div> */}
                <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
                    <h2>Your Text Summary :</h2>

                    <p>Number Of Words : {text.split(" ").length - 1} </p>
                    <p>Number Of Characters : {text.length} </p>
                    <p>Number Of Sentences : {text === "" ? text.trim().split(".").filter((text) => text !== "").length : text.split(".").length - 1} </p>
                    <p>Number Of Comma : {text.split(",").length - 1} </p>
                    <p>Number Of Question Mark : {text.split("?").length - 1} </p>
                    <p>Number Of Exclamation Mark : {text.split("!").length - 1} </p>
                    <p>Minutes To Read : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </p>
                    <h3 className="text-center">Preview Document </h3>
                    <div className="content">
                        <textarea className="form-control" id="text" rows="3" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : '#f8f9fa', color: props.mode === 'dark' ? 'white' : '#212529' }} onChange={handleOnChange} disabled></textarea>
                    </div>
                </div>

            </div>
        </>
    )
}
