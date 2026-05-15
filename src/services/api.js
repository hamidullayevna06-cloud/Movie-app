const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2QxODkyNzMzMTdmMWZjODA5Yzc4ZmJlZDllNWE0OSIsIm5iZiI6MTc3ODY4ODUzMy40MTkwMDAxLCJzdWIiOiI2YTA0YTIxNTBlZjdiMTRhMjc3NGQzYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.139u755z7LrQ7zGlJ3K0jGEScDkppayf_LQYbNCTSfM ",
  },
};

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular`, options);

  const data = await response.json();

  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${query}`,
    options,
  );

  const data = await response.json();

  return data.results;
};
