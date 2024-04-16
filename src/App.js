import './App.css';
import { User } from "./User";

function App() {
  const users = [ 
    {name: "Pedro", age: 21},
    {name: "Arthur", age: 20},
    {name: "Juninho", age: 19},
  ];

  return ( 
  <div className="App">
    {users.map((user,key) => {
      return (
        <User name={user.name} age={user.age} />
      );
    })}
  </div>
  );
}



export default App;
   