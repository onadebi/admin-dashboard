import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useDispatch, useSelector } from "react-redux";
import { EnumThemeOptions, toggleTheme } from "../../store/slices/theme.slice";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { selectTheme } from "../../store/rootReducer";
import { IconButton, Tooltip } from "@mui/material";

const Navbar = () => {
  const selectedTheme = useSelector(selectTheme);

  const ThemeIcon =
    selectedTheme.darkMode === EnumThemeOptions.LIGHT ? (
      
          <DarkModeOutlinedIcon
            className="icon"
            titleAccess="Toggle to light theme"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(toggleTheme(EnumThemeOptions.TOGGLE))}
          />
    ) : (
          <LightModeOutlinedIcon
            className="icon"
            titleAccess="Toggle to dark theme"
            style={{ cursor: "pointer", color: "yellow" }}
            onClick={() => dispatch(toggleTheme(EnumThemeOptions.TOGGLE))}
          />
    );
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">{ThemeIcon}</div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
