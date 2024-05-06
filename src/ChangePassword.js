import { useState } from 'react';

const ChangePassword = ({user, url}) => {  
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

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
                setSuccess('Password changed successfully!');
                 
            })
            .catch(() =>{
                setSuccess(null);
                setError('An error occurred while changing the password');
            
        })
    };


    return (
        <div className="bg-inherit min-h-screen flex items-center">
            <div className="w-full">
                <h2 className="text-center text-custom-green font-bold text-2xl uppercase mb-10">Fill out our form</h2>
                <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="oldPassword" className="block mb-2 font-bold text-gray-600">Old Password</label>
                            <input
                                type="password"
                                id="oldPassword"
                                name="oldPassword"
                                placeholder="Enter your old password"
                                className="border border-gray-300 shadow p-3 w-full rounded mb-"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="newPassword" className="block mb-2 font-bold text-gray-600">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                placeholder="Enter your new password"
                                className="border border-gray-300 shadow p-3 w-full rounded mb-"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="confirmPassword" className="block mb-2 font-bold text-gray-600">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your new password"
                                className="border border-gray-300 shadow p-3 w-full rounded mb-"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green">{success}</p>}
                        <button className="block w-full bg-custom-green text-white font-bold p-4 rounded-lg">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
