import { useState, useEffect } from "react"
import axios from "axios"
import CreateBlog from "./CreateBlog"
import EditBlog from "./EditBlog"
import DeleteBlog from "./DeleteBlog"
import '../DisplayBlogList.css'

const DisplayBlogList = () => {
  const [blogs, setBlogs] = useState([])
  const [creatingBlog, setCreatingBlog] = useState(false)
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

  const handleCreateBlogClick = () => {
    setCreatingBlog(true)
  }

  const handleCancelCreateBlog = () => {
    setCreatingBlog(false)
  }

  const handleEditClick = (blog) => {
    setEditingBlog(blog)
  }

  const handleDeleteClick = (blogId) => {
    setBlogs((returnedBlogs) => returnedBlogs.filter((blog) => blog.id !== blogId))
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
    <div className="blog-list">
      <div className="blog-header-container">
        <h2 className="blog-heading">Blog Posts</h2>

        <div className="create-blog-button-container">
          <button className="create-blog-button" onClick={handleCreateBlogClick}>
          Create Blog
          </button>
        </div>
      </div>
      
      {creatingBlog && (
        <CreateBlog addBlogToList={addBlogToList} onCancel={handleCancelCreateBlog} />
      )}
      
      {editingBlog ? (
        <EditBlog 
          blog={editingBlog} 
          onCancel={() => setEditingBlog(null)}
          onUpdate={updateBlogList} 
        />
      ) : (
      blogs.map(blog => (
        <div key={blog.id} className="blog-card">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-content">{blog.content}</p>
          <p className="blog-date">Date: {blog.date}</p>
          <div className="blog-buttons">
            <button onClick={() => handleEditClick(blog)} className="edit-button">Edit</button>
            <DeleteBlog blogId={blog.id} onDelete={() => handleDeleteClick(blog.id)} className="delete-button"/>
          </div>
        </div>
      ))
      )}

    </div>
  )
}

export default DisplayBlogList;