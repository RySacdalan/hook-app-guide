import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

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

  const addSongHandler = (title) => {
    //spread operator(...songs) to copy/extend all the data from state
    //uuid create unique id for every element
    setSongs([...songs, { title: title, id: uuidv4() }]);
  };

  console.log(songs);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSongHandler} />
    </div>
  );
};

export default SongList;
