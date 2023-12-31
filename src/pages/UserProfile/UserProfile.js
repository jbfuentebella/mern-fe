import React from 'react';
import MetaTags from '../../components/MetaTags';
import Sidebar from '../../components/Sidebar';

const UserProfile = () => {
  return (
    <div>
      <MetaTags type={'UserProfile'} />
      <Sidebar />
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg'>
          <form>
            <div className='space-y-12'>
              <div>
                <div className='border-b border-gray-900/10 pb-12'>
                  <h2 className='text-base font-semibold leading-7 text-gray-900'>Profile</h2>
                  <p className='mt-1 text-sm leading-6 text-gray-600'>
                    This information will be displayed publicly so be careful what you share.
                  </p>

                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                    <div className='sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        First name
                      </label>
                      <div className='mt-2'>
                        <input
                          type='text'
                          name='first-name'
                          id='first-name'
                          autoComplete='given-name'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>

                    <div className='sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Last name
                      </label>
                      <div className='mt-2'>
                        <input
                          type='text'
                          name='last-name'
                          id='last-name'
                          autoComplete='family-name'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>

                    <div className='sm:col-span-4'>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Email address
                      </label>
                      <div className='mt-2'>
                        <input
                          id='email'
                          name='email'
                          type='email'
                          autoComplete='email'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-6 flex items-center justify-end gap-x-6'>
                  <button
                    type='submit'
                    className='rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Update
                  </button>
                </div>
              </div>

              <div>
                <div className='border-b border-gray-900/10 pb-12'>
                  <h2 className='text-base font-semibold leading-7 text-gray-900'>
                    Change Password
                  </h2>
                  <p className='mt-1 text-sm leading-6 text-gray-600'>
                    This information will be displayed publicly so be careful what you share.
                  </p>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Confirm Password
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>

                <div className='mt-6 flex items-center justify-end gap-x-6'>
                  <button
                    type='submit'
                    className='rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
