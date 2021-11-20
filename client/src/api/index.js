import axios from 'axios'

// const url = "http://localhost:5000/posts";
const url = "https://wedding-react-js.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)

export const updatePost = (id, updatedPostData) => axios.patch(`${url}/${id}`, updatedPostData)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)

export const deletePost = (id) => axios.delete(`${url}/${id}`)