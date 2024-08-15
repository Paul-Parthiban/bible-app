import { useState } from "react";
import "./App.css";
import Guide from "./Guide";
import logo from "./logo.png";

function App() {
  var theBook = "";
  var theChapter = "";
  var theVerse = "";
  const [one, setOne] = useState(false);
  const [verse, setVerse] = useState(false);
  const [chapter, setChapter] = useState(false);
  const [bookValue, setBookValue] = useState("");
  const [chapterValue, setChapterValue] = useState("");
  const [verseValue, setVerseValue] = useState("");
  const [text, setText] = useState("");
  const [chapterData, setChapterData] = useState([]);

  const handleBookChange = (e) => {
    setBookValue(e.target.value);
  };
  const handleChapterChange = (e) => {
    setChapterValue(e.target.value);
  };
  const handleVerseChange = (e) => {
    setVerseValue(e.target.value);
  };
  const singleVerseHandler = () => {
    setVerse(true);
    setChapter(false);
    setGuide(false);
    setText("");
    // setChapter('')
    // setVerse('')
  };

  const readVerseHandler = (e) => {
    e.preventDefault();
    theBook = bookValue.charAt(0).toLowerCase() + bookValue.slice(1);
    theChapter = chapterValue;
    theVerse = verseValue;
    fetch(
      `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${theBook}/chapters/${theChapter}/verses/${theVerse}.json`
    )
      .then((response) => response.json())
      .then((data) => setText(data.text));
  };

  const entireChapterHandler = () => {
    setVerse(false);
    setChapter(true);
    setBookValue("");
    setGuide(false);
  };

  const readChapterHandler = (e) => {
    e.preventDefault();
    theBook = bookValue.charAt(0).toLowerCase() + bookValue.slice(1);
    theChapter = chapterValue;
    fetch(
      `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${theBook}/chapters/${theChapter}.json`
    )
      .then((response) => response.json())
      .then((res) => {
        const cleanedData = res.data
          .slice(0, Math.ceil(res.data.length / 2))
          .map((verse) => {
            const cleanedText = verse.text.replace(/(\d+\.\d+.*)/, "");
            return { ...verse, text: cleanedText };
          });
        setChapterData(cleanedData);
      });
  };

  const backChapterHandler = (value) => {
    theBook = bookValue.charAt(0).toLowerCase() + bookValue.slice(1);
    theChapter = value;
    fetch(
      `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${theBook}/chapters/${theChapter}.json`
    )
      .then((response) => response.json())
      .then((res) => {
        const cleanedData = res.data
          .slice(0, Math.ceil(res.data.length / 2))
          .map((verse) => {
            const cleanedText = verse.text.replace(/(\d+\.\d+.*)/, "");
            return { ...verse, text: cleanedText };
          });
        setChapterData(cleanedData);
      });
    setChapterValue(value);
    if (value === 1) {
      setOne(true);
    }
  };

  const nextChapterHandler = (value) => {
    theBook = bookValue.charAt(0).toLowerCase() + bookValue.slice(1);
    theChapter = value;
    fetch(
      `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${theBook}/chapters/${theChapter}.json`
    )
      .then((response) => response.json())
      .then((res) => {
        const cleanedData = res.data
          .slice(0, Math.ceil(res.data.length / 2))
          .map((verse) => {
            const cleanedText = verse.text.replace(/(\d+\.\d+.*)/, "");
            return { ...verse, text: cleanedText };
          });
        setChapterData(cleanedData);
      });
    setChapterValue(value);
    if (value === 1) {
      setOne(true);
    }
  };
  const [guide, setGuide] = useState(false);
  const guideHandler = () => {
    setVerse(false);
    setChapter(false);
    setGuide(true);
  };

  return (
    <div className="default">
      <div className="buttons">
        <img src={logo} onClick={() => {
          setChapter(false)
          setVerse(false)
          setGuide(false)
        }}/>
        <button onClick={entireChapterHandler} className="NavButton">
          View Entire Chapter
        </button>
        <button onClick={singleVerseHandler} className="NavButton">
          View Single Verse
        </button>
        <button onClick={guideHandler} className="NavButton">
          Guide
        </button>
      </div>
      <div className="outerContent">
        <div className="content">
          <h1 className="welcome">The Wonderfull Word of God</h1>
          {!verse && !chapter && !guide ? (
            <div>
              <p>
                Welcome to The Wonderfull Word of God! Here you can browse
                through the Holy Bible. You can either view and entire chapter
                or view a single verse at a time. Here you can also find books
                that are not included in most bibles, such The Esdras, The
                Maccabees, The Song of the Three Holy Children and many more.
                You can use the guide to see a list of all the books available.
                You can also see how to type each book to get an accurate response. 
                Thank you for using The Wonderfull Word of God!
              </p>
            </div>
          ) : null}
          {verse ? (
            <div>
              <form>
                <input
                  className="book"
                  placeholder="Book"
                  onChange={handleBookChange}
                  value={bookValue}
                />
                <input
                  className="chapter"
                  placeholder="Chapter"
                  type="number"
                  min="1"
                  max="150"
                  onChange={handleChapterChange}
                />
                <input
                  className="verse"
                  placeholder="Verse"
                  type="number"
                  min="1"
                  max="176"
                  onChange={handleVerseChange}
                />
                <button
                  type="submit"
                  onClick={readVerseHandler}
                  className="btn"
                >
                  Read!
                </button>
              </form>
              <div className="verses">
                <h1>
                  {bookValue.charAt(0).toUpperCase()}
                  {bookValue.slice(1)} {chapterValue}:{verseValue} - {text}
                </h1>
              </div>
            </div>
          ) : null}

          {chapter ? (
            <div>
              <form>
                <input
                  className="book"
                  placeholder="Book"
                  onChange={handleBookChange}
                  value={bookValue}
                />
                <input
                  className="chapter"
                  placeholder="Chapter"
                  type="number"
                  min="1"
                  max="150"
                  onChange={handleChapterChange}
                  value={chapterValue}
                />
                <button
                  type="submit"
                  onClick={readChapterHandler}
                  className="btn"
                >
                  Read!
                </button>
              </form>
              <div className="simpleControls">
                <button
                  onClick={() => {
                    backChapterHandler(chapterValue - 1);
                  }}
                  disabled={one}
                >
                  Back
                </button>
                <h1>
                  {bookValue.charAt(0).toUpperCase()}
                  {bookValue.slice(1)} {chapterValue}
                </h1>
                <button
                  onClick={() => {
                    nextChapterHandler(parseInt(chapterValue) + 1);
                    setOne(false);
                  }}
                >
                  Next
                </button>
              </div>
              <div className="full">
                <div className="fullChapter">
                  {chapterData.map((verse, index) => (
                    <p key={index}>
                      <strong>{verse.verse}</strong> {verse.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          {guide ? <Guide /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
