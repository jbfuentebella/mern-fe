import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateTodoModal = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      todoItem: props.toUpdateTodoItem.text,
    },
  });

  const onSubmit = (data) => {
    props.onUpdateTodoItem(data.todoItem);
    reset();
  };

  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative lg:w-3/12 md:w-6/12 xs:max-sm:w-9/12 my-6 mx-6 max-w-6xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-xl font-semibold'>Update Todo Item</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => props.onShowUpdateTodoModal(false)}
              >
                <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='relative p-6 flex-auto'>
                <div className=''>
                  <input
                    type='text'
                    {...register('todoItem', { required: 'Todo is required.', maxLength: 255 })}
                    className={
                      errors.todoItem
                        ? 'w-full border-2 border-rose-600 rounded focus:outline-2 sm:text-sm'
                        : 'w-full border-2 p-2 focus:outline-2 sm:text-sm'
                    }
                    placeholder='Enter Todo'
                  />
                  <p className='text-xs flex justify-end '>
                    {watch('todoItem') ? watch('todoItem').length + '/255' : ''}
                  </p>
                  {errors.todoItem?.type === 'required' && (
                    <p role='alert' className='text-rose-600 font-medium'>
                      {errors.todoItem?.message}
                    </p>
                  )}
                  {errors.todoItem?.type === 'maxLength' && (
                    <p role='alert' className='text-rose-600 font-medium'>
                      Todo exceeded max character of 255. Please remove some characters.
                    </p>
                  )}
                </div>
              </div>
              <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                <button
                  className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={() => props.onShowUpdateTodoModal(false)}
                >
                  Close
                </button>
                <button
                  className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='submit'
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default UpdateTodoModal;
