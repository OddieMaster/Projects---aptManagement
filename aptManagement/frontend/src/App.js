import React, { useState, useEffect } from "react";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Consult from "./components/Consult";
import RegisterResident from "./components/RegisterResident";
import ConsultResident from "./components/ConsultResident";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    axios.get("http://localhost:8081/operators").then((response) => {
      console.log(response);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8081/residents").then((response) => {
      setData(response.data);
    });
  }, []);

  function getRecord(id) {
    const product = data.find((item) => item.id === id);
    return product;
  }

  function editItem(id, apartment, block, resident) {
    var tempProduct = [...data];
    const index = tempProduct.indexOf(getRecord(id));
    tempProduct.splice(index, 1, { id, apartment, block, resident });
    setData(tempProduct);
    console.log("Editou!");
  }
  function editResident(
    id,
    resident,
    email,
    bdate,
    telephone,
    cpf,
    apartment,
    block
  ) {
    var tempProduct = [...data];
    const index = tempProduct.indexOf(getRecord(id));
    tempProduct.splice(index, 1, {
      id,
      resident,
      email,
      bdate,
      telephone,
      cpf,
      apartment,
      block,
    });
    setData(tempProduct);
    console.log("Editou Resident!");
  }

  function deleteItem(id) {
    const tempData = data.filter((item) => item.id !== id);
    setData(tempData);
    console.log("Deletou!");
  }

  function addItem(apartment, block, resident) {
    setData([
      ...data,
      {
        id: data.length + 1,
        apartment: apartment,
        block: block,
        resident: resident,
      },
    ]);
    console.log("Adicionou!");
  }

  function addResident(
    resident,
    bdate,
    telephone,
    cpf,
    email,
    apartment,
    block
  ) {
    setData([
      ...data,
      {
        id: data.length + 1,
        resident: resident,
        bdate: bdate,
        telephone: telephone,
        cpf: cpf,
        email: email,
        apartment: apartment,
        block: block,
      },
    ]);
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/register" exact component={Register} />
          <Route path="/homePage" component={HomePage} />
          <Route path="/consultResident">
            <ConsultResident
              data={data}
              deleteItem={deleteItem}
              editResident={editResident}
            />
          </Route>

          <Route path="/registerResident">
            <RegisterResident data={data} addResident={addResident} />
          </Route>

          <Route path="/consult">
            <Consult
              data={data}
              addItem={addItem}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
