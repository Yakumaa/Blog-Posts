import { useState, useEffect } from "react"
import axios from "axios"
import CreateBlog from "./CreateBlog"

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

  const addBlogToList = (newBlog) => {
    setBlogs([...blogs, newBlog])
  }

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
    
    <CreateBlog addBlogToList={addBlogToList} />
    </>
  )
}

export default DisplayBlogList;