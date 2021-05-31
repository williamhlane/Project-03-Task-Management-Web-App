const Button = (props) => {

    return(
        <button onClick={() => props.toDelete(props.id)} className={(props.doWhat === "Delete") ? "bg-red-600 text-white py-2 rounded-2xl my-2 w-full" : "bg-green-700 text-white p-2 rounded-2xl m-2"} >
               {props.doWhat}
        </button>
    )
}
export default Button;