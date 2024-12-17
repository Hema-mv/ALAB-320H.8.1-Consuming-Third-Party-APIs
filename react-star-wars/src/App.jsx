import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarshipCard from './components/StarshipCard';
import { getAllStarships } from './services/sw-api';
import './style.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getAllStarships();
        setStarships(data.results);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
  
      <Routes>
        <Route path="/" element={
          <div>
           <div className="navbar"> <h2>Star Wars Starships</h2> </div>
            <div className="starship-list">
              {starships.map(starship => (
                <StarshipCard key={starship.name} starship={starship} />
              ))}
            </div>
          </div>
        } />
      </Routes>
   
  );
}

export default App;
