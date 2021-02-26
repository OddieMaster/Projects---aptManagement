import React, { useState } from "react";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Consult from "./components/Consult";
import AddInfoPage from "./components/pageComponents/AddInfoPage";



function App() {

  const [data, setData] = useState([
    { id: 0, apartment: "1", bloc: "1", resident: "Oddie" },
    { id: 1, apartment: "2", bloc: "2", resident: "Craft" },
    { id: 2, apartment: "3", bloc: "3", resident: "Aleatorio1" },
    { id: 3, apartment: "4", bloc: "4", resident: "Aleatorio2" },
    { id: 4, apartment: "5", bloc: "5", resident: "Aleatorio3" },
    { id: 5, apartment: "6", bloc: "6", resident: "Aleatorio4" },
    { id: 6, apartment: "6", bloc: "6", resident: "Aleatorio5" },
    { id: 7, apartment: "6", bloc: "6", resident: "Aleatorio6" },
  ]);

  function getRecord(id) {
    const product = data.find((item) => item.id === id);
    return product;
  }

   function editItem (id, apartment, bloc, resident) {
    var tempProduct = [...data];
    const index = tempProduct.indexOf(getRecord(id));
    tempProduct.splice(index, 1, {id, apartment, bloc, resident})
    setData(tempProduct)
    console.log("Editou!");
  }  

 function deleteItem(id) {
    const tempData = data.filter((item) => item.id !== id);
    setData(tempData);
    console.log("Deletou!");
  }

  function addItem(apartment, bloc, resident) {
    
    setData([
      ...data,
      {
        id: data.length + 1,
        apartment: apartment,
        bloc: bloc,
        resident: resident,
      },
      
    ]);
    console.log("Adicionou!");
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
