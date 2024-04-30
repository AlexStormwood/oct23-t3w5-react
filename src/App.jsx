import logo from './logo.svg';
import './App.css';

import Navbar from "./Navbar";

let favouriteMovies = [
  "Aliens",
  "Dune",
  "Hot Fuzz",
  "Anchorman",
  "Lock Stock and 2 Smoking Barrels",
  "Shrek",
  "Pokemon",
  "Blazing Saddles",
  "Snatch",
  "Shrek 2",
  "The good, the bad, and the ugly",
  "Robocop",
  "Bladerunner",
  "Lord of the Rings 1-3"
];


function App() {
  return (
    <div className="App">

      <Navbar />
      <Navbar /> 
      <Navbar />
      <header className="App-header">
        <h1>Hello world!</h1>
        <h1>Favourite movies:</h1>
        <ul>
          {favouriteMovies.length > 0 &&  favouriteMovies.map((movie, index) => {
            return <li key={movie + "-" + index} >
              {movie}
            </li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
