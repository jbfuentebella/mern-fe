import React from 'react';
import FormAlert from './FormAlert';
import DeleteTodoModal from './modals/DeleteTodoModal';
import UpdateTodoModal from './modals/UpdateTodoModal';

const Todo = () => {
  const [showDeleteTodoModal, setShowDeleteTodoModal] = React.useState(false);
  const [showUpdateTodoModal, setShowUpdateTodoModal] = React.useState(false);
  const [todoList, setTodoList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [toDeleteTodoItem, setToDeleteTodoItem] = React.useState(null);
  const [toUpdateTodoItem, setToUpdateTodoItem] = React.useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddValue = () => {
    todoList.push({
      id: Math.random().toString(),
      text: inputValue,
      checked: false,
      created_at: new Date(),
      updated_at: null,
      checked_at: null,
    });
    setTodoList(sortedTodoList(todoList));
    setInputValue('');
  };

  const handleShowDeleteModal = (item) => {
    setShowDeleteTodoModal(true);
    setToDeleteTodoItem(item);
  };

  const handleDeleteTodoItem = () => {
    const newTodoList = todoList.filter((item) => item.id !== toDeleteTodoItem.id);
    setTodoList(sortedTodoList(newTodoList));

    setShowDeleteTodoModal(false);
    setToDeleteTodoItem(null);
  };

  const handleShowUpdateModal = (item) => {
    setShowUpdateTodoModal(true);
    setToUpdateTodoItem(item);
  };

  const handleUpdateTodoItem = (newValue) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === toUpdateTodoItem.id) {
        return { ...item, text: newValue, updated_at: new Date() };
      }
      return item;
    });

    setTodoList(sortedTodoList(newTodoList));

    setShowUpdateTodoModal(false);
    setToUpdateTodoItem(null);
  };

  const sortedTodoList = (array) => {
    return array.sort((a, b) => {
      if (a.checked === b.checked) {
        if (a.checked && b.checked) {
          // Both objects have checked: true, sort by date
          return new Date(a.checked_at) - new Date(b.checked_at);
        } else {
          // Both objects have checked: false or checked: null, sort by created_at
          return new Date(a.created_at) - new Date(b.created_at);
        }
      } else {
        // One object has checked: true, prioritize the other
        return a.checked ? 1 : -1;
      }
    });
  };

  const handleCheckboxChange = (id, checked) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: checked,
          updated_at: new Date(),
          checked_at: checked ? new Date() : null,
        };
      }
      return item;
    });

    setTodoList(sortedTodoList(newTodoList));
  };

  return (
    <>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
            Todo Application
          </h1>

          <div className='w-full mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8'>
            <div className='w-full'>
              <p className='text-center text-lg font-medium mb-5'>What would you like to do?</p>
              <FormAlert
                type={'error'}
                message={'Error found.'}
                subMessage={'Please correct the following to complete the sign in process.'}
              />

              <div className='border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 mt-2'>
                <div className='grow'>
                  <label htmlFor='todo' className='sr-only'>
                    To Do
                  </label>

                  <div className=''>
                    <input
                      type='text'
                      value={inputValue}
                      onChange={handleChange}
                      className='w-full border-none focus:outline-none sm:text-sm'
                      placeholder='Enter Todo'
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleAddValue}
                    className='block mt-1 w-full rounded-lg bg-indigo-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-indigo-600 sm:mt-0 sm:w-auto sm:shrink-0'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <table className='max-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
                <tbody className='divide-y divide-gray-200'>
                  {Object.entries(todoList).map(([key, item]) => {
                    return (
                      <React.Fragment key={key}>
                        <tr className=''>
                          <td className='sticky inset-y-0 start-0 bg-white px-4 py-2'>
                            <label className='sr-only' htmlFor='Row1'>
                              {item.text.toString()}
                            </label>

                            <Checkbox
                              onCheckboxChange={handleCheckboxChange}
                              toUpdateCheckbox={item}
                              key={key + '_' + item.id}
                            />
                          </td>

                          <td
                            className={
                              item.checked
                                ? 'w-full px-4 py-2 font-medium text-gray-500 break-words line-through'
                                : 'w-full px-4 py-2 font-medium text-gray-900 break-words '
                            }
                            onClick={() => handleShowUpdateModal(item)}
                          >
                            {item.text.toString()}
                          </td>
                          <td className='whitespace-nowrap px-4 py-2'>
                            <button
                              onClick={() => handleShowDeleteModal(item)}
                              className='inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-4 h-4'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showDeleteTodoModal ? (
        <DeleteTodoModal
          onShowDeleteTodoModal={setShowDeleteTodoModal}
          onDeleteTodoItem={handleDeleteTodoItem}
          toDeleteTodoItem={toDeleteTodoItem}
        />
      ) : null}
      {showUpdateTodoModal ? (
        <UpdateTodoModal
          onShowUpdateTodoModal={setShowUpdateTodoModal}
          onUpdateTodoItem={handleUpdateTodoItem}
          toUpdateTodoItem={toUpdateTodoItem}
        />
      ) : null}
    </>
  );
};

const Checkbox = (props) => {
  const [checked, setChecked] = React.useState(props.toUpdateCheckbox.checked);

  const handleChange = () => {
    setChecked(!checked);
    props.onCheckboxChange(props.toUpdateCheckbox.id, !checked);
  };

  return (
    <>
      <input
        className='h-5 w-5 rounded border-gray-300'
        type='checkbox'
        id={props.toUpdateCheckbox.id.toString()}
        checked={checked}
        onChange={handleChange}
      />
    </>
  );
};

export default Todo;
