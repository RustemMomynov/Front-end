import c from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={c.nav}>
        <div><a className={c.nav_a} href="">Profile</a></div>
        <div><a className={c.nav_a} href="">Messages</a></div>
        <div><a className={c.nav_a} href="">News</a></div>
        <div><a className={c.nav_a} href="">Music</a></div>
        <div><a className={`${c.nav_a} ${c.navi_a}`} href="">Settings</a></div>
      </nav>
    )
}

export default Navbar