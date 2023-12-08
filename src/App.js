import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
function App() {
  const [dataObtain, setData] = useState({
    message: "",
    data: "",
    error: ""
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      const fetchData = async () => {
        await fetch("https://localhost:44327/Visits", {
          method: 'POST'
        })
          .then((response) => response.json())
          .then((data) => setData(data))
      };
      fetchData();
      setLoading(true);
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Lumos Máxima!</p>
        <h1>
          {(<p>Your country is <b>{dataObtain.data.geolocate} </b>
            and your currency is <b>{dataObtain.data.currency}</b></p>)}
        </h1>
        <p className="autor">By: Fernando Gabriel Almaraz De La Quintana</p>
      </header>
    </div>
  );
}

export default App;
