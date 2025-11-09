import React, { useState } from 'react';
import Input from './components/Input'; 

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>Home</h1>

      {/* Form */}
      <form>
        <Input
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          required
          maxlength={15}
          minlength={5}
        />
        <Input
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}