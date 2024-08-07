import React from 'react'

export default function Features(props) {
  return (
    <div className='container'>
      <div className="container text-center my-4" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
        <h1 className='my-4 '>Features :</h1>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#212529' }}>
      <p><strong>&#9679; Convert to Upper Case :</strong> Transform all the letters in your text to uppercase with a single click, making it easy to emphasize or format your content.</p>
      <p><strong>&#9679; Convert to Lower Case :</strong> Easily change all the letters in your text to lowercase, ensuring consistency and simplicity in your writing.</p>
      <p><strong>&#9679; Remove Extra Space :</strong> Clean up your text by removing unnecessary spaces, making it look neat and professional.</p>
      <p><strong>&#9679; Extract Numbers :</strong> Quickly identify and extract all numerical data from your text, allowing you to focus on important figures and statistics.</p>
      <p><strong>&#9679; Extract Text :</strong> Isolate and extract textual content from mixed data, helping you concentrate on the words without distractions.</p>
      <p><strong>&#9679; Capitalize :</strong> Automatically capitalize the first letter of each word in your text, giving it a polished and proper appearance.</p>
      <p><strong>&#9679; Clear Text :</strong> Instantly erase all content from the text box, allowing you to start fresh with a clean slate.</p>
      <p><strong>&#9679; Copy Text :</strong> Copy your processed text to the clipboard with a single click, making it ready for pasting into any document or application.</p>
      <p><strong>&#9679; Paragraph to Sentence :</strong> Convert paragraphs into individual sentences, making your text easier to read and analyze.</p>
      <p><strong>&#9679; Download File :</strong> Save your analyzed or edited text as a file, allowing you to keep a local copy for future reference or sharing.</p>
      <p><strong>&#9679; Inverse Text :</strong> Flip the case of each letter in your text (uppercase to lowercase and vice versa), creating a quirky and unique look.</p>
      <p><strong>&#9679; Speak Text :</strong> Utilize text-to-speech functionality to have your text read aloud, which can be useful for proofreading or multitasking.</p>
      <p><strong>&#9679; Stop Speaking :</strong> Immediately halt the text-to-speech reading, giving you control over when to listen to your content.</p>
      <p><strong>&#9679; Replace Word :</strong> Find and replace specific words or phrases in your text, making editing quick and efficient.</p>
      <p><strong>&#9679; Word Count :</strong> Get an accurate count of the words in your text, helping you meet word count requirements for various tasks.</p>
      <p><strong>&#9679; Character Count :</strong> Count the number of characters in your text, useful for adhering to character limits in social media and other formats.</p>
      <p><strong>&#9679; Comma Count :</strong> Easily count the number of commas in your text, helping you improve punctuation accuracy.</p>
      <p><strong>&#9679; Sentence Count :</strong> Determine the number of sentences in your text, aiding in readability and structure analysis.</p>
      <p><strong>&#9679; Question Mark Count :</strong> Count the question marks in your text to better understand its interrogative nature.</p>
      <p><strong>&#9679; Exclamation Mark Count :</strong> Identify the number of exclamation marks, helping you gauge the emphasis and tone of your text.</p>
      <p><strong>&#9679; Time to Read Text :</strong> Time required to read your text, allowing you to gauge how long it will take for someone to go through your content.</p>
      <p><strong>&#9679; Pre-Review :</strong> Get a preliminary review of your text, highlighting potential issues and providing suggestions for improvements before the final review.</p>
    </div>
    </div>
  )
}
