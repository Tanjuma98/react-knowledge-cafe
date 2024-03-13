import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog, handleBookmarks, handleAddToRead}) => {
    const {cover, title, author, author_img, reading_time, hashtags, posted_date, id} = blog;
    return (
        <div className='space-y-5 mb-16'>
            <img className='w-full' src={cover} alt={`cover of title: ${title}`} />
            <div className="flex justify-between items-center">
                <div className='flex gap-6 items-center'>
                    <img className='w-16 h-16 object-cover rounded-full' src={author_img} alt="" />
                    <div className='text-slate-800'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='text-gray-500 font-medium flex items-center gap-1'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => {handleBookmarks(blog)}} className='text-2xl'><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <div className='flex gap-4 text-gray-500 font-medium'>
                {/* <span>{hashtags[0]}</span>
                <span>{hashtags[1]}</span>
                <span>{hashtags[2]}</span> */}
                {
                    hashtags.map((hash, id) => <span key={id}><a href="">{hash}</a></span>)
                }
            </div>
            <button className='text-purple-600 text-xl underline font-semibold' onClick={() => {handleAddToRead(reading_time, id)}}>Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleAddToRead: PropTypes.func.isRequired,
}
export default Blog;