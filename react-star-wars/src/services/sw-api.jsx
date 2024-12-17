// src/services/sw-api.js

export async function getAllStarships() {
  const response = await fetch('https://swapi.py4e.com/api/starships/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log(response)
  return response.json();
}
