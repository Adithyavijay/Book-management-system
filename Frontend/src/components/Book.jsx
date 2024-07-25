

const Book = ({item}) => {
  return (
    <div><div className="w-full  md:h-[600px] bg-gradient-to-b from-[#FFF4BF] to-[#BFF6E6] rounded-2xl shadow-xl mb-4 flex flex-col justify-between">
    <div>
     
        <div className="h-[190px] md:h-[300px] w-full object-cover  bg-white rounded-t-2xl relative ">
          <img
            className=" w-full h-full  rounded-t-2xl object-cover"
            src={'http://localhost:3000'+ item.coverImage.split('Backend')[1]}
            alt="null"
          />
          <div className="absolute bg-red-500 px-2 py-1 rounded-2xl text-white text-xs font-medium  font-poppins right-2 top-2">
            
          </div>
        </div>
  
      <div className=" p-2">
        <div className="font-semibold font-poppins text-[23px] text-green-800 text-center ">
         {item.name}
        </div>
        
        <div className="font-bold text-md text-black text-center leading-none font-poppins p-1">
         AUTHOR :   {item.author}
        </div>
        <div className="font-medium text-md text-black text-center leading-none font-poppins pt-1">
        Published Year :   {new Date(item.publishedYear).toDateString()}
        </div>
        </div>
        <div className="font-medium text-md text-black text-center leading-none font-poppins pb-1">
          {item.description}
        </div>
        <div className="font-medium text-md text-black text-center leading-none font-poppins p-1">
        Language :   {item.language}
        </div>
        <div className="font-medium text-md text-black text-center leading-none font-poppins p-1">
        Price  :  ₹  {item.price}
        </div>
        </div>
     
     
        </div> 
        </div>
        
  )
}

export default Book