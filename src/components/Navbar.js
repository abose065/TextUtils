import React, {useState} from 'react'
// import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return {r, g, b};
  }
  const handleSearchWord = () => {
    let searchText = document.getElementById("searchText").value;
    if (searchText.length > 0) {
      document.getElementById("previewText").innerHTML = document.getElementById("myBox").value.replaceAll(searchText, "<mark>" + searchText + "</mark>");
    }else{
      document.getElementById("previewText").innerHTML = document.getElementById("myBox").value;
    }
  }
  const [colorPicker, setColorPicker] = useState("#FFFFFF");
  const handleThemeColor = (event) => {
    setColorPicker(event.target.value);
    const allElements = document.querySelectorAll("body *");
    let {r,g,b} =  hexToRgb(colorPicker);
    let textColor = '#' + Number(255-r) + Number(255-g) + Number(255-b);
    allElements.forEach(element => {
      element.style.setProperty('color', textColor, 'important');
    });
    document.body.style.backgroundColor = colorPicker;
  }

  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <Link className="nav-link active" aria-current="page" id='homeId' to="/">Home</Link> */}
                  <a className="nav-link active" aria-current="page" id='homeId' href="#">Home</a>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li> */}
              </ul>
              <div className='mx-3'>
                <input type="color" onChange={handleThemeColor} className={`form-control form-control-color border border-${props.mode === "light" ? "Light" : "Dark"}`} id="myColor" value={colorPicker} title="Choose a color"/>
              </div>
              <div className="form-check form-switch mx-3">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"}`} htmlFor="switchCheckDefault">{props.mode === "light" ? "Light" : "Dark"} Mode</label>
              </div>
              <form className="d-flex">
                <input className="form-control me-2" type="search" id='searchText' onChange={handleSearchWord} placeholder="Word Search" aria-label="Search"/>
              </form>
            </div>
          </div>
      </nav>
    )
}

// Navbar.defaultProps = {
//     title: "TitleTextHere",
//     aboutText: "About"
// }

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }