
import { useRef ,useState} from "react";

// eslint-disable-next-line react/prop-types
const EditForm = ({onClose,book}) => {  
    console.log(book)
    const modalRef=useRef();
    const [formData, setFormData] = useState({
        name: book?.name ,
        description: book?.description,
        price: book?.price,
        author: book?.author,
        language: book?.language,
        publishedYear:  book?.publishedYear,
        coverImage: ""
    });
    const closeModal=(e)=>{
    if(modalRef.current===e.target){
        onClose();
    }
    } 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }; 
    const handleChangeFile = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
            // Validate the form data
           {
                // Form data is valid, proceed with submission
                console.log("Form data is valid"); 
                const formDataObj = new FormData() 
                formDataObj.append('name', formData.name ) ;
                formDataObj.append('description', formData.description ) ;
                formDataObj.append('price', formData.price ) ;
                formDataObj.append('author', formData.author ) ;
                formDataObj.append('publishedYear', formData.publishedYear ) ;
                formDataObj.append('coverImage', formData.coverImage ) ;
                formDataObj.append('language', formData.language ) ;
                console.log(formDataObj) 
                
        const fetchBooks = async () => {  
            // eslint-disable-next-line react/prop-types
            const res = await fetch(`/api/books/editBook/${book._id}`,{
                method: 'PUT',
                body: formDataObj
            });if(res.ok){     

                const data = await res.json();
                console.log(data);
                alert("Book added successfully");
             } else 
                        {

                alert("Error in adding book");
                        }
            
            };
        fetchBooks()    
               
            } 
              
        onClose();
    }; 
 

  return (
    <div>

<div ref={modalRef} onClick= {closeModal} className="text-white z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
        <div className='flex flex-col'>
            <button onClick={onClose} className='place-self-end'>X</button>
            <div className="border border-blue-100 py-8 px-10  bg-contain bg-[#3A2D3F] rounded-xl flex flex-col gap-5 ">
            
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
             <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                // eslint-disable-next-line react/prop-types
                placeholder={book?.name}
                className="border border-blue-100 p-2 rounded-md text-black"
               
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                // eslint-disable-next-line react/prop-types
                placeholder={book?.description}
                className="border border-blue-100 p-2 rounded-md text-black"
                
            />
            <input
                type="number"
                name="price"
                value={formData?.price}
                onChange={handleChange}
                // eslint-disable-next-line react/prop-types
                placeholder={book?.price}
                className="border border-blue-100 p-2 rounded-md text-black"
               
            />
            <select
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="border border-blue-100 p-2 rounded-md text-black"
              
            >
                <option value="">Select Author</option>
                <option value="Leo tolstoy">Leo tolstoy</option>
                <option value="kunjan nambiar">kunjan nambiar</option>
                <option value="ezhuthachan">ezhuthachan</option>
                
            </select>
            <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="border border-blue-100 p-2 rounded-md text-black"
             
            >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                
            </select>
            <input
                type="date"
                name="publishedYear"
                value={formData.publishedYear}
                onChange={handleChange}
                // eslint-disable-next-line react/prop-types
                placeholder={book?.publishedYear}
                className="border border-blue-100 p-2 rounded-md text-black"
                
            />
            <input
                type="file"
                name="coverImage"
                onChange={handleChangeFile}
                placeholder="Cover Image URL"
                className= "p-2 rounded-md text-white"
               
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
                Submit
            </button>
            </form>
        </div>
            </div>
    
        </div>
    
    </div>


)
}

export default EditForm