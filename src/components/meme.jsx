import { useEffect, useState } from "react";
// import memesData from "../assets/memesData";

export default function Meme() {
  const [randomMeme, setRandomMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const rMemeImg = allMemes[randomNumber].url;
    setRandomMeme((prev) => ({
      ...prev,
      randomImage: rMemeImg,
    }));
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setRandomMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <div>
          <label className="form--label">
            Top Text
            <input
              type="text"
              placeholder="Shut up"
              className="form--input"
              value={randomMeme.topText}
              name="topText"
              onChange={handleFormChange}
            />
          </label>
        </div>
        <div>
          <label className="form--label">
            Bottom Text
            <input
              type="text"
              placeholder="and take my money"
              className="form--input"
              value={randomMeme.bottomText}
              name="bottomText"
              onChange={handleFormChange}
            />
          </label>
        </div>
        <button type="button" className="form--button" onClick={handleClick}>
          Get a new meme image !
        </button>
      </div>
      {randomMeme.randomImage ? (
        <div className="meme">
          <img src={randomMeme.randomImage} className="meme--img" />
          <h2 className="meme--text top">{randomMeme.topText}</h2>
          <h2 className="meme--text bottom">{randomMeme.bottomText}</h2>
        </div>
      ) : (
        <h5 className="meme--default">Click the button to get a meme</h5>
      )}
    </main>
  );
}
