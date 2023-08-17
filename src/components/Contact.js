import { NavLink } from "react-router-dom"
import Button from "./Button"
import Navbar from "./Navbar"

const Contact = () => {
  return (
    <div >
         <Navbar />
   
        <main className=" m-20 p-20 justify-items-center">
            <form>
              <label>Fullname:</label><br/>
                <input id="fullname" type="text" className="px-8 py-1 "/><br/>

              <label>Organisation:</label><br/>
                <input id="organisation" type="text" className="px-8 py-1 "/><br/>

              <label>Email:</label><br/>
                <input id="email" type="email" className="px-8 py-1"/><br/>

              <label>Request:</label><br/>
                <textarea id="request " type="text" className="px-2 py-1"/><br/><br/>

                <Button name="Submit Request"/>
            </form>
        </main>
      
    </div>
  )
}

export default Contact