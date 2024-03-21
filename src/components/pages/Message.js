import { useEffect, useState } from'react'

import styles from './Message.module.css'

function Message({type, text}){
    const [visible, setVisible] = useState(true)

   useEffect(() => {
    if(!text){
        setVisible(false)
        return
    }
    setVisible(true)

    const timeout = setTimeout(() => {
        setVisible(false)
        
    }, 3000)
    return () => clearTimeout(timeout)

   },[text])

    return (
        <>
        {visible && (
            <div className={`${styles.message} ${styles[type]}`}>
                 {text}
            </div>
        )}
        
        </>
    )
}

export default Message