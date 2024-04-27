import { useState, useEffect } from "react"
import axios from "axios"

function DisplayBlogList() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get("api/blog/")
      .then(response => {
        setBlogs(response.data)
        console.log("Data fetched: ", response.data)
      })
      .catch(error => {
        console.error("Error fetching data: ", error)
      })
  }, [])

  return (
    <>
    <h2>Blog Posts</h2>
    {blogs.map(blog => (
      <div key={blog.id}>
        <h3>{blog.title}</h3>
        <p>{blog.content}</p>
        <p>Date: {blog.date}</p>
      </div>
    ))}
    </>
  )
}

export default DisplayBlogList;