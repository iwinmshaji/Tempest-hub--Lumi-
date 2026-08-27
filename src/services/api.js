const API_KEY = import.meta.env.VITE_RAWG_API_KEY;


const API_URL = "https://api.rawg.io/api";


const LOCAL_API_URL = "https://tempest-hub-api.onrender.com";






export const getGames = async () => {
  const response = await fetch(
    `${API_URL}/games?key=${API_KEY}&page_size=12`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await response.json();

  return data.results;
};





export const getGameById = async (id) => {
  const response = await fetch(
    `${API_URL}/games/${id}?key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch game");
  }

  return response.json();
};




export const getLocalGames = async () => {
  const response = await fetch(
    `${LOCAL_API_URL}/games`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch local games");
  }

  return response.json();
};

export const getLocalGameById = async (id) => {
  const response = await fetch(
    `${LOCAL_API_URL}/games/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch local game");
  }

  return response.json();
};

export const addGame = async (game) => {
  const response = await fetch(
    `${LOCAL_API_URL}/games`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add game");
  }

  return response.json();
};




export const updateGame = async (id, game) => {
  const response = await fetch(
    `${LOCAL_API_URL}/games/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update game");
  }

  return response.json();
};

export const deleteGame = async (id) => {
  const response = await fetch(
    `${LOCAL_API_URL}/games/${id}`,
    {
      method: "DELETE"
    }
  );




  
  if (!response.ok) {
    throw new Error("Failed to delete game");
  }

  return true;
};