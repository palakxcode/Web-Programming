// App.js
import React from 'react';
import srcImage from "./Images/logo512.png";
import profilePic from "./Images/profile.jpg";
const ImageComponent = () => {
  return (
    <div>
      <h2>Image from Public Folder</h2>
      <img src="./logo192.png" alt="Public" width="200" />

      <h2>Image from Src Folder</h2>
      <img src={srcImage} alt="Src" width="200" />
    </div>
  );
};

const LoginForm = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Novell Services Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <div>
          <label>City of Employment:</label>
          <input type="text" />
        </div>
        <div>
          <label>Web Server:</label>
          <select>
            <option>Choose a server</option>
            <option>Apache</option>
            <option>Nginx</option>
            <option>IIS</option>
          </select>
        </div>
        <div>
          <label>Please specify your role:</label>
          <div>
            <input type="radio" name="role" /> Admin
            <input type="radio" name="role" /> Engineer
            <input type="radio" name="role" /> Manager
            <input type="radio" name="role" /> Guest
          </div>
        </div>
        <div>
          <label>Single Sign-on to the following:</label>
          <div>
            <input type="checkbox" /> Mail
            <input type="checkbox" /> Payroll
            <input type="checkbox" /> Self-service
          </div>
        </div>
        <div>
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

const ProfileImage = () => {
  return <img src={profilePic} alt="Profile" width="150" />;
};

const UserInfo = () => {
  return (
    <div>
      <h3>User Info</h3>
      <p>Name: Palak Ramani</p>
      <p>Email: palak.ramani2023@vitstudent.ac.in</p>
    </div>
  );
};

const UserPosts = () => {
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        <li>Learning React is fun!</li>
        <li>JSX makes UI easy.</li>
        <li>React Hooks are powerful.</li>
      </ul>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ImageComponent />
      <LoginForm />
      <ProfilePage />
    </div>
  );
};

export default App;
