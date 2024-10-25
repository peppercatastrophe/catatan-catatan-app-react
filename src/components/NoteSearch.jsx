import { useState } from 'react';

const NoteSearch = () => {
  const [keyword, setKeyword] = useState('');
  return (
    <form action="{handleSubmit}">
      <input
        type="text" 
        placeholder="Search by keyword" 
        value={keyword} 
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default NoteSearch;