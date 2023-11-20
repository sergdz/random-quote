import { useEffect, useState } from 'react';
import './App.scss';

function App() {

  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()

  const request = async () => {
    const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=1';
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '29fd1a35e8msh6a0438b3ff82ed7p1d18bcjsn77d4a035fe57',
        'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const {quote, author} = result[0]
      console.log(quote);
      setQuote(quote);
      setAuthor(author)

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    request()
  },[])




  return (
    <div className="App">
      <div className="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"></i>
          <span id="text">{quote}</span>
          <span id="text"></span><i className="fa fa-quote-right"> </i>


        </div>
        <div className="quote-author">
          - <span id="author">{author}</span>
        </div>
        <div className="buttons">
          <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
            <i className="fa fa-tumblr"></i>
          </a>
          <button className="button" onClick={request} id="new-quote">New quote</button>
        </div>
      </div>

    </div>
  );
}

export default App;
