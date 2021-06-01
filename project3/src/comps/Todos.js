
import Todo from './Todo'

const Todos = ({ todos, toDelete, toLength, todoComp, whatToShow }) => {
    let showActive = true
    let showCompleted = false
    if(toLength > 0){
        todos.map((todo) => (
            showActive=todo.showActive
        ))
        todos.map((todo) => (
            showCompleted=todo.showCompleted
        ))
            
    }
    return (
        <div className="p-10">
            <h2 className="text-4xl truncate text-blue-600">My Todos List</h2>
            <div>
                <button className={(showActive && showCompleted) ? "px-3 bg-black text-gray-50 rounded" : "px-3 "} onClick={()=> whatToShow(true, true)}> Show All </button> 
                <button className={(showActive && !showCompleted) ? "px-3 bg-black text-gray-50 rounded" : "px-3 "} onClick={() => whatToShow(true, false)}> Active </button> 
                <button className={(!showActive && showCompleted) ? "px-3 bg-black text-gray-50 rounded" : "px-3 "} onClick={() => whatToShow(false, true)}> Completed </button>
            </div>
            <label className="text-2xl text-red-800">Here is your to do list.</label>
            { toLength > 0 ?
                todos.map((todo) => (
                    <Todo todoText={todo.text} key={todo.id} id={todo.id} toDelete={toDelete} 
                    todoComp={todoComp} todoCompChecked={todo.completed} showCompleted={showCompleted} showActive={showActive} /> 
                ))
                :
                <label className="text-2xl text-red-800 block">No Todos</label>
            }

            




        </div>
    )
}

export default Todos;