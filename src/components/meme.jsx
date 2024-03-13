import { useState } from "react";
import memesData from "../assets/memesData";

export default function Meme() {
  const [randomMeme, setRandomMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = useState(memesData);

  function handleClick() {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const rMemeImg = memesArray[randomNumber].url;
    setRandomMeme((prev) => ({
      ...prev,
      randomImage: rMemeImg,
    }));
  }

  return (
    <main>
      <div className="form">
        <div>
          <label className="form--label">
            Top Text
            <input type="text" placeholder="Shut up" className="form--input" />
          </label>
        </div>
        <div>
          <label className="form--label">
            Bottom Text
            <input
              type="text"
              placeholder="and take my money"
              className="form--input"
            />
          </label>
        </div>
        <button className="form--button" onClick={handleClick}>
          Get a new meme image !
        </button>
      </div>
      {randomMeme.randomImage ? (
        <img src={randomMeme.randomImage} className="meme--img" />
      ) : (
        <h5 className="meme--default">Click the button to get a meme</h5>
      )}
    </main>
  );
}
