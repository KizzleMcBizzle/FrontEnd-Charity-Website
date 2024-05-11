import useFetch from "./useFetch";
import FilterSideBar from "./FilterSideBar";

const MedSupp = () => {
const { error, isPending, data: medSupps } = useFetch('http://localhost:4000/medicalSupp')

    return (
      <div className="home">
        {error && <div className="text-red-500">{error}</div>}
          {isPending &&
              <div className="flex justify-center items-center h-screen">
                  <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
              </div>
          }
        { medSupps && <FilterSideBar
                      results={medSupps}
                      title="Medical Supplies"
                      type="medSupplies" /> }
      </div>
    );
  }

  export default MedSupp;