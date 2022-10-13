import { useState } from 'react'

const TodoAoo = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
  }
  const FormEdit = () => {
    return (
      <form className='flex flex-row justify-center space-x-8 m-4 p-4 border-2 border-black '>
        <input
          type='text'
          className='border-2 border-black bg-slate-50 rounded-md m-2 p-1'
        />
        <button
          onSubmit={handleSubmit}
          className='border-2 border-black p-2 rounded-md'
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
        <button className='border-2 border-black p-2 rounded-md'>Delete</button>
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
