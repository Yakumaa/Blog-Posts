import {useState} from 'react'
import axios from 'axios'

const CreateBlog = () => {
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newTitle,
      content: newContent
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
    })
    .catch(error => {
      console.error('Error creating blog: ', error)
    })
  }


  return (
    <>
    <h2>Create a New Blog Post</h2>
    <form onSubmit={handleSubmit} method="post">
      <div>
        Title: <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </div>
      <br />
      <div>
        Content: <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
      </div>
      <br />
      <button type="submit">Create Blog</button>
    </form>
    </>
  )
}

export default CreateBlog;