import './App.css';
import Form from './components/Form';
import PostForm from './components/postForm';

import React from "react";
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='Form'>
          <Form />
        </div>
        <div className="postform">
          <PostForm />
        </div>
      </header>
    </div>
  );
}

export default App;

