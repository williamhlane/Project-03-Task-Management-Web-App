import Button from './Button'
import Todo from './Todo'
const Todos = ({ todos, toDelete }) => {

    return (
        <div className="p-10">
             <h2 className="text-4xl truncate text-blue-600">About MyTasks</h2>
             <label className="text-2xl text-red-800">Here is your to do list.</label>
                 {
                    todos.map((todo) => (
                        <Todo todoText={todo.text} key={todo.id} id={todo.id} toDelete={toDelete} />
                    ))
                 }
             
                 <label  className="text-2xl text-red-800">New Task: </label>
                 <input type='text' className="bg-gray-400 p-2 rounded-2xl" />
                 <Button doWhat="Add Task" />
             
         </div>
    )
}
export default Todos;