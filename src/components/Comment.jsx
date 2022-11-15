import "./Comment.css"

const Comment = (props) => {
    const {name, email, date, message} = props;
    console.log(props.date.toString());
    return (
        
        <div className="w-11/12 flex flex-col justify-center items-center bg-neutral-800 rounded-lg shadow-xl leading-8 relative pb-6">
            <p className="text-slate-200">{name}<span className="text-slate-400 font-extralight"> - {email}</span></p>
            <p className="text-slate-400 font-extralight">{message}</p>    
            
            <p className="text-slate-400 font-extralight text-sm absolute right-4 bottom-2">{date.toLocaleDateString()}</p>
            
        </div>
    )
        
    
}


export default Comment;