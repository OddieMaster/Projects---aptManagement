import React, { useState } from "react";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Consult from "./components/Consult";
import AddInfoPage from "./components/pageComponents/AddInfoPage";


function App() {

  const [data, setData] = useState([
    { id: 1, apartment: "1", bloc: "1", resident: "Oddie" },
    { id: 2, apartment: "2", bloc: "2", resident: "Craft" },
    { id: 3, apartment: "3", bloc: "3", resident: "Aleatorio1" },
    { id: 4, apartment: "4", bloc: "4", resident: "Aleatorio2" },
    { id: 5, apartment: "5", bloc: "5", resident: "Aleatorio3" },
    { id: 6, apartment: "6", bloc: "6", resident: "Aleatorio4" },
    { id: 7, apartment: "6", bloc: "6", resident: "Aleatorio5" },
    { id: 8, apartment: "6", bloc: "6", resident: "Aleatorio6" },
  ]);

  console.log(data);

  function getRecord(id) {
    const product = data.find((item) => item.id === id);
    return product;
  }

  function editItem(id, apartment, bloc, resident) {
    const tempProduct = data;
    const index = tempProduct.indexOf(getRecord(id)); //Repassa posição do row
    const selectedRecord = tempProduct[index];
    console.log(selectedRecord);
    selectedRecord.apartment = apartment;
    selectedRecord.bloc = bloc;
    selectedRecord.resident = resident;
    console.log(selectedRecord);
    console.log(index);
    setData([
      ...data,
      {
        id: selectedRecord["id"],
        apartment: selectedRecord["apartment"],
        bloc: selectedRecord["bloc"],
        resident: selectedRecord["resident"],
      },
    ]);
  }

  function deleteItem(id) {
    const tempData = data.filter((item) => item.id !== id);
    setData(tempData);
    console.log(tempData);
    console.log(id);
    console.log("ativou!");
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
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/register" exact component={Register} />
          <Route path="/homePage" component={HomePage} />

          <Route path="/consult">
            <Consult
              data={data}
              addItem={addItem}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          </Route>
          <Route path="/AddInfoPage">
            <AddInfoPage data={data} addItem={addItem} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
