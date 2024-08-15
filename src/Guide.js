import booksList from "./booksList";
import booksListNot from "./booksListNot";
import "./Guide.css";

const Guide = () => {
  return (
    <div className="everything" id="top">
      <h1>The Guide!</h1>
      <p>
        If you keep clicking enter or the read button on the other pages, and nothing is happening. You either typed in the wrong name for a book or the chapter or verse value might be too high, meaning the book doesn't have that many verses.
      </p>
      <a>
        <button
          className="button"
          onClick={() => (window.location.href = "#bottom")}
        >
          Go to the Bottom!
        </button>
      </a>
      <div className="table">
        <tr>
          <th>Name</th>
          <th>How To Type</th>
          <th>Summary</th>
        </tr>
        {Object.values(booksList).map((book, index) => (
          <tr key={index}>
            <td>{book.name}</td>
            <td>{book.howToType}</td>
            <td>{book.summary}</td>
          </tr>
        ))}
      </div>
      <h1 id="bottom">Books that are not in most bibles!</h1>
      <div className="table">
        <tr>
          <th>Name</th>
          <th>How To Type</th>
          <th>Summary</th>
        </tr>
        {Object.values(booksListNot).map((book, index) => (
          <tr key={index}>
            <td>{book.name}</td>
            <td>{book.howToType}</td>
            <td>{book.summary}</td>
          </tr>
        ))}
      </div>
      <a>
        <button
          className="button"
          onClick={() => (window.location.href = "#top")}
        >
          Go to the Top!
        </button>
      </a>
    </div>
  );
};

export default Guide;
