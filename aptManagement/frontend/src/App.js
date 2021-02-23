import React, { useState } from "react";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Consult from "./components/Consult";
import List from "./components/pageComponents/List";
import EditPage from "./components/pageComponents/EditPage";
import AddInfoPage from "./components/pageComponents/AddInfoPage";


function App() {
  const [data, setData] = useState([
    { id: 1, apartment: "1", bloc: "1", resident: "Oddie" },
    { id: 2, apartment: "2", bloc: "2", resident: "Aleatorio" },
    { id: 3, apartment: "3", bloc: "3", resident: "Aleatorio1" },
    { id: 4, apartment: "4", bloc: "4", resident: "Aleatorio2" },
    { id: 5, apartment: "5", bloc: "5", resident: "Aleatorio3" },
    { id: 6, apartment: "6", bloc: "6", resident: "Aleatorio4" },
  ]);

  console.log(data);

  function deleteItem(id) {
    const tempData = data.filter((item) => item.id !== id);
     setData(tempData);  
    console.log(tempData)
    console.log(id)
    console.log("ativou!")
  }

  function addItem(apartment, bloc, resident) {
    console.log({ resident });

    setData([
      ...data,
      {
        id: data.length + 1,
        apartment: apartment,
        bloc: bloc,
        resident: resident,
      },
    ]);

    console.log("Foi caralho");
  }

  return (
    /*  <>
    <p>O botão está aqui!</p>
    <button onClick={()=> addItem()}>Testando</button>
    <p>Apartamento</p>
    <div>
    <input autoFocus type="number" id="apartment"></input>
    </div>
    <p>Bloco</p>
    <div>
    <input type="number" id="bloc"></input>
    </div>
    <p>Resident</p>
    <div>
    <input type="text" id="resident"></input>
    </div>
    */

    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" exact component={Register} />
        <Route path="/homePage" component={HomePage} />

        <Route path="/consult">
          <Consult data={data} addItem={addItem} deleteItem={deleteItem} />
        </Route>

        <Route path="/EditPage">
          <EditPage data={data} addItem={addItem} />
        </Route>

        <Route path="/AddInfoPage">
          <AddInfoPage data={data} addItem={addItem} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
