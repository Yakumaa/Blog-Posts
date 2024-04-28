import {useState} from 'react'
import axios from 'axios'
import '../CreateBlog.css'

const CreateBlog = ({ addBlogToList, onCancel }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const blogObject = {
      title: title,
      content: content
    }
    const csrftoken = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)')?.pop();
    axios.post('/api/blog-create/', blogObject, {
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Blog created successfully', response.data)
      addBlogToList(response.data)
      onCancel()
      setTitle('')
      setContent('')
    })
    .catch(error => {
      console.error('Error creating blog: ', error)
    })
  }

  return (
    <div className="create-blog-form">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} method="post">
        <div>
          Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <br />
        <div>
          Content: <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <br />
        <button type="submit">Create Blog</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>

  )
}

export default CreateBlog;