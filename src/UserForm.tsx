import React, { useState } from "react";

const UserForm = ({ addListOfUsers }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    addListOfUsers({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="form-container">
  <form onSubmit={submitForm}>
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e: any) => setName(e.target.value)} />
    </div>
    <div>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e: any) => setEmail(e.target.value)} />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</div>
  );
};

export default UserForm;
