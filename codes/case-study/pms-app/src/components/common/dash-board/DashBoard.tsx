//use this design
/**
 * 	     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">product management system</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={`/home`}>
                <button className="nav-link active">
                  Home
                  <span className="visually-hidden">(current)
                  </span>
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/products/all`}>
                <button className="nav-link">products</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/products/add`}>
                <button className="nav-link">
                  add product
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                Logout
              </button>
              <button className="nav-link">
                Login
              </button>
            </li> 
          </ul >
        </div >
      </div >
    </nav >
 */

import { Link } from "react-router-dom"


const DashBoard = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">product management system</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={`/home`}>
                <button className="nav-link active">
                  Home
                  <span className="visually-hidden">(current)
                  </span>
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/products/all`}>
                <button className="nav-link">products</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/products/add`}>
                <button className="nav-link">
                  add product
                </button>
              </Link>
            </li>
            {/* <li className="nav-item">
              <button className="nav-link">
                Logout
              </button>
              <button className="nav-link">
                Login
              </button>
            </li> */}
          </ul >
        </div >
      </div >
    </nav >
  )
}

export default DashBoard

// function RouterLink(props:any) {
//   return <a href={props.to} onClick={(e)=>e.preventDefault()}>props.children</a>
// }