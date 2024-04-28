import { useState } from "react"
import axios from "axios"

const EditBlog = ({ blog, onCancel, onUpdate }) => {
  const [title, setTitle] = useState(blog.title)
  const [content, setContent] = useState(blog.content)

  const handleSubmit = (event) => {
    event.preventDefault()
    const csrftoken = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)')?.pop();
    axios.put(`/api/blog/${blog.id}/update/`, { title, content }, {
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log('Blog updated successfully', response.data)
      onUpdate(response.data)
      onCancel()
    })
    .catch(error => {
      console.error('Error updating blog: ', error)
    })
  }

  return(
    <>
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <br />
        <div>
          Content: <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <br />
        <button type="submit">Update Blog</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </>
  )
}

export default EditBlog;