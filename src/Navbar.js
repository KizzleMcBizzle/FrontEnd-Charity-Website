import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, HeartIcon, DocumentReportIcon, UserIcon } from '@heroicons/react/24/outline'
import {BellIcon, XMarkIcon} from "@heroicons/react/16/solid";
import logo from './Logo.png'
import {Link, useNavigate} from "react-router-dom";

const navigation = {
    categories: [
        
        {
            id: 'Donate',
            name: 'Donate',
            featured: [
            ],
            sections: [
                {
                    id: 'Medical',
                    name: 'Medical',
                    items: [
                        { name: 'Medication Requests', href: '/donor/medication' },
                        { name: 'Blood Donations', href: '/donor/blood' },
                        { name: 'Medical Supplies', href: '/donor/medSupp' },
                    ],
                },
                {
                    id: 'Pro-Bono',
                    name: 'Pro-Bono',
                    items: [
                        { name: 'Teaching Posts', href: '/donor/teaching' },
                        { name: 'Medical cases', href: '/donor/blood' },
                    
                    ],
                },
                {
                    id: 'Enternaimnet',
                    name: 'Entertainment',
                    items: [
                        { name: 'Toys', href: '/donor/toys' },
                        
                        
                    ],
                },
                {
                    id: 'School Supplies',
                    name: 'School Supplies',
                    items: [
                        { name: 'Stationary Items', href: '/donor/schoolStationary' },
                        { name: 'Books', href: '/donor/books' },
                    ],
                },
                {
                    id: 'Essentials',
                    name: 'Essentials',
                    items: [
                        { name: 'Food', href: '/donor/food' },
                        { name: 'Clothes', href: '/donor/clothes'}
                        
                    ],
                },
            ],
        },
        
    ],
    pages: [
        { name: 'Home', href: '/donor/donor' },
        { name: 'About Us', href: '/donor' },
        { name: 'Contact', href: '#' },
        
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-custom-green text-custom-green' : 'border-transparent text-gray-900',
                                                            'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                                <div className="grid grid-cols-2 gap-x-4">
                                                    {category.featured.map((item) => (
                                                        <div key={item.name} className="group relative text-sm">
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                                            </div>
                                                            <button onClick={() =>navigate(item.href)} className="mt-6 block font-medium text-gray-900">
                                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                {item.name}
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                                {category.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                            {section.name}
                                                        </p>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                            className="mt-6 flex flex-col space-y-6"
                                                        >
                                                            {section.items.map((item) => (
                                                                <li key={item.name} className="flow-root">
                                                                    <button onClick={() =>navigate(item.href)} className="-m-2 block p-2 text-gray-500">
                                                                        {item.name}
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <button onClick={() =>navigate(page.href)} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-custom-green px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Bringing Hope, Building Unity: Together We Can Make a Difference!
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/donor/">
                                    <span className="sr-only">HopeUnity</span>
                                    <img
                                        className="h-10 w-auto"
                                        src={logo}
                                        alt="HopeUnity Logo"
                                    />
                                </Link>
                            </div>


                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? 'border-custom-green text-custom-green'
                                                                    : 'border-transparent text-gray-700 hover:text-custom-green',
                                                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                            <div className="relative bg-white">
                                                                <div className="mx-auto max-w-7xl px-8">
                                                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                            {category.featured.map((item) => (
                                                                                <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                        <img
                                                                                            src={item.imageSrc}
                                                                                            alt={item.imageAlt}
                                                                                            className="object-cover object-center"
                                                                                        />
                                                                                    </div>
                                                                                    <button onClick={() =>navigate(item.href) } className="mt-6 block font-medium text-gray-900">
                                                                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                        {item.name}
                                                                                    </button>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul
                                                                                        role="list"
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li key={item.name} className="flex">
                                                                                                <button onClick={() =>navigate(item.href)} className="hover:text-gray-800">
                                                                                                    {item.name}
                                                                                                </button>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <button
                                            key={page.name}
                                            onClick={() =>navigate(page.href)}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-custom-green"
                                        >
                                            {page.name}
                                        </button>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">


                                {/* Search */}

                                {/* Notifications */}
                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button className="rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom-green focus:ring-white">
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-8 w-8 rounded-full" aria-hidden="true" />
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Popover.Panel className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Link to="/admin/req/donors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Donor Requests</Link>
                                                        <Link to="/admin/req/orgs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Organization Requests</Link>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                {/* Profile dropdown */}
                                <Popover className="relative ml-4">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button className="rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom-green focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <UserIcon className="h-8 w-8 rounded-full" aria-hidden="true" />
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Popover.Panel className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <button onClick={() =>navigate("/admin/profile")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</button>
                                                        <button onClick={() =>navigate("/")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</button>
                                                        <button onClick={() =>navigate("/")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>



                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
