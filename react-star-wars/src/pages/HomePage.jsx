
import React, { useState, useEffect } from 'react';
import StarshipCard from '../components/StarshipCard';
import { getAllStarships } from '../services/sw-api';

function HomePage() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getAllStarships();
        setStarships(data.results);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const loaded = () => (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <div className="starship-list">
        {starships.map(starship => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );

  const loadingComponent = () => <h1>Loading...</h1>;

  // If starships have data, run the loaded function; otherwise, run loadingComponent
  return loading ? loadingComponent() : loaded();
}

export default HomePage;
