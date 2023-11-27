import "./register.css";

export default function Register() {
  return (
    <div className="RegisterContainer">
      <div className="RegisterWrapper">
        <h1 className="RegisterTitle">CREATE AN ACCOUNT</h1>
        <div className="RegisterInput">
          <input className="RegisterInputText" placeholder="name"/>
          <input className="RegisterInputText" placeholder="last name"/>
          <input className="RegisterInputText" placeholder="username"/>
          <input className="RegisterInputText" placeholder="email"/>
          <input className="RegisterInputText" placeholder="password"/>
          <input className="RegisterInputText" placeholder="confirm password"/>
          <span className="RegisterAgreement">
          By creating an account, I consent to the processing of my personal
            data in accordance with the PRIVACY POLICY
          </span>
          <button className="Create-Btn">CREATE</button>
        </div>
      </div>
    </div>
  )
}
