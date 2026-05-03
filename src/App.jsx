import { useEffect, useState } from "react";

function App() {
  /*
  1.Do we always use Usestate or other hooks to store any type of data in React?

  */
  const [username, Setusername] = useState("");
  //2.If username gonna become controlled Input , why it need to be like that?
  const [userdata, Setuserdata] = useState([]);
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => Setuserdata(data));
      Setloading(false)
  }, [username]);

  return (
    <div>
      <label htmlFor="">Enter Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          Setusername(e.target.value);
          console.log(username);
        }}
      />
      <br />
      <br />
      <button onClick={() => Setloading(true)}>Submit</button>
      <br />
      <br />
      <br />
      <br />
      {loading && "Loading..."}
      {userdata && (
        <div>
          <img src={userdata.avatar_url} width="100" />
          <h2>{userdata.name}</h2>
          <p>{userdata.followers} followers</p>
        </div>
      )}
    </div>
  );
}

export default App;
