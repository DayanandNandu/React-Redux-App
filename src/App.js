import { Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Comments from './module/comments/comments';
import Header from './module/layout/header';
import Posts from './module/posts/posts';
import Users from './module/users/Users';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/users' element = {<Users />}></Route>
        <Route path='/posts' element = {<Posts />}></Route>
        <Route path='/comments' element = {<Comments />}></Route>
        <Route path='/' element = {<Navigate to={'/users'}/>}></Route>  
      </Routes>  

         
    </div>
  );
}

export default App;
