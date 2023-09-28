import axios from "../utils/axios.utils";

const getTrendingMovie = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `3/trending/all/day?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmNlYjhlMDVmMjBkYzY5MWY2ZGFjYmRkYTQ0YTZhMyIsInN1YiI6IjY0ZGExYjk5MzcxMDk3MDEzOTQ1YzYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ixf4X1OkJYHfq3xyyhxSV5CHBXQnVNxCvDivSo22NA",
      },
    });
    return Promise.resolve({
      status: true,
      data: response.data.results,
      message: "Data fetched successfully",
    });
  } catch (err) {
    console.log("GetUserData--------->>", err);
    return Promise.resolve({
      status: false,
      data: null,
      message: err ? err.data : "Data could not be fetched",
    });
  }
};


export { getTrendingMovie };
