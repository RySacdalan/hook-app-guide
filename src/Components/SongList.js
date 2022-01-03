import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
  //array of objects
  //can use array destructuring to access data/obj
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
    { title: "Far from home", id: 4 },
    { title: "No way home", id: 5 },
  ]);

  const addSongHandler = () => {
    //spread operator(...songs) to copy/extend all the data from state
    //uuid create unique id for every element
    setSongs([...songs, { title: "Sixth title song", id: uuidv4() }]);
  };

  console.log(songs);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSongHandler}>Add Song</button>
    </div>
  );
};

export default SongList;
