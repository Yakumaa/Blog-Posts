import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import DisplayBlogList from './components/DisplayBlogList';
import ContactPage from './components/ContactPage';
// import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<DisplayBlogList />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
