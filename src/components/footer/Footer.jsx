import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="LeftContainer">
        <div className="FooterLogo">
          <h1>AMAZON</h1>
        </div>
        <span className="FooterDesc">
        There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </span>
        <div className="SocialContainer">
          <div className="SocialIcon1" >
           <FacebookIcon/>
             
          </div>
          <div className="SocialIcon2">
           <InstagramIcon/>
           
          </div>
          <div className="SocialIcon3" >
           <TwitterIcon/>
          </div>
          <div className="SocialIcon4" >
           <PinterestIcon/>
          </div>
        </div>
        </div>
        <div className="CenterContainer">
          <h1 className="CenterTitle">Useful Links </h1>
          <ul className="FooterMenu">
            <li>Home</li>
            <li>Cart</li>
            <li>ManFashion</li>
            <li>WomenFashion</li>
            <li>Accessories</li>
            <li>MyAccount</li>
            <li>OrderTracking</li>
            <li>Wishlist</li>
            <li>Terms</li>
            
          </ul>
        </div>
        <div className="RightFooterContainer">
          <h1 className="RightContainerTitle">Contact</h1>
          <div className="RightContainerItem1">
           <LocationOnIcon/>
           Dhanbad , Jharkhand , India
          </div>
          <div className="RightContainerItem2">
           <LocalPhoneIcon/>
           +918002311429
          </div>
          <div className="RightContainerItem3">
           <MarkunreadIcon/>
           pk8002311429@gmail.com
          </div>
          <div className="RightContainerItem4">
           <img className="RightContainerImg" src="./assets/payment.png" alt=""/>
          </div>
        </div>
      </div>
    
  )
}
