import PostList from './PostList'
import useFetch from "./useFetch";

const Donor = () => {
  const { error, isPending, data: donations } = useFetch('http://localhost:4000/donationsOrg')

  return (
    <div className="donor bg-gray-100 min-h-screen flex flex-col items-center justify-center pt-4">
      <h2 className="text-4xl font-bold mb-5">All Post Categories</h2>
      { error && <div className="text-red-500">{ error }</div> }
        {isPending &&
            <div className="flex justify-center items-center h-screen">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green"/>
            </div>
        }
      { donations && <PostList donations={donations} /> }
    </div>
  );
}

export default Donor;