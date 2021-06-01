const Home = ({ match, location, history}) => {
   //This is left in as a reference to the props sent by router
    // console.log("Match: ", match, "Location: ", location, "History: ", history);
    return (

        <div className="p-10">
            <h2 className="text-4xl truncate text-blue-600">MyTogos</h2>
             <p>Hello and Welcome to my tasks.</p>
        </div>
    )
}
export default Home;