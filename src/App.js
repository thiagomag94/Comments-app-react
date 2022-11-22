import React, {useState, useEffect} from 'react';
import './App.css';
import Comment from './components/Comment/Comment';
import FormNewcomment from './components/FormNewcomment/FormNewcomment'


/*using class to learn how to use State in ReactJs instead using hooks with functions*/
const App = () => {
  
  const [Listcomment, setListComment] = useState([])
  const [Name, setName] = useState()
  const [Email, setEmail] = useState()
  const [Message, setMessage] = useState()
  useEffect(() =>{
    setListComment(JSON.parse(localStorage.getItem("comments")))
  }, [])

  const Addcomment = (event) =>{
    event.preventDefault();
    const NewAddcomment = {
      name: Name,
      email: Email,
      message: Message

    };
    setListComment([...Listcomment, NewAddcomment ]);
    localStorage.setItem("comments", JSON.stringify([...Listcomment, NewAddcomment ])  )
    
  
  }
  const onChangeName = (event) =>{
    setName(event.target.value)
    
  }
  const onChangeEmail = (event) =>{
    setEmail(event.target.value)
    console.log(event.target.value)
  }
  const onChangeMessage = (event) =>{
    setMessage(event.target.value)
    console.log(event.target.value)
  }

  const DeleteComment = (comment) => {
    const NewListFiltered = Listcomment.filter(FilteredComment => FilteredComment !== comment)
    setListComment(NewListFiltered)
    localStorage.setItem("comments", JSON.stringify(NewListFiltered)  )
      
  }
  


  return(
    <div className="App flex flex-col justify-center items-center p-4">
      <h1 className='text-primary-color text-xl mb-12'>Comment App!</h1>
      {Listcomment.map((comment, index) => 
      
      <Comment
      key = {index}
      name= {comment.name}
      email = {comment.email}
      date = {new Date()}
      message = {comment.message}
      onDeleteComment = {() => DeleteComment(comment)}
      />
      
      )}
      <FormNewcomment
      onChangeName = {onChangeName}
      onChangeEmail = {onChangeEmail}
      onChangeMessage = {onChangeMessage}
      onSubmit = {Addcomment}

      />
    </div>
  )


  

};

export default App;

