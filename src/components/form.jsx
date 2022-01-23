import {useState,useRef} from "react";
import "./form.css"



const data={
    name:"",
    age:"",
    address:"",
    department:"",
    salary:"",
    isMarried:"",
    profile:""
}

export const Form =({getData})=>{
    const [formData,setFormData] =useState(data);
    const [imgUrl,setImgUrl] = useState("https://cdn.allthings.how/wp-content/uploads/2020/10/allthings.how-how-to-change-your-profile-picture-on-google-meet-profile-photo-759x427.png?width=1200");
    const myref = useRef()
    // console.log(myref.current);
    // const ref=useRef([]);

    const handelchange=(e)=>{
        
        let {name,value,checked,type}=e.target;
        console.log(name);
        if(name==="profile"){
             value=URL.createObjectURL(myref.current.files[0]);
             console.log("value",value)
            console.log("Enter")
            setImgUrl(value)
        }
        // value=type==="file"?
        value=type==="checkbox" ?  checked : value;
        // console.log(value);
        // setFormData((p)=>({...p,[name]:value}))
        setFormData({...formData,[name]:value});

    }

    const submitData=(e)=>{
        e.preventDefault();
        // // console.log(formData);
        // ref.current=formData
       
       
        fetch("http://localhost:3001/formData",{
            method: "POST",
            body:JSON.stringify(formData),
            headers:{
                "content-type": "application/json"
            }
        })
        .then(()=>{
            getData();
        })
    }

    // const {name,age,address,department,salary,isMarried}=formData;
    return (<div  style={{display: 'flex',}}>
        <form className="formStyle" onSubmit={submitData}>
            <input onChange={handelchange} type="text" name="name"  placeholder="Enter your name" />
            <input onChange={handelchange} type="number" name="age" placeholder="Enter your age" />
            <input onChange={handelchange} type="text" name="address" placeholder="Enter your address"/>
            <select onChange={handelchange} name="department" >
                <option value="Information Technology">Information Technology</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Android Developer">Android Developer</option>
            </select>
            <input onChange={handelchange} type="number" name="salary" placeholder="Enter your Salary" />
            <label>Marital Status
            <input onChange={handelchange} name="isMarried" type="Checkbox"  />
            </label>
            <input type="file" onChange={handelchange} ref={myref} name="profile" />
            <input onChange={handelchange} type="submit" />
            
        </form>
         <div style={{
            backgroundImage:`url(${imgUrl})`,
            height: '200px',
            width: '200px',
            backgroundSize:'contain',
            backgroundRepeat:"no-repeat",
            marginTop: "5%",
            margin:"auto"
          }}>

          </div>
        </div>
    );
}