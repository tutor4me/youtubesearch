import axios from 'axios';

const KEY = 'AIzaSyCg4uO4dFiwl5-f9HWRNWGkvDRuo7tWqRM';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: '5',
    key: KEY,
  },
});
