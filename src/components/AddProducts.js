import Header from "./Header";
import { useState } from "react";
function AddProducts() {
  const [name,setName]=useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

 async function addProduct(){
    console.warn(name,file,price,description);
    const formData = new FormData();
   formData.append('file',file);
   formData.append("name", name);
   formData.append("price", price);
   formData.append("description", description);
   
   let result = await fetch("http://localhost:8000/api/addProduct",
   {
     method: "POST",
     body: formData
   });
   alert("Add product");
  }
  
  return (
    <div>
      <Header />
      <h1>Add product</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="Name "
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="file"
          placeholder="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control"
        />
        <br />
        <input
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default AddProducts;
