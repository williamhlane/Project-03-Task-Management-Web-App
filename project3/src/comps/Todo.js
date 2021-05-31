import Button from './Button'

const Todo = (props) => {
    return (
        <div>
            <h4 className='p-2 text-2xl bg-blue-400 rounded-2xl' >{props.todoText} </h4>
            <Button doWhat="Delete" toDelete={props.toDelete} id={props.id} />
        </div>
    )
}
export default Todo;