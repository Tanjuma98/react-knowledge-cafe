import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleAddToRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleAddToRead={handleAddToRead}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handleAddToRead: PropTypes.func.isRequired,
}
export default Blogs;