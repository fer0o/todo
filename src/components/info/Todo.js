import { useState } from 'react'
import TodoAoo from './TodoAoo'

const Todo = () => {
  const [title, setTitle] = useState('Text what you need to do')
  const [todos, setTodos] = useState([])

  const handleChange = e => {
    const value = e.target.value
    setTitle(value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    }
    const temp = [...todos]
    temp.unshift(newTodo)
    setTodos(temp)
    setTitle('')
  }
  const handleUpdate = (id, value) => {
    const temp = [...todos]
    const item = temp.find(item => item.id === id)
    item.title = value
    setTodos(temp)
  }
  const handleDelete = id => {
    const temp = todos.filter(item => item.id !== id)
    setTodos(temp)
  }
  return (
    <div>
      <div className='m-32'>
        <form className='flex justify-center gap-2' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className='border-2 border-black rounded-md w-96 h-auto p-2'
            value={title}
            placeholder='enter another activity'
          />
          <input
            onClick={handleSubmit}
            type='submit'
            value='create todo'
            className='border-2 border-black  rounded-md  bg-blue-500 text-white p-2  '
          />
        </form>
        <div>
          {todos.map((item, idx) => (
            <div key={idx}>
              <div>
                <TodoAoo
                  item={item}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todo
