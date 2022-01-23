import './App.css';
import {Form} from './components/form'
import {useState,useEffect} from "react";
import {Tabel} from "./components/Tabel";



function App() {
  // const [data,setData]=useState([]);
  const [todo,setTodo] = useState([]);
  const [page,setPage] = useState(1);

  useEffect(()=>{
    getData();
  },[page])

  const del=(id)=>{
    // console.log(id)
    fetch(`http://localhost:3001/formData/${id}`,{
            method: "DELETE",
            headers:{
                "content-type": "application/json"
            }
        })
        .then(()=>{
            getData();
        })
  }

  const getData=()=>{
    // console.log(userdata);
    // setData(userdata);
    // console.log(data);

      fetch(`http://localhost:3001/formData?_page=${page}&_limit=1`)
      .then(d=>d.json())
      .then(res=>{
          setTodo(res)
          
      })

      console.log("todo",todo);
    
  }
  return (
    <div>
      <Form getData={getData}/>
      <Tabel del={del} data={todo} />
      <div style={{ width:"100px",margin:"auto"}}>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
