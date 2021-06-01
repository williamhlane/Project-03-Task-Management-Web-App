import Button from './Button'

const Todo = (props) => {
        if( (props.showActive && props.showCompleted) || (props.showCompleted && props.todoCompChecked) || (props.showActive && !props.todoCompChecked)) {
        return (
            <div>
                <label className="p-2 text-blue-700">Completed?</label>
                <input type="checkbox" onChange={() => props.todoComp(props.id, props.todoCompChecked)} checked={props.todoCompChecked || null} />
                <h4 className='p-2 text-2xl bg-blue-400 rounded-2xl' >{props.todoText} </h4>
                <Button doWhat="Delete" toDelete={props.toDelete} id={props.id} />
            </div>
        ) 
        } else {
            return null
        }

}
export default Todo;