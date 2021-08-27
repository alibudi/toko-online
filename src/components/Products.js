/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";

function Products() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.warn("result", items);
 async function deleteOperation(id)
  {
      // let result = await fetch("http://localhost/api/delete/" + id, {
      //   method: "DELETE",
      //   headers: {
      //     "content-type": "application/json",
      //     Accept: "application/json",
      //   },
      // });
      // result = await result.json();
      // console.warn(result);
     if(window.confirm("are you sure want to delete product with id = "+id+"?"))
     {
        fetch("http://localhost:8000/api/delete/" + id, {
          method: "DELETE",
        })
          .then((response) => {
            response.json();
          })
          .then((data) => console.log(data));
        getData();
        alert("Product has been deleted");
     } else{
       getData();
     }
  }
  async function getData()
  {
    fetch("http://localhost:8000/api/list")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }
    // const [data, setData] = useState([]);
    // useEffect(async () => {
    //     let result = await fetch("http://localhost/api/list");
    //     result = await result.json();
    //     setData(result);

    // },[]);
    // console.warn("result",data)
  return (
    <div>
      <Header />
      <h1>Produk list</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
          {items.map((item) => (
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    style={{ width: 100 }}
                    src={"http://localhost:8000/" + item.file_path}
                  ></img>
                </td>
                <td>
                  <span
                    className="btn btn-danger"
                    onClick={() => deleteOperation(item.id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Products;
