const Button = ({doWhat}) => {
    return(
        <button className={(doWhat === "Delete") ? "bg-red-600 text-white p-2 rounded-2xl" : "bg-green-700 text-white p-2 rounded-2xl"} >
               {doWhat}
        </button>
    )
}
export default Button;