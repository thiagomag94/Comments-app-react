import React from 'react';
import './App.css';
import Comment from "./components/Comment"

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
  };



addComment = () => {
  alert('adicionando comentário')
  const newComment = {
    name:"pessoa XXX",
    email: 'xxxx@gmail.com',
    date: new Date(),
    message: 'hue hue BR',

  }

  this.setState({
    comments: [...this.state.comments, newComment]
  })
}


  render(){

    return (
      <div className="App flex flex-col justify-center items-center mt-10 gap-10">
        <h1 className="text-slate-200 font-light">Comments App!</h1>
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
        <button onClick={this.addComment} className="w-1/4 py-2 bg-slate-200 rounded-md">Add Comment</button>
        
  
      </div>
    );
  };    
};

export default App;
