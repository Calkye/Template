import './css/NavBar.css' // Naming convention component name is same name for css file


// Nav Bar Compoent
function NavBar(){
  return(
    <>
      <nav className='Main-Nav'>
        <ul>
          <li><h2>Logo</h2></li>
          <div className="Nav-Links">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact us</li>
          </div>
    
        </ul>
      </nav>
    </>
  )
}

export default NavBar