


const FormNewcomment = (event) =>{
    
   
      
       
    return (
        
        <div onSubmit = {event.onSubmit} className="w-11/12 h-fit bg-neutral-800 rounded-lg mb-16 lg:w-2/5  ">
            <form className=" flex flex-col px-16 shadow-lg gap-6 py-4">
                <h1 className="w-fit text-md text-primary-color py-2 border-b-2  ">Add new comment</h1>
                <input id="text" type="text"  onChange = {event.onChangeName} placeholder="Type your name here.." className="text-slate-200 bg-transparent border border-primary-color rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-primary-color" required></input>
                <input id="email" type="email" onChange = {event.onChangeEmail} placeholder="Type your best e-mail here.." className="text-slate-200 bg-transparent border border-primary-color rounded-sm p-2  focus:outline-none focus:ring-2 focus:ring-primary-color invalid:border-pink-500 invalid:text-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" required></input>
                <textarea id="textarea" type="textarea" onChange = {event.onChangeMessage} rows='4' placeholder="Type your comment here.." className="text-slate-200 bg-transparent border border-primary-color rounded-sm px-2 focus:outline-none focus:ring-2 focus:ring-primary-color" required></textarea>
                <button type='submit' className="w-32 py-2 px-2 border shadow-md border-primary-color text-slate-200 font-normal rounded-md self-center">Add Comment</button>
            </form>
            
        </div>
    )
      
}

export default FormNewcomment;