import React, { useState } from "react";
import "./App.css";
import { Button } from "storybook_producer_app";
import UserForm from "./UserForm";
import UserList from "./UserList";

const App = () => {
  const [userList, setUserList] = useState<any>([{
    name:"nav",
    email:"pallavnav@gmail.com"
  }]);

  const addUserToList = (args: any) => {
    if(args.name && args.email) {
      setUserList([...userList, args]);
    }
  };

  const handleButtonClick = () => {
    alert("Button getting used from the producer app! Hurray!");
  };

  return (
    <div className="App">
      <div className="section_1">
        <p>Consumer App</p>
        <div>
          <Button
            label="I am from the Storybook Producer App!"
            onClick={handleButtonClick}
          ></Button>
        </div>
      </div>

      <div className="section_2">
        <div>
          <UserForm addListOfUsers={addUserToList} />
        </div>

        <div>
          <UserList listOfUsers={userList} />
        </div>
      </div>
    </div>
  );
};

export default App;
