import c from "./Header.module.css"

const Header = () => {
    return (
    <header className={c.header}>
        <span className={c.logotype}>
        <span className={c.logo}>Social</span>
        <span className={c.Hub} >club</span>
        </span>
     </header>
    )
}

export default Header