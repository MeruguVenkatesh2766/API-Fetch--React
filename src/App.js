import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const[data,setData]=useState([])
  let[val,setVal]=useState('')
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res=>setData(res.data))
  },[])
  const handler=e=>{
    setVal(e.target.value)
  }
  
  
  let obj=data.find(element => {
    return element.id === Number(val);
  });

  return (
    <div className="main">
      <center>
      <input type="text" className="inbox" placeholder="Enter Id (should be <=5000)" value={val} onChange={handler}/><br></br>
      </center>
      <div>
        {obj && 
        <div className="box">
          <strong>AlbumId :</strong>{obj.albumId}<br></br><br></br>
          <strong>Id :</strong>{obj.id}<br></br><br></br>
          <strong>Title :</strong>{obj.title}<br></br>
          <h4>URL :</h4><img src={obj.url} alt="" width="200px" height="120px"/><br></br><br></br>
          <h4>ThumbnailURL :</h4><img src={obj.thumbnailUrl} alt="" width="200px" height="120px"/><br></br><br></br>
        </div>
        }
      </div>
    </div>
  );
};

export default App;
