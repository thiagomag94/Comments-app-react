import "./Comment.css"

const Comment = (props) => {
    const {name, email, date, message} = props;
    
    return (
        
        <div className="w-11/12 flex flex-col justify-center items-center bg-neutral-800 rounded-lg shadow-xl gap-4 relative pb-6">
            <p className="text-primary-color">{name}<span className="text-slate-200 font-extralight "> - {email}</span></p>
            <div className="text-slate-400 font-extralight p-10">{message}</div>    
            <p className="text-slate-400 font-extralight text-sm absolute right-4 bottom-2 m-1 opacity-40">{date.toLocaleDateString()}</p>
            
        </div>
    )
        
    
}


export default Comment;