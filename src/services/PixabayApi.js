import axios from "axios";
import propTypes from "prop-types";

const getFetch = (query, page) => {
  let key = `19872404-8517b83978ef96fd2196e3bf4`;
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&&per_page=12`
  );
};

// async function getFetch(query, page) {
//   let key = `19872404-8517b83978ef96fd2196e3bf4`;
//   axios.defaults.baseURL = `https://pixabay.com/api/`;
//   axios.defaults.headers.common["Authorization"] = key;
//   let url = `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&&per_page=12`;
//   const response = await axios.get(url);
//   const data = await response.data;
//   const photos = await data.photos;
//   return photos;
// }

export default getFetch;

getFetch.propTypes = {
  query: propTypes.string,
  page: propTypes.number,
};
