import "./login.css";

export default function Login() {
  return (
    <div className="RegisterContainer">
    <div className="RegisterWrapper">
      <h1 className="RegisterTitle">LOG IN</h1>
      <div className="RegisterInput">
        <input className="RegisterInputText" placeholder="username or email"/>
        
        <input className="RegisterInputText" placeholder="password"/>
        <button className="Login-Btn">Log in</button>
      
        <span className="RegisterAgreement">
        DO NOT YOU REMEMBER THE PASSWORD?
        </span>
        <button className="Create-Btn">CREATE</button>
      </div>
    </div>
  </div>
  )
}
