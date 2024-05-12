import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Bars3Icon, MagnifyingGlassIcon, HeartIcon, DocumentReportIcon } from '@heroicons/react/24/outline'
import Home from './Home'
import OrgReqFetch from './OrgReqFetch'
import { Link } from 'react-router-dom';
import OrgUseReq from './OrgUseReq'
import DonUseReq from './DonUseReq'
import {XCircleIcon} from "@heroicons/react/16/solid";
import styled from 'styled-components';
import { useEffect } from 'react'
import ViewOrgs from './ViewOrgs'
import ViewDonors from './ViewDonors'
import BloodList from './BloodList';    
import ToyDonReq from './ToyDonReq'
import FoodDonReq from './FoodDonReq'
import BookDonReq from './BookDonReq'

import MedicationList from './MedicationList'
import MedCaseList from './MedCaseList'
import TeachingList from './TeachingList'
import ClothesDonationList from './ClothesDonationList'
import SchoolStationaryList from './SchoolStationaryList'
import MedDeviceList from './MedDeviceList'
import MedEquipList from './MedEquipList'
import OrgViewPosts from './OrgViewPosts';




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({title , results , type}) {

    
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const [searchItem, setSearchItem] = useState('');
    const [filteredResults, setFilteredResults] = useState(results);

    const [selectedFilters, setSelectedFilters] = useState([]);

    let placeholder;
    let page = <></>;
    let subCategories =[];
    let filters = [];

   
    useEffect(() => {
        filterItems();
      }, [selectedFilters]);

  
    if (Array.isArray(results) && results.length > 0) {
        
        
        /*check type*/
      if (type === 'adminReqOrgs' || type ==='adminViewOrgs') {
        
        if(type==='adminReqOrgs'){
            page =<OrgUseReq
                   orgs ={filteredResults}
                />;
        }else if(type ==='adminViewOrgs'){
            page = <ViewOrgs 
                    orgs = {filteredResults}/>

        }

        placeholder = "Serach by organization"
        /*fetches all subcategories from the result*/
        subCategories = Array.from(new Set(results.map(item => item.organizationType))).map(role => ({ name: role }));



        const areaOptions = Array.from(new Set(results.map(item => item.area))).map(area => ({ value: area, checked: false }));
        const governorateOptions = Array.from(new Set(results.map(item => item.governorate))).map(governorate => ({ value: governorate, checked: false}));
        
        filters = [
                {
                    id: 'area',
                    name: 'Area',
                    options: areaOptions
                },
                {
                    id: 'governorate',
                    name: 'Governorate',
                    options: governorateOptions
                }
        ]
      } 
      else if (type === 'donorApplicationProBono' || type==='adminViewDonors') {
        placeholder = "Serach by donor name"
           if(type === 'donorApplicationProBono'){
                page = <DonUseReq donors = {filteredResults}/>;
            }else if(type==='adminViewDonors'){
                page = <ViewDonors donors = {filteredResults}/>
            }


            subCategories = Array.from(new Set(results.map(item => item.role))).map(role => ({ name: role }));    
      }
      else if(type === "medicationReq" ){
        placeholder = "Serach by medication"
        page =<MedicationList medications={filteredResults}></MedicationList>

        const diseaseOptions = Array.from(new Set(results.map(item => item.disease))).map(dis => ({ value: dis, checked: false }));
        
        filters = [
                {
                    id: 'disease',
                    name: 'Disease',
                    options: diseaseOptions
                }
        ]
      }
      else if(type === "medicalCase" ){
        placeholder = "Serach by patient name"
        page =<MedCaseList medCases={filteredResults}></MedCaseList>

        const specialityOptions = Array.from(new Set(results.map(item => item.medicalSpecialty))).map(speciality => ({ value: speciality, checked: false }));
        const organizationOptions = Array.from(new Set(results.map(item => item.organizationName))).map(organization => ({ value: organization, checked: false}));
        const areaOptions = Array.from(new Set(results.map(item => item.area))).map(area => ({ value: area, checked: false}));
        const governorateOptions = Array.from(new Set(results.map(item => item.governorate))).map(governorate => ({ value: governorate, checked: false}));
        
        filters = [
                {
                    id: 'area',
                    name: 'Area',
                    options: areaOptions
                },
                {
                    id: 'governorate',
                    name: 'Governorate',
                    options: governorateOptions
                },
                {
                    id: 'organizationName',
                    name: 'Organization Name',
                    options: organizationOptions
                },
                {
                    id: 'medicalSpecialty',
                    name: 'Medical Speciality',
                    options: specialityOptions
                },
        ]
      }
      else if(type === "bloodDonations" ){
        placeholder = "Serach by blood type"
        page =<BloodList bloods={filteredResults}></BloodList>

        const areaOptions = Array.from(new Set(results.map(item => item.hospital_area))).map(area => ({ value: area, checked: false }));
        const governorateOptions = Array.from(new Set(results.map(item => item.governorate))).map(governorate => ({ value: governorate, checked: false}));
        const nameOptions = Array.from(new Set(results.map(item => item.hospital_name))).map(name => ({ value: name, checked: false}));
        
        filters = [
                {
                    id: 'area',
                    name: 'Area',
                    options: areaOptions
                },
                {
                    id: 'governorate',
                    name: 'Governorate',
                    options: governorateOptions
                },
                {
                    id: 'name',
                    name: 'Hospital Name',
                    options: nameOptions
                }
        ]
      }
      else if(type === "teachingPosts" ){
        placeholder = "Serach by title"
        page =<TeachingList teachings={filteredResults}></TeachingList>

        const subjectOptions = Array.from(new Set(results.map(item => item.subjects))).map(subjects => ({ value: subjects, checked: false }));
        const areaOptions = Array.from(new Set(results.map(item => item.area))).map(area => ({ value: area, checked: false }));
        const governorateOptions = Array.from(new Set(results.map(item => item.governorate))).map(governorate => ({ value: governorate, checked: false }));
        
        filters = [
                {
                    id: 'subjects',
                    name: 'Subjects',
                    options: subjectOptions
                },
                {
                    id: 'area',
                    name: 'Area',
                    options: areaOptions
                },
                {
                    id: 'governorate',
                    name: 'Governorate',
                    options: governorateOptions
                }
        ]
    }
      else if(type==='ToyDonReq'){
        placeholder = "Serach by toy name"
        page = <ToyDonReq
               toys ={filteredResults}
              />;
    

    /*fetches all subcategories from the result*/
    
    const toyName = Array.from(new Set(results.map(item => item.name))).map(name => ({ value: name, checked: false }));
    const age_range = Array.from(new Set(results.map(item => item.age_range))).map(age_range=> ({ value: age_range, checked: false}));
    const gender = Array.from(new Set(results.map(item => item.gender))).map(gender => ({ value: gender, checked: false}));
    const category = Array.from(new Set(results.map(item => item.category))).map(category => ({ value: category, checked: false}));
    
    filters = [
            {
                id: 'name',
                name: 'Toy Name',
                options: toyName
            },
            {
                id: 'age_range',
                name: 'Age Rating',
                options: age_range
            },
            {
                id: 'gender',
                name: 'Gender',
                options: gender
            },
            {
                id: 'category',
                name: 'Category',
                options: category
            }

    ]

    } else if(type==='FoodDonReq'){
        placeholder = "Serach by food name"
        page = <FoodDonReq
               food ={filteredResults}
              />;
    

    /*fetches all subcategories from the result*/
    
   // const foodName = Array.from(new Set(results.map(item => item.name))).map(name => ({ value: name, checked: false }));
    const foodType = Array.from(new Set(results.map(item => item.type))).map(type=> ({ value: type, checked: false}));
    
    
    filters = [
         /*   {
                id: 'name',
                name: 'Food Name',
                options: foodName
            },*/
            {
                id: 'type',
                name: 'Food Type',
                options: foodType
            }
        ]
    }else if(type ==='BookDonReq'){
        placeholder = "Serach by book name"
        page = <BookDonReq
                books= {filteredResults}/>

    }else if(type ==='medDevice'){
        placeholder = "Serach by device name"
        page = <MedDeviceList
                medDevices= {filteredResults}/>

    } 
    else if(type ==='medEquipment'){
        placeholder = "Serach by equipment name"
        page = <MedEquipList
                medEquips= {filteredResults}/>

    } 
    else if(type === 'ViewClothes'){
        placeholder = "Serach by clothes type"
        page = <ClothesDonationList clothes = {filteredResults} />

        const age = Array.from(new Set(results.map(item => item.age))).map(age => ({ value: age, checked: false }));
        const gender = Array.from(new Set(results.map(item => item.gender))).map(gender=> ({ value: gender, checked: false}));
        const season = Array.from(new Set(results.map(item => item.season))).map(season => ({ value: season, checked: false}));

        subCategories = Array.from(new Set(results.map(item => item.type))).map(type => ({ name: type }));
        
        filters = [
            {
                id: 'age',
                name: 'Age',
                options: age
            },
            {
                id: 'gender',
                name: 'Gender',
                options: gender
            },
            {
                id: 'season',
                name: 'Season',
                options: season
            }

    ]



    }
    else if(type === 'ViewSchoolStationary'){
        placeholder = "Serach by name"
        page = <SchoolStationaryList clothes={filteredResults}/>

    }else if(type === "OrgViewPosts"){
        placeholder = "Search by post name"
        page = <OrgViewPosts posts = {filteredResults}/>

        subCategories = Array.from(new Set(results.map(item => item.Fulfilled))).map(status => ({ name: status }));
    }

}

     const filterByCategory = (categoryName) => {
        
        let filteredItems = [];

        /*check type*/
        if(type === 'adminReqOrgs' || type ==='adminViewOrgs'){
            filteredItems = results.filter(result => result.organizationType === categoryName);
        }
        else if(type === 'donorApplicationProBono' || type==='adminViewDonors'){
            filteredItems = results.filter(result => result.role.toLowerCase() === categoryName.toLowerCase());
        }
        else if(type==='ViewClothes'){
            filteredItems = results.filter(result => result.type.toLowerCase() === categoryName.toLowerCase());
        }else if(type === "OrgViewPosts"){
            filteredItems = results.filter(result => result.Fulfilled === categoryName);
        }


        setFilteredResults(filteredItems);
    };

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value; // Convert search term to lowercase for case-insensitive search
        setSearchItem(searchTerm);
        let filteredItems;
        
        if(type ==="bloodDonations"){
             filteredItems = results.filter((result) =>
                result.blood_type.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        else{
         filteredItems = results.filter((result) =>
            result.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    setFilteredResults(filteredItems);
            
    }

    const removeFilter = () => {
        setFilteredResults(results);
    }



    const toggleSearch = () => { // Add this function
        setIsSearchOpen(!isSearchOpen);
    };

    const handleCheckboxChange = (selectedCategory) =>{
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
          } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
          }
        
    };

    const filterItems = () => {
        /*Add If statement for each type! check type*/
        if(type === 'adminReqOrgs' || type ==='adminViewOrgs'){
            if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = results.filter((item) => item.area === selectedCategory || item.governorate === selectedCategory);
                return temp;
            }); 
            let merged = [].concat.apply([], tempItems);
            let uniqueItems = merged.filter((item, index) => merged.findIndex((t) => t.id === item.id) === index);
            setFilteredResults(uniqueItems);
            } else {
            setFilteredResults([...results]);
            }
        }
        else if(type ==="bloodDonations"){
            if (selectedFilters.length > 0) {
                let tempItems = selectedFilters.map((selectedCategory) => {
                    let temp = results.filter((item) => item.hospital_area === selectedCategory || item.governorate === selectedCategory || item.hospital_name === selectedCategory);
                    return temp;
                });
                let merged = [].concat.apply([], tempItems);
                let uniqueItems = merged.filter((item, index) => merged.findIndex((t) => t.id === item.id) === index);
                setFilteredResults(uniqueItems);
                } else {
                setFilteredResults([...results]);
                }
        }
        else if(type ==="teachingPosts"){
            if (selectedFilters.length > 0) {
                let tempItems = selectedFilters.map((selectedCategory) => {
                    let temp = results.filter((item) => item.governorate === selectedCategory || item.area === selectedCategory || item.subjects === selectedCategory);
                    return temp;
                });
                let merged = [].concat.apply([], tempItems);
                let uniqueItems = merged.filter((item, index) => merged.findIndex((t) => t.id === item.id) === index);
                setFilteredResults(uniqueItems);
                } else {
                setFilteredResults([...results]);
                }
        }
        else if(type==='ToyDonReq'){
            if (selectedFilters.length > 0) {
                let tempItems = selectedFilters.map((selectedCategory) => {
                    let temp = results.filter((item) => item.age_range === selectedCategory || item.gender === selectedCategory || item.category === selectedCategory || item.name === selectedCategory);
                    return temp;
                });
                let merged = [].concat.apply([], tempItems);
                let uniqueItems = merged.filter((item, index) => merged.findIndex((t) => t.id === item.id) === index);
                setFilteredResults(uniqueItems);
                } else {
                setFilteredResults([...results]);
                }
        }
        
        else if(type ==="medicationReq"){
            if (selectedFilters.length > 0) {
                let tempItems = selectedFilters.map((selectedCategory) => {
                    let temp = results.filter((item) => item.disease === selectedCategory);
                    return temp;
                });
                let merged = [].concat.apply([], tempItems);
                let uniqueItems = merged.filter((item, index) => merged.findIndex((t) => t.id === item.id) === index);
                 setFilteredResults(uniqueItems);
                } else {
                setFilteredResults([...results]);
                }
        }
        else if(type ==="medicalCase"){
            if (selectedFilters.length > 0) {
                let tempItems = selectedFilters.map((selectedCategory) => {
                    let temp = results.filter((item) => item.organizationName === selectedCategory || item.medicalSpecialty === selectedCategory || item.governorate === selectedCategory || item.area === selectedCategory);
                    return temp;
                });
                let merged = [].concat.apply([], tempItems);
                let uniqueItems = merged.filter((item, index) => merged.findIndex((t) => t.id === item.id) === index);
                setFilteredResults(uniqueItems);
                } else {
                setFilteredResults([...results]);
                }
        }
        else if(type==='FoodDonReq'){
            if (selectedFilters.length > 0) {
                let tempItems = selectedFilters.map((selectedCategory) => {
                    let temp = results.filter((item) => item.type === selectedCategory);
                    return temp;
                });
                let merged = [].concat.apply([], tempItems);
                let uniqueItems = merged.filter((item, index) => merged.findIndex((t) => t.id === item.id) === index);
                setFilteredResults(uniqueItems);
                } else {
                setFilteredResults([...results]);
                }
        }
        else if(type === 'ViewClothes'){
            if (selectedFilters.length > 0) {
                let tempItems = selectedFilters.map((selectedCategory) => {
                    let temp = results.filter((item) => item.age === selectedCategory || item.season === selectedCategory || item.gender === selectedCategory );
                    return temp;
                });
                let merged = [].concat.apply([], tempItems);
                let uniqueItems = merged.filter((item, index) => merged.findIndex((t) => t.id === item.id) === index);
                setFilteredResults(uniqueItems);
                } else {
                setFilteredResults([...results]);
                }
        }

        }




    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
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
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            {subCategories.map((category) => (
                                                <li key={category.name}>
                                                    <button type="button" onClick={() => filterByCategory(category.name)} className="block px-2 py-3">
                                                        {category.name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>

                                        {filters.map((section) => (
                                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                  {open ? (
                                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value} className="flex items-center">
                                                                        <input
                                                                            id={`filter-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="checkbox"
                                                                            defaultChecked={option.checked}
                                                                            onChange={()=>handleCheckboxChange(option.value)} 
                                                                             
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {option.value}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">{ title }</h1>

                        <div className="flex items-center">
                            {/* Search */}
                            <div className="flex lg:ml-6">
                                    <button className="p-2 text-gray-400 hover:text-gray-500"
                                       onClick={toggleSearch}>
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                {isSearchOpen && (
                                    <div>
                                        <input
                                            type="text"
                                            className="transition-all duration-500 ease-in-out border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-custom-green"
                                            placeholder={placeholder}
                                            value = {searchItem}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                )}
                            </div>

                            <button type="button" onClick={removeFilter} className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">Remove Filter</span>
                                <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <button type="button" onClick={() => filterByCategory(category.name)} className="block px-2 ">
                                                {category.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                              {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    defaultValue={option.value}
                                                                    type="checkbox"
                                                                    defaultChecked={option.checked}
                                                                    onChange={()=>handleCheckboxChange(option.value)} 
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-gray-600"
                                                                >
                                                                    {option.value}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                { page }
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )

}