import Button from './Button'
const Todos = () => {
    return (
        <div className="p-10">
             <h2 className="text-4xl truncate text-blue-600">About MyTasks</h2>
             <p className="text-2xl text-red-800">Here is your to do list.</p>
             <ul className="text-2xl">
                 <li className='p-2'>Take out the trash. <Button doWhat="Delete" /></li>
                 <li className='p-2'>Pick  up the dog <Button doWhat="Delete"/></li>
                 <li className='p-2'>Go fishing <Button doWhat="Delete"/></li>
             </ul>
             <form>
                 <input type='text' className="bg-gray-400 p-2 rounded-2xl" />
                 <Button doWhat="Add Task" />
             </form>
         </div>
    )
}
export default Todos;