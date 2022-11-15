import React from 'react';
import './App.css';
import Comment from "./components/Comment"
import FormNewcomment from "./components/FormNewcomment"

/*using class to learn how to use State in ReactJs instead using hooks with functions*/
class App extends React.Component {

  state = {
    comments: [
      {
        name:'Thiago Borges Miranda',
        email:'thiagomag94@gmail.com',
        date: new Date(),
        message: 'pepeta me dá o fuvaco'
      },
      {
        name:'Lucas Borges Miranda',
        email:'lugomag94@gmail.com',
        date: new Date(),
        message: 'Quero ser pra você a lua iluminando o sol'
      },
      {
        name:'Jessica Laís de Almeida Neves',
        email:'lais@gmail.com',
        date: new Date(),
        message: 'Eu amo Thiago banquelho'
      },
    ],
    form: {
      name:"",
      email:"",
      message:"",

    }
  };



addComment = (event) => {
  event.preventDefault();
  alert('adicionando comentário')
  const newComment = {
    name:this.state.form.name,
    email: this.state.form.email,
    date: new Date(),
    message: this.state.form.message,

  }

  this.setState({
    comments: [...this.state.comments, newComment],
    form:{
      name:"",
      email:"",
      message:"",
    }
  })
}

onChangeEmail = (event) => {
  
  const emailChanged =event.target.value;
  
    this.setState({
      form:{
        ...this.state.form, 
        email:emailChanged
      }
      
    })
  
  
}

onChangeMessage = (event) => {
  
  const messageChanged =event.target.value;
  
  this.setState({
    form:{
      ...this.state.form, 
    message: messageChanged,
    }
    
  })
}

onChangeName = (event) => {
  
  const nameChanged =event.target.value;
  this.setState({
    form: {
      ...this.state.form,
      name: nameChanged,
    }
  })
}


  render(){

    return (
      <div className="App flex flex-col justify-center items-center mt-10 gap-10">
        <h1 className="text-primary-color text-2xl font-light">Comments App!</h1>
        
        {this.state.comments.map((comment, index) =>{
          return (
            <Comment 
              key = {index}
              name= {comment.name}
              email={comment.email}
              date={comment.date}
              message ={comment.message}
            />
          )
        
        }) }
        <FormNewcomment
        onChangeName = {this.onChangeName}
        onChangeEmail = {this.onChangeEmail}
        onChangeMessage = {this.onChangeMessage}

        onSubmit = {this.addComment}

        />

        
        
  
      </div>
    );
  };    
};

export default App;
