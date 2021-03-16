import React, { useState } from "react";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Consult from "./components/Consult";
import RegisterResident from "./components/RegisterResident";
import ConsultResident from "./components/ConsultResident";

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      apartment: "3",
      block: "1",
      resident: "Oddie",
      bdate: "1995-04-03",
      telephone: "994962286",
      cpf: "07789808630",
      email: "romualdo.gui@gmail.com",
    },
    { id: 1, apartment: "2", block: "2", resident: "Craft" },
    { id: 2, apartment: "3", block: "3", resident: "Jéssica" },
    { id: 3, apartment: "4", block: "4", resident: "Aleatorio2" },
    { id: 4, apartment: "4", block: "4", resident: "Aleatorio3" },
    { id: 5, apartment: "4", block: "4", resident: "Aleatorio4" },
    { id: 6, apartment: "4", block: "4", resident: "Aleatorio5" },
    { id: 7, apartment: "4", block: "4", resident: "Aleatorio6" },
    { id: 8, apartment: "4", block: "4", resident: "Aleatorio7" },

  ]);

  console.log(data);

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
