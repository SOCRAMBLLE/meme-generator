export default function Meme() {
  return (
    <main>
      <form className="form">
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
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
