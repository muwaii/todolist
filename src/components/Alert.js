import { useEffect } from "react";
import './Alert.css'

function Alert(props) {
    const { alertMsg, alertToggle } = props

    useEffect(() => {
        
        var x = document.querySelector('#alert-ele');
        x.className = "show";

        const timeOut = setTimeout(() => { 
            x.className = x.className.replace("show", ""); 
        }, 3000);

        
        return (() => clearTimeout(timeOut))
    }, [alertToggle])

    return <div id='alert-ele'>{alertMsg}</div>
}
export default Alert;