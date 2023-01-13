import axios from 'axios'
import React,{useState,useEffect} from 'react'
import DisplayScreen from '../DisplayScreen'
import Pagination from '../Pagination'

const Home = () => {
  const [posts, setposts] = useState([])
  const [loading, setloading] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [postsPerPage, setpostsPerPage] = useState(10)

  useEffect(() =>
  {
    const fetchApi = async () =>
    {
      setloading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setposts(res.data)
      setloading(false)
    }
    fetchApi()
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost,indexOfLastPost)


  console.log(posts)
  return (
    <div>
      <DisplayScreen posts={currentPost} loading={loading} />
      <Pagination totalpost ={posts.length} postsPerPage={postsPerPage}/>

    </div>
  )
  
}

export default Home