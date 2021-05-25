const Contact = () => {
    return (
        <div className="p-10">
            <form></form>
            <h2 className="text-4xl truncate text-blue-600">MyTasks</h2>
            <form>
                <label>Enter your name:</label>
                <input type="text" className="block border-solid"/>
                <label>Enter your email:</label>
                <input type="text" className="block"/>
                <label>Your Message:</label>
                <input type="text" className="block"/>
            </form>
        </div>
    )
}
export default Contact;