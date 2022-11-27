import "./Comment.css"



const Comment = (props) => {
    
    const {name, email, date,  message, hour, minutes, onDeleteComment} = props;
    
    
    return (
        
        <div id="div-comment"  className="w-11/12 mb-12 text-sm flex flex-col justify-center items-center bg-neutral-800 rounded-lg drop-shadow-sm gap-4 relative py-4 pb-6 px-4 flex-wrap relative lg:w-2/5 ">
            <p className="text-primary-color  py-2">{name}<span className="text-slate-200 font-extralight text-sm "> - {email}</span></p>
            <div className="w-4/5 mb-10 text-slate-400 font-extralight p-10 rounded-lg">{message}</div>    
            <p className="text-slate-400 font-extralight absolute right-4 bottom-2 opacity-40"> {date} às <span>{hour}h:{minutes}</span></p>
            <button onClick={onDeleteComment} className="text-lg text-primary-color opacity-25 absolute top-2 right-4 cursor-pointer" >&#10006;</button>

            
        </div>
    )
        
    
}


export default Comment;