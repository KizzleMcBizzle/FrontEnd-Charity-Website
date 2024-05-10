import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const Blood = () => {

const { error, isPending, data: bloods } = useFetch('http://localhost:4000/blood')

    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
        { bloods && <FilterSideBar
                      results={bloods}
                      title="Blood Donation Requests"
                      type="bloodDonations" /> }
      </div>
    );
}

export default Blood;