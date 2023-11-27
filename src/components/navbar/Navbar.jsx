import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';


export default function Navbar() {
  return (
    <div className="Container">
        <div className="Wrapper">
            <div className="Left">
                <div className="Language">EN</div>
                <div className="SearchContainer">
                    <input className="SearchInput"/>
                    <SearchIcon/>
                </div>
            </div>
            <div className="Center">
                <div className="TitleLogo">
                    <h1>AMAZON.</h1>
                </div>
            </div>
            <div className="Right">
                <div className="MenuItem">Register</div>
                <div className="MenuItem">Sign In</div>
                <div className="MenuItem"><Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={99}>
        <ShoppingCartIcon/>
      </Badge> </Stack> </div>
            </div>
        </div>
    </div>
  )
}
