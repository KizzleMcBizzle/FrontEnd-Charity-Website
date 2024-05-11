import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = ({user, url, onPasswordChange}) => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(oldPassword !== user.password){
            setError(null);
            setSuccess(null);
            setError('Old password is not correct'); 
            return;
        }

        if (newPassword !== confirmPassword) {
            setError(null);
            setSuccess(null); 
            setError('Passwords do not match');
            
            return;
        }

        

       
        await fetch('http://localhost:4000/' + url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...user, password: newPassword }),
            }).then(()=>{
                setError(null);
                setTimeout (() => {setSuccess('Password changed successfully!');navigate(-1);}
                , 500);
                
                
                //onPasswordChange()
            })
            .catch(() =>{
                setSuccess(null);
                setError('An error occurred while changing the password');
            
        })
    };


    return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="change-password">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Change your password
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="oldPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Old Password
                    </label>
                    <div className="mt-2">
                        <input
                            type="password"
                            id="oldPassword"
                            name="oldPassword"
                            placeholder="Enter your old password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        New Password
                    </label>
                    <div className="mt-2">
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            placeholder="Enter your new password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm New Password
                    </label>
                    <div className="mt-2">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your new password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>

                {error && <p className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</p>}
                {success && <p className=" bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">{success}</p>}

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-custom-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    </div>
);
}

export default ChangePassword;
