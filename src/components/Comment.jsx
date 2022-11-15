import "./Comment.css"

const Comment = (props) => {
    const {name, email, date} = props;
    console.log(props.date.toString());
    return (
        
        <div className="w-11/12 flex flex-col justify-center items-center bg-neutral-800 rounded-lg shadow-xl">
            <p className="text-slate-200">{name}</p>
            <p className="text-slate-400 font-extralight">{email}</p>
            <p className="text-slate-400 font-extralight">{date.toLocaleDateString()}</p>

            
        </div>
    )
        
    
}


export default Comment;