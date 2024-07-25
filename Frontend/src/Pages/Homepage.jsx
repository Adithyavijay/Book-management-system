import { useEffect } from "react";
import { useState } from "react";
import Book from "../components/Book";

const Homepage = () => { 
    // eslint-disable-next-line no-unused-vars
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")
    const [filteredbooks, setFilteredBooks] = useState([])
    const [sortBy, setSortBy] = useState("none")

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch("/api/getAllProducts");
            const data = await res.json(); 
            console.log(data)
            
            setBooks(data); 
            setFilteredBooks(data)
        };
        fetchBooks();
     } ,[]) 
 
    const handleSearch = async () => {   
   const filterbooks= books.filter(book=>(book.name.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())|| book.language.toLowerCase().includes(search.toLowerCase()) ))
    setFilteredBooks(filterbooks)
    } 
    const handleSort = (event) => {
      setSortBy(event.target.value);
    };
  
    useEffect(() => {
      const sortedBooks = [...books].sort((a, b) => {
        if (sortBy === "priceAsc") {
          return a.price - b.price; // Sort by price ascending
        } else if (sortBy === "priceDesc") {
          return b.price - a.price; // Sort by price descending
        } else {
          return 0; // No sorting
        }
      });
      setFilteredBooks(sortedBooks);
    }, [sortBy, books]);

  return (
    <div>
        <div className="font-bold text-4xl text-center  mb-20 py-10 bg-green-600 "> Book management system </div>
        <div className="px-10"> 
       

          { books.length===0  ? <div className="text-center text-2xl mt-10">No books available</div> :    <div className="text-3xl ml-10 font-medium">
            Books available
          </div>  } 
            <div>
                <input 
                type="text"
                name="search"
                value={search}
                placeholder="Search books"
                onChange={(e) => setSearch(e.target.value)}   
                className="border border-blue-100 p-2 rounded-md text-black ml-10 mt-5"              
                
                /> 
                <button onClick={handleSearch} className="p-2 bg-green-400 ">search</button> 
                <select value={sortBy} onChange={handleSort} className="border border-gray-300 rounded-md ml-4">
            <option value="none">Sort By</option>
            <option value="priceAsc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
          </select>
                
            </div>

        <div className="grid grid-cols-2 p-2 lg:p-8 lg:grid-cols-4 gap-3 lg:gap-7 mx-auto ">
            {filteredbooks&&
              filteredbooks.map((item) => <Book item={item} key={item._id} />)}
          </div>
  
          
        </div>
    
    
    </div>
  )
}

export default Homepage