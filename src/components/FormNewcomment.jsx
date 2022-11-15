const FormNewcomment = (event) =>{
    
    
    return (
        
        <div onSubmit = {event.onSubmit} className="w-11/12 h-fit bg-neutral-800 rounded-lg mb-16 ">
            <form className="text-primary-color flex flex-col px-6 shadow-lg gap-6 py-4 ">
                <h1 className="w-fit py-2 border-b-2 ">Add new comment</h1>
                <input type="text"  onChange = {event.onChangeName} placeholder="Type your name here.." className="rounded-sm p-2" required></input>
                <input type="email" onChange = {event.onChangeEmail} placeholder="Type your best e-mail here.." className="rounded-sm p-2" required></input>
                <textarea type="textarea" onChange = {event.onChangeMessage} rows='4' placeholder="Type your comment here.." className="rounded-sm px-2" required></textarea>
                <button type='submit' className="w-32 py-2 px-2  bg-primary-color text-slate-200 font-normal rounded-md self-center">Add Comment</button>
            </form>
            
        </div>
    )
      
}

export default FormNewcomment;