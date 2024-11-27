import React, { useEffect, useState } from 'react';
import { IData } from '../interfaces/main.interfaces';

const Fetch: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = async (page: number) => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
      const result = await response.json();
      console.log(result);
      setData(result.results);
    } catch (error) { 
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === 2}
        >
          Next
        </button>
      </div>
      {data.map(
        ({
          birth_year,
          name,
          created,
          edited,
          eye_color,
          films,
          gender,
          hair_color,
          height,
          homeworld,
          mass,
          skin_color,
          species,
          starships,
          url,
          vehicles,
        }) => (
          <div
            key={url}
            style={{
              borderColor: 'black',
              border: 'solid',
              alignContent: 'center',
              justifyContent: 'center',
              display: 'block',
              margin: '10px',
              padding: '10px',
              fontSize:"20px"
            }}
          >
            <h1>{name}</h1>
            <p>Gender: {gender}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Birth Year: {birth_year}</p>
            <p>Skin Color: {skin_color}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Homeworld: {homeworld}</p>
            {/* <p>Species: {species}</p> */}
            <p>Starships: {starships}</p>
            <p>Vehicles: {vehicles}</p>
            <p>Films: {films}</p>
            <p>Created: {created}</p>
            <p>Edited: {edited}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Fetch;
