const Home = ({ match, location, history}) => {
    console.log("Match: ", match, "Location: ", location, "History: ", history);
    return (

        <div className="p-10">
            <h2 className="text-4xl truncate text-blue-600">MyTasks</h2>
             <p>Hello and Welcome to my tasks.</p>
        </div>
    )
}
export default Home;