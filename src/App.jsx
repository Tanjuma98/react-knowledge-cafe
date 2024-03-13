import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmarks = bookmark => {
    setBookmarks([...bookmarks, bookmark])
  }
  const handleAddToRead = (time, id) => {
    setReadingTime(readingTime + time);
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(newBookmarks);
    // console.log(newBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex gap-6 max-w-6xl mx-auto mt-6'>
        <Blogs handleBookmarks={handleBookmarks} handleAddToRead={handleAddToRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
