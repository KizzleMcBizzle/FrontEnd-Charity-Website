import DonationList from "./DonationList";
import useFetch from "./useFetch";

const Donor = () => {
  const { error, isPending, data: donations } = useFetch('http://localhost:4000/donations')

  return (
    <div className="donor">
      <h1>All Donations</h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { donations && <DonationList donations={donations} /> }
    </div>
  );
}
 
export default Donor;