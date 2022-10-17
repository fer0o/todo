import { useState } from 'react'

const TodoAoo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false)

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title)
    const handleSubmit = e => {
      e.preventDefault()
    }
    const handleChange = e => {
      e.preventDefault()
      const value = e.target.value
      setNewValue(value)
    }
    const handleClickUpdate = e => {
      onUpdate(item.id, newValue)
      setIsEdit(false)
    }
    return (
      <form className='flex flex-row justify-center m-4 '>
        <input
          type='text'
          className='border-2 border-blue-500 bg-slate-50 rounded-md mr-4 p-2'
          onChange={handleChange}
          value={newValue}
        />
        <button
          onSubmit={handleSubmit}
          className='border-2 border-black p-2 rounded-md bg-blue-500 text-white'
          onClick={handleClickUpdate}
        >
          Update
        </button>
      </form>
    )
  }

  const TodoElement = () => {
    return (
      <div className='grid grid-cols-2 justify-center m-4 p-4 gap-5  '>
        <div className='block text-right'>
          <span className=' text-xl font-bold'>{item.title}</span>
        </div>

        <div className='space-x-4'>
          <button
            className='border-2 border-black p-2 rounded-md bg-blue-500 text-white'
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
          <button
            className='border-2 border-black p-2 rounded-md bg-red-600 text-white'
            onClick={e => onDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div>{isEdit ? <FormEdit /> : <TodoElement />}</div>
    </div>
  )
}

export default TodoAoo
