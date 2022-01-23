import {Row} from "./TabelRow";
import "./Tabel.css"


export const Tabel=({data,del})=>{

   
    return <>
        <table>
            <thead>
               <tr>
               <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Salary</th>
                <th>isMarried</th>
               <th>Delete</th>
               </tr>
            </thead>
            
            <tbody>
                {data.map((e,i)=>(
                    <>
                        <Row key={i} del={del} value={e}/> 
                    </>
                    
                ))}
            </tbody>
       
        </table>
        
        {/* <div>
            <select name="" id="">
                <option onChange={filterData} value="Information Technology">Information Technology</option>
                <option onChange={filterData} value="Web Developer">Web Developer</option>
                <option onChange={filterData} value="Android Developer">Android Developer</option>
            </select>
            <button onClick={filterD}>Filter according to the department</button>
        </div> */}
        
    </>
}