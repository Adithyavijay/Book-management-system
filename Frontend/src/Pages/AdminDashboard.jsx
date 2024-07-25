import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"  
import BookForm from "../components/BookForm"; 
import EditForm from "../components/EditForm";
 

const AdminDashboard = () => {  
    
   if(localStorage.getItem("admin")===null){  
        window.location.href="/login"
   }
    const [showForm, setShowForm] = useState(false);
    const [editForm,setEditForm] = useState(false);
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState("");
    useEffect(() => {    
        const fetchBooks = async () => {  
            const res = await fetch("/api/books/getBooks");
            const data = await res.json();
            
            setBooks(data); 


        };
        fetchBooks();
        

    }, []); 
    const deleteBook = async (id) => { 
    try{
        const res = await fetch(`/api/books/deleteBook/${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setBooks(books.filter((book) => book._id !== id));
        }
    }catch(error){
        console.log(error.message)
    
    } 
}
 
  return (
    <div >
        <Navbar/>
       <>
       <div className="mt-7 lg:ms-28">
      <div className="flex justify-end pe-8 md:pe-16">
        <button onClick={()=>setShowForm(true)}
          className="border py-1 px-2 md:py-2 md:px-4 hover:bg-blue-700 bg-blue-600 font-semibold text-white text-sm rounded mb-2 mr-20"
          
        >
          Add new Book
        </button>
      </div>
      <div className="relative overflow-x-auto sm:rounded-lg md:flex justify-center">
        <table className="w-4/5 px-3 text-xs md:text-sm shadow-md text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase ">
             
             
             <tr>
              <th scope="col" className="px-6 bg-gray-50   py-3">
               Cover image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 bg-gray-50 py-3   ">
               description
              </th>
              <th scope="col" className="px-6  py-3">
                Author
              </th>
              <th scope="col" className="px-6 bg-gray-50  py-3">
               language
              </th>
              <th scope="col" className="px-6 bg-gray-50  py-3">
                Published Year
              </th>
              <th scope="col" className="px-6 bg-gray-50  py-3">
                Price
              </th>
              <th scope="col" className="px-6 bg-gray-50  py-3">
                Action
              </th>

            </tr>
          </thead>
          <tbody>
          {books &&
                books.map((item) => (
                <tr className="border-b border-gray-200 " key={item._id}>
                  <th scope="row" className="px-6 py-4 bg-gray-50">
                    <img
                      className="md:h-20"
                      src={'http://localhost:3000'+ item.coverImage.split('Backend')[1]}
                      alt={item.name}
                    />
                  </th>
                  <td className="px-6 py-4 ">{item.name}</td>
                  <td className="px-6 py-4 bg-gray-50 ">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 ">
                    {item.author}
                  </td> 
                  <td className="px-6 py-4 ">
                    {item.language}
                  </td> 
                  <td className="px-6 py-4 ">
                    {new Date(item.publishedYear).toDateString()}
                  </td> 
                  <td className="px-6 py-4 ">
                    {item.price}
                  </td> 
                  <td className="px-6 py-4 bg-gray-50 ">
                    <button onClick={()=>{ setBook(item);  setEditForm(true) } }
                      className="underline text-blue-700 hover:text-white hover:bg-blue-700 hover:no-underline p-2 rounded-full"
                      
                    >
                      Edit
                    </button>

                    <button onClick={()=>deleteBook(item._id)}
                      className="underline text-red-700 hover:bg-red-500 hover:no-underline hover:text-white p-2 rounded-full"
                    
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      
    </div>
       
       
       </> 

         {showForm && <BookForm onClose={()=>setShowForm(false)}/>} 
        {editForm && <EditForm onClose={()=>setEditForm(false)}  book={book}/>}  

    </div>
  )
}

export default AdminDashboard