import './App.css';
import Comment from "./components/Comment"

function App() {
  return (
    <div className="App flex flex-col justify-center items-center mt-10 gap-10">
      <h1 className="text-slate-200 font-light">Comments App!</h1>
      <Comment 
      name= 'Thiago Borges Miranda'
      email='email@gmail.com'
      date={new Date()}
      />

    </div>
  );
}

export default App;
