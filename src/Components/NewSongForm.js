import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [newSong, setNewSong] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newSong);
    addSong(newSong);
    setNewSong(" ");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Enter a song</label>
      <input
        type="text"
        required
        value={newSong}
        onChange={(e) => setNewSong(e.target.value)}
      />
      <button type="submit">Add</button>
      <p>You're going to add this song: {newSong}</p>
    </form>
  );
};

export default NewSongForm;
