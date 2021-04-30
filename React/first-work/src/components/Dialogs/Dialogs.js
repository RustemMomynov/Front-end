import c from "./Dialogs.module.css"

const Dialogs = () => {
    return (
    <div className={c.dialogs}>
        <div className={c.dialogs__item}>
            <div className={c.dialog}>
                Connor
            </div>
            <div className={c.dialog}>
                Markus
            </div>
            <div className={c.dialog}>
                Kara
            </div>
            <div className={c.dialog}>
                Geralt
            </div>
            <div className={c.dialog}>
                Regis
            </div>
            <div className={c.dialog}>
                Dettlaff
            </div>
        </div>
    <div className={c.messages}>
        <div className={c.message}>Hello my name is Connor</div>
        <div className={c.message}>FREEDOM</div>
        <div className={c.message}>Give me your money</div>
        <div className={c.message}></div>
        <div className={c.message}></div>
        <div className={c.message}></div>
    </div>
    </div>
    
 )
}

export default Dialogs