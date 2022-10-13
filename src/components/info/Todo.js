import { useState } from 'react'
import TodoAoo from './TodoAoo'

const Todo = () => {
  const [title, setTitle] = useState('Hola')
  const [todos, setTodos] = useState([])

  const handleChange = e => {
    const value = e.target.value
    setTitle(value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const newTodo = {
      title: title,
      completed: false
    }
    const temp = [...todos]
    temp.unshift(newTodo)
    setTodos(temp)
  }
  return (
    <div>
      <div className='container'>
        <form className=' space-x-2 m-4' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className='border-2 border-black rounded-md  p-1'
            value={title}
          />
          <input
            onClick={handleSubmit}
            type='submit'
            value='create todo'
            className='border-2 border-black bg-slate-50 rounded-md m-2 p-1'
          />
        </form>
        <div>
          {todos.map((item, idx) => (
            <div key={idx}>
              <div>
                <TodoAoo item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todo
