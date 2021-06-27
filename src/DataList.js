import React, {useState,useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import Form from './Form';

function DataList(){
    const [userList,setUserList] =useState([]);
    console.log("what is user list",userList);
    const[form,setForm]=useState({});
    
    const columns=[
       // {dataField:'products' , text:''},
       {dataField:'id' , text:'S.No'},
       {dataField:'title' , text:'Title',sort:true,filter:textFilter()},
       {dataField:'author' , text:'Author' ,filter:textFilter()},
       {dataField:"button",text:""},
    ]
 const handleClick=(e)=>{
     setForm(e);
     console.log("E in handle click",e)
}
    for(let i=0;i<userList.length;i++){     
        userList[i].button=<button onClick={()=>handleClick(userList[i])}>Buy now</button>
    }
useEffect(()=>{
 fetch('/allbooks')
 .then(response => response.json())
 .then(result => setUserList(result))
 .catch(error => console.log(error));
},[])

    return <div>  
        <BootstrapTable 
        bootstrap4  
        keyField='id' 
        columns={columns} 
        data={userList}
        filter={filterFactory()}
        hover={true}
        />       
        
        {(Object.keys(form).length !== 0)?<Form data={form}/> : ""}
        </div>

}
export default DataList; 

