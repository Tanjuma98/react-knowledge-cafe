import PropTypes from 'prop-types';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 space-y-5'>
            <div className="w-full rounded-md bg-purple-300 border border-purple-600 p-4">
                <h2 className='text-2xl font-bold'>Reading Time: {readingTime} min</h2>
            </div>
            <div className='bg-slate-200 p-4 w-full rounded-md'>
            <h2 className="text-2xl font-bold mb-5">Bookmark blogs: {bookmarks.length}</h2>
            <div className="space-y-2">
                {
                    bookmarks.map((bookmark, idx) => <p className='bg-white p-2 text-center text-lg font-semibold' key={idx}>{bookmark.title}</p>)
                }
            </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;