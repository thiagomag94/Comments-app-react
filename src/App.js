import React, {useState, useEffect} from 'react';
import './App.css';
import './index.css'
import Comment from './components/Comment/Comment';
import FormNewcomment from './components/FormNewcomment/FormNewcomment'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import Swal from 'sweetalert2';






/*using class to learn how to use State in ReactJs instead using hooks with functions*/
const App = () => {
  
  const [Listcomment, setListComment] = useState([]);
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();
  const NewArrayInverted = Listcomment.slice().reverse();
  
  
  useEffect(() =>{
    const LoadDataStorage = localStorage.getItem("comments");

    (LoadDataStorage  != null ) && setListComment(JSON.parse(LoadDataStorage))
  }, [])



  const Addcomment = (event) =>{
    event.preventDefault();
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const datestring = date.toLocaleDateString();
    const NewAddcomment = {
      name: Name,
      email: Email,
      date: datestring,
      message: Message,
      hour: hour,
      minutes: minutes,

    };
    setListComment([...Listcomment, NewAddcomment ]);
    localStorage.setItem("comments", JSON.stringify([...Listcomment, NewAddcomment ]));
    CleanFormFields();
    
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Comment added successfully',
      showConfirmButton: false,
      timer: 2000
    })
    setTimeout(()=> GotoComment(), 2004)
    

  }


  const onChangeName = (event) =>{
    setName(event.target.value);
    
  }
  const onChangeEmail = (event) =>{
    setEmail(event.target.value);
    
  }
  const onChangeMessage = (event) =>{
    setMessage(event.target.value);
    
  }

  const DeleteComment = (comment) => {
    const NewListFiltered = Listcomment.filter(FilteredComment => FilteredComment !== comment);
    setListComment(NewListFiltered);
    localStorage.setItem("comments", JSON.stringify(NewListFiltered));
    CleanFormFields()   
  }

  const DeleteCommentAlert = (comment) => {
    Swal.fire({
      title: 'Do you really want to delete this comment?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: "red-bg",
      
      
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteComment(comment);
        Swal.fire(
          'Deleted!',
          'Your comment has been deleted.',
          'success'
        );
      } 
    })
  }

  const CleanFormFields = () => {
    document.getElementById('text').value = '';
    document.getElementById('email').value = '';
    document.getElementById('textarea').value = '';
  }
  
  const GotoComment = () => {
    window.scrollTo(0,600);
  }


  return(
    <div className="App flex flex-col justify-center items-center p-4">
      
      <h1 className='text-primary-color text-3xl mb-12'>
        <ChatRoundedIcon sx={{fontSize:30}} className="text-primary-color"></ChatRoundedIcon>
        <span className='ml-2'>Comment App!</span>
      </h1>
      <h1 className='text-slate-200  text-md mb-12'>Leave your comment below and share your thoughts with people around the world!</h1>
      <FormNewcomment
      onChangeName = {onChangeName}
      onChangeEmail = {onChangeEmail}
      onChangeMessage = {onChangeMessage}
      onSubmit = {Addcomment}

      />
      <h1 className='text-slate-200 font-light text-xl mb-12 flex flex-col justify-center items-center'>
        Scroll down to see our last comments
        <ArrowCircleDownIcon sx={{fontSize:50}} className='text-primary-color mt-4'></ArrowCircleDownIcon>
      </h1>
      

      {NewArrayInverted.map((comment, index) => 
      
      <Comment
      key = {index}
      name= {comment.name}
      email = {comment.email}
      date = {comment.date}
      message = {comment.message}
      hour = {comment.hour}
      minutes = {comment.minutes}
      onDeleteComment = {() => DeleteCommentAlert(comment)}
      />
    
      )}
      
      <div id="message" className='bg-green-600 py-2 px-4 rounded-lg drop-shadow-lg m-12' >
        <h2 className='text-slate-200'>We've got {NewArrayInverted.length} comments added</h2>
      </div>
      <footer className='w-full h-10 bg-primary-color border-t border-neutral-600 flex flex-col justify-center items-center'>
        <div>
          <p className="text-slate-200 font-light">Developed by Thiago Borges</p>
        </div>

      </footer>
    </div>
  )


  

};

export default App;

