import axios from "axios";

async function getFetch(query, page) {
  let key = `19872404-8517b83978ef96fd2196e3bf4`;
  axios.defaults.baseURL = `https://pixabay.com/api/`;
  axios.defaults.headers.common["Authorization"] = key;
  let url = `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&&per_page=12`;
  const response = await axios.get(url);
  const data = await response.data;
  const photos = await data.photos;
  return photos;
}

export default getFetch;
