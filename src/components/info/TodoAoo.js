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
      <form className='flex flex-row justify-center space-x-8 m-4 p-4 border-2 border-black '>
        <input
          type='text'
          className='border-2 border-black bg-slate-50 rounded-md m-2 p-1'
          onChange={handleChange}
          value={newValue}
        />
        <button
          onSubmit={handleSubmit}
          className='border-2 border-black p-2 rounded-md'
          onClick={handleClickUpdate}
        >
          Update
        </button>
      </form>
    )
  }

  const TodoElement = () => {
    return (
      <div className='flex flex-row justify-center space-x-8 m-4 p-4 border-2 border-black '>
        <p>{item.title}</p>
        <button
          className='border-2 border-black p-2 rounded-md'
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
        <button
          className='border-2 border-black p-2 rounded-md'
          onClick={e => onDelete(item.id)}
        >
          Delete
        </button>
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
