import axios from "axios";

const DeleteBlog = ({ blogId, onDelete }) => {
  const handleDelete = () => {
    const csrftoken = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)')?.pop();
    axios.delete(`/api/blog/${blogId}/delete/`, {
      headers: {
        'X-CSRFToken': csrftoken,
      },
    })
    .then(response => {
      console.log('Blog deleted successfully', response.data)
      onDelete()
    })
    .catch(error => {
      console.error('Error deleting blog: ', error)
    })
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}

export default DeleteBlog;