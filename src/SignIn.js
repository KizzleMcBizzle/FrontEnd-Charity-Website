import React from 'react'
import Logo from './Logo.png'
import './index.css'
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { toast } from "react-toastify";


export default function Example() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

   const navigate = useNavigate();
   const auth = useAuth();

   const [input, setInput] = useState({
    email: "",
    password: "",
   });

    const handleSubmitEvent = (e) => {
        console.log(input);
        e.preventDefault();
        if (input.email !== "" && input.password !== "") {
            try {
            auth.loginAction(input);
            } catch (err) {
                console.error(err);
                alert("Invalid credentials");
                return;
            }
            
          } else{
            alert("pleae provide a valid input");
          }
    };

    

    const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id="sign-in">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src={Logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmitEvent}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={handleInput}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-custom-green hover:text-green-600">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={handleInput}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-custom-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <button type="button" onClick={openModal}
                                className="font-semibold leading-6 text-custom-green hover:text-green-600">
                            Register Here!
                        </button>
                    </p>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="fixed inset-0 z-10 overflow-y-auto"
                            onClose={closeModal}
                        >
                            <div className="min-h-screen px-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Overlay className="fixed inset-0" />
                                </Transition.Child>

                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span
                                    className="inline-block h-screen align-middle"
                                    aria-hidden="true"
                                >
                                    &#8203;
                                </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Register as
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <Link to="/donor-register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                As a Donor
                                            </Link>
                                            <Link to="/org-register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                As an Organization
                                            </Link>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </>
    )
}
