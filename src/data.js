import { v4 as uuidv4 } from "uuid";
import cover from "./assets/cover.jpg";
import cover2 from "./assets/cover2.jpg";
import cover3 from "./assets/cover3.jpg";

import canon from "./assets/songs/Canon.mp3";
import closure from "./assets/songs/Closure.mp3";
import daffodils from "./assets/songs/DAFFODILS.mp3"
import southOfKyoto from "./assets/songs/southOfKyoto.mp3";
import wonder from "./assets/songs/Wonderesque.mp3";
import stay from "./assets/songs/stay.mp3";


function chillHop() {
  return [
    {
      name: "Canon",
      cover: cover,
      artist: "Matrensh",
      audio: canon,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Closure",
      cover: cover2,
      artist: "Matrensh",
      audio: closure,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "DAFFODILS",
      cover: cover,
      artist: "Matrensh",
      audio: daffodils,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "South Of Kyoto",
      cover: cover3,
      artist: "Matrensh",
      audio: southOfKyoto,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Wonderesque",
      cover: cover2,
      artist: "Matrensh",
      audio: wonder,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "STAY",
      cover: cover3,
      artist: "Matrensh",
      audio: stay,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
