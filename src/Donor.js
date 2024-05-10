import DonationList from "./DonationList";
import useFetch from "./useFetch";

const Donor = () => {
  const { error, isPending, data: donations } = useFetch('http://localhost:4000/donations')

  return (
    <div className="donor bg-gray-100 min-h-screen flex flex-col items-center justify-center pt-4">
      <h1 className="text-4xl font-bold mb-5">All Donations</h1>
      { error && <div className="text-red-500">{ error }</div> }
      { isPending && <div className="text-blue-500">Loading...</div> }
      { donations && <DonationList donations={donations} /> }
    </div>
  );
}

export default Donor;