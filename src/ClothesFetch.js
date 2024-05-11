import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const ClothesFetch = () => {
    //custom hook, check useFetch.js
    const {data : clothes, isPending, error} = useFetch('http://localhost:4000/clothes');

  
  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        {clothes && <FilterSideBar 
                    results = {clothes}
                    title='Clothes Donation Posts'
                    type = 'ViewClothes'
                    />}
    </div>
  );
}
 
export default ClothesFetch;