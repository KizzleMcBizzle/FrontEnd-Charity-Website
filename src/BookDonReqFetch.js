import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";



const BookDonReqFetch = () => {
    
  const {data : books, isPending, error} = useFetch('http://localhost:4000/books');
    
   
  return (
    <div className="home">
        {error && <div>{ error }</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        {books && <FilterSideBar 
                  results = {books}
                  title='Book Donation Requests'
                  type = 'BookDonReq'
                 />}
        
    </div>
  );
}
 
export default BookDonReqFetch;