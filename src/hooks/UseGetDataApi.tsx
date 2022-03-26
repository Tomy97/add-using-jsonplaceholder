import axios from 'axios'
import { useEffect, useState } from 'react'
import { UsersI } from '../interfaces/UsersI'

const useGetDataApi = () => {
  const [albumes, setAlbumes] = useState([])
  const [users, setUsers] = useState<UsersI[]>([])
  const [posts, setPosts] = useState([])

  const getAlbumes = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/albums',
    )
    setAlbumes(data)
  }

  const getUsers = async () => {
    const { data } = await axios.get<UsersI[]>(
      'https://jsonplaceholder.typicode.com/users',
    )
    setUsers(data)
  }

  const getPosts = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )
    setPosts(data)
  }
  useEffect(() => {
    getAlbumes(), getUsers(), getPosts()
  }, [])
  return {
    albumes,
    users,
    posts,
  }
}

export default useGetDataApi
