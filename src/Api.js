// const URL = "https://www.omdbapi.com/?s=kabhi&apikey=133234e8";

export const getMovie = async (name) => {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?s=" + name + "&apikey=133234e8"
      );
      const data = await response.json();
  
      return data;
  
    } catch (error) {
      console.error(error);
    }
  };
  