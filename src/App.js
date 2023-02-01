import "./App.css";
import logo from "./images/pa-logo.png";

function App() {
  //shows today's date
  let date = new Date().toUTCString().slice(5, 7);
  //getting the name of the month
  let monthName = new Date().toLocaleString('en-us', {month: 'long'});
  //use this to get the current day of the week's name
  let weekday = new Date().toLocaleString('en-us', {weekday: 'long'});

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="logo">
        <div className="logo-image">
          <img src={logo} alt="app logo"></img>
        </div>
      </div>
      <div className="date-text-group">
        <div className="date-text">
          <h4>{date + " " + monthName +", " + weekday}</h4>
        </div>
        <div className="today-text">
          <h1>Today</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
