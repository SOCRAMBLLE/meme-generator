import memesData from "../assets/memesData";

export default function Meme() {
  function handleClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let randomMeme = memesArray[randomNumber];
    console.log(randomMeme);
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
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
