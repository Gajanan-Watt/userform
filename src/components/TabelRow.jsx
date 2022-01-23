
export const Row=({value,del})=>{
   console.log(value.isMarried);
   const handel=(id)=>{
       del(id);
   }
    return <tr>
        <td>{value.name}</td>
        <td>{value.age}</td>
        <td>{value.address}</td>
        <td>{value.salary}</td>
        <td>{(value.isMarried).toString()}</td>
        <div>
            <button onClick={()=>handel(value.id)}>Delete</button>
        </div>
        </tr>

}