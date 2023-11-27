import "./newsletter.css";
import SendIcon from '@mui/icons-material/Send';

export default function NewSleeter() {
  return (
    <div className="NewsLetterContainer">
      <h1 className="NewsLetterTitle">NEWSLETTER</h1>
      <span className="NewsLetterDesc">Get timely updates from your favorite products.</span>
      <div className="InputContainer">
        <input className="InputText" placeholder="Your Email"></input>
        <button className="InputBtn">
          <SendIcon/>
        </button>
      </div>
    </div>
  )
}
