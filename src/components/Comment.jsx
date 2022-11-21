import "./Comment.css"



const Comment = (props) => {
    
    const {name, email, date, message, onDeleteComment} = props;
    
    
    return (
        
        <div id="div-comment"  className="w-11/12 mb-12 text-sm flex flex-col justify-center items-center bg-neutral-800 rounded-lg shadow-xl gap-4 relative py-4 pb-6 px-4 lg:w-2/5 ">
            <p className="text-primary-color border-b border-slate-400 py-2">{name}<span className="text-slate-200 font-extralight text-sm "> - {email}</span></p>
            <div className="w-4/5 mb-10 text-slate-400 font-extralight p-10 rounded-lg">{message}</div>    
            <p className="text-slate-400 font-extralight absolute right-4 bottom-2 opacity-40">{date.toLocaleDateString()}</p>
            <button onClick={onDeleteComment} className="text-lg absolute top-0 right-2 cursor-pointer" >&#10006;</button>

            
        </div>
    )
        
    
}


export default Comment;