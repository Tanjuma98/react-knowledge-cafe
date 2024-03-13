import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {cover, title, author, author_img, reading_time, hashtags, posted_date, id} = blog;
    return (
        <div>
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;