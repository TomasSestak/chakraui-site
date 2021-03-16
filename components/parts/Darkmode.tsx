import {Switch, FormControl, FormLabel} from "@chakra-ui/react"

const Darkmode = () => {

    const darkmode3 = () => {
        document.querySelectorAll('.header .welcometext .footer').forEach((item) => {
            item.classList.toggle('dark-mode')
        })
    }

    const darkmode2 = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    const darkmode = () => {
        document.getElementsByClassName('header')[0].classList.toggle('dark-mode')
        document.getElementsByClassName('welcometext')[0].classList.toggle('dark-mode')
        document.getElementsByClassName('footer')[0].classList.toggle('dark-mode')
    }

    return (
        /* <label className="switch">
            <input type="checkbox" onClick={darkmode}/>
            <span className="slider round"></span>
        </label> */
        <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
                Darkmode
            </FormLabel>
            <Switch id="email-alerts" colorScheme="red" onChange={darkmode}/>
        </FormControl>
    )
};

export default Darkmode;
