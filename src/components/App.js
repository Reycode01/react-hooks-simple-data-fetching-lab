import React, { useState, useEffect } from "react";
import "whatwg-fetch";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update state with the received dog image URL
        setDogImageUrl(data.message);
        // Set loading to false since the data has been received
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        // Set loading to false in case of error
        setLoading(false);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

