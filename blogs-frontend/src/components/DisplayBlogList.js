import { useState, useEffect } from "react"
import axios from "axios"
import CreateBlog from "./CreateBlog"
import EditBlog from "./EditBlog"

const DisplayBlogList = () => {
  const [blogs, setBlogs] = useState([])
  const [editingBlog, setEditingBlog] = useState(null)

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

  const handleEditClick = (blog) => {
    setEditingBlog(blog)
  }
  
  const updateBlogList = (updatedBlog) => {
    setBlogs((returnedBlogs) => {
      const updatedBlogs = [...returnedBlogs]
      const index = updatedBlogs.findIndex((blog) => blog.id === updatedBlog.id)
      updatedBlogs[index] = updatedBlog
      return updatedBlogs
    })
  }

  return (
    <>
    <h2>Blog Posts</h2>
    {editingBlog ? (
      <EditBlog 
        blog={editingBlog} 
        onCancel={() => setEditingBlog(null)}
        onUpdate={updateBlogList} />
    ) : (
      blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p>Date: {blog.date}</p>
          <button onClick={() => handleEditClick(blog)}>Edit</button>
        </div>
      )  
    ))}

    <CreateBlog addBlogToList={addBlogToList} />
    {/* <EditBlog /> */}
    </>
  )
}

export default DisplayBlogList;