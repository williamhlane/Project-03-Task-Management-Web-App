const Contact = () => {
    return (
        <div className="p-10">
            <h2 className="text-4xl truncate text-blue-600">MyTasks Contact</h2>
            <form   action="https://formspree.io/f/mqkwqkbv" method="POST">
                <label className="text-red-900 text-2xl">Enter your email:</label>
                <input type="text" className="bg-gray-400 p-2 rounded-2xl block" type="email" name="_replyto"/>
                <label className="text-red-900 text-2xl">Your Message:</label>
                <input type="text" className="bg-gray-400 p-2 rounded-2xl block" name="message" />
                <input type="submit" value="Send Message" className="bg-blue-400 p-2 rounded-2xl block mt-2" />
            </form>
        </div>
    )
}
export default Contact;