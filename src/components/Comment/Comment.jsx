import "./Comment.css"



const Comment = (props) => {
    
    const {name, email, date,  message, hour, minutes, onDeleteComment} = props;
    const FormattedHour = (hour.toString().length < 2) ?  ('0'+ hour) : hour
    const FormattedMinute = (minutes.toString().length < 2) ? '0'+ minutes : minutes

    
    return (
        <div id="content" className="w-11/12 h-fit flex  bg-neutral-800 rounded-lg mb-4 relative p-4 lg:w-3/5">
            <img src="profile.png" alt="user-profile" className="w-12 h-12 mr-2" />
            <span onClick={onDeleteComment} className="absolute right-4 top-4 text-lg  text-slate-200 opacity-40 cursor-pointer">&times;</span>
            <div id="div-comment" className="w-full flex flex-col  items-start mb-6 mr-4">
                <h3 className="text-primary-color text-sm font-bold">{name}</h3>
                <p  className="text-slate-200 opacity-40 text-xs">{email}</p>
                <p className="text-slate-200 mt-4 font-normal" align="justify">{message}</p>
            </div>
            <p className="text-slate-200 self-end mr-4 text-xs opacity-40 absolute right-2 bottom-2" >{date} às {FormattedHour}h{FormattedMinute}</p>
        </div>
        
        
    )
        
    
}


export default Comment;