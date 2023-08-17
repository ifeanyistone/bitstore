import React from 'react'
import Navbar from "./Navbar";
import item4 from "../assets/item4.jpg"
import item2 from "../assets/item2.jpg"
import item3 from "../assets/item3.jpg"
import item1 from "../assets/item1.jpg";
import Button from "./Button";
import AddandMinus from "./AddandMinus";

import { useContext, useEffect, useReducer, useRef, useState} from "react";
import Men from "./Men";
import { LogInContext } from "../App";


// const data = [item2]

const Home = (props) => {

      const Oldstate = {item1,item2, item3}

      const [windowWidth, setWindowWidth] = useState(window.innerWidth)
      const [state, setState] = useState({name:"Chima", school:"Unilag", age:21})

      const handleEvent =()=>{
            setWindowWidth(window.innerWidth)
      }

      useEffect(()=>{
                  window.addEventListener('resize', handleEvent)
      },[])
      //  const LoggedIn = useContext(LogInContext)

      // useEffect(()=>{
      //       console.log("hey effect")
      // })


      // const persons = ["henry", "buchi","kenny", "joy", "age", "NO","PO"]


      // const persons1 = persons.forEach((person)=>{
      //       return person 
      // })

      // console.log(persons)


      // const name = []
      //       persons.filter(person=>{ 
      //             if(person.length <= 2){
      //             name.push(person)
      //             }}
      //       )
      //             console.log(name)
      // const newPerson = persons.filter((person)=>person.length < 4)
      //   console.log(newPerson)

//         const array1 = persons.map(person=> (person === "2 " ?  person : "hello"))
//         console.log(array1)     

            const changeImg = ()=>{
                const ft = document.getElementById('front')
                        ft.innerText= "cart deleted"
                  
            }


  return (
    
        <div>
            
             <Navbar />
            <main className="grid grid-cols-2  pl-24 pt-20 mt-8 gap-24 justify-center">
                  

                  <div className="grid grid-rows-2 gap-8 ">

                        <div className="grid col-span-4 md:col-2"> 
                         <p>Windows Width Changing <h2>{windowWidth}</h2></p>
                            <img id="item1" src={item1}  alt="" className="rounded-2xl"  />
                        </div>
                  
                        <div className="grid grid-cols-4 md:col-span-2 gap-8 ">  

                              <div className=" " >
                                    <img src={item1} className="h-28 w-32 rounded-2xl"/>
                              </div>
                              <div className="" >
                                    <img src="/images/item1.jpg" className=" h-28 w-32 rounded-2xl"/>
                              </div>                    
                              <div className="" >
                                    <img src={item2} className=" h-28 w-32 rounded-2xl"/>
                              </div>                    
                              <div className=" ">
                                    <img src={item4} className="h-28 w-32 rounded-2xl"/>
                              </div>                  
                        </div>
                  </div>

                  <div className="flex pt-20">
                              
                        <div>
                              <span className="text-blue-500 hover:text-gray-300 duration-500">SPEEDOFF COMPANY </span><br/><br/>                     
                              <span className="font-bold text-4xl "> All Limited Edition 
                              <br></br>Products
                              </span><br/><br/>

                              <p className="text-gray-500" > 
                                    The Quality of Product designed for you is awesome <br/>
                                    we deal with various landscape and model <br/>
                                    get in touch for a genuis.
                              </p> <br/><br/>

                               <p>
                                 <span className="  font-bold text-4xl">$250 </span> 
                                 <span className=" p-2 ml-8 rounded justify-center bg-blue-100 text-blue-600">50%</span> <br/>
                                 
                                                                            
                              <span className="text-gray-300 text-2xl " >$500</span>
                              </p> <br/>

                              <div className="flex gap-4">
                                    <p><AddandMinus /></p> <p><Button name="Add to cart"  onClick={changeImg}/></p>
                                    {/* <p>{state.name}</p> */}
                                    {/* <button onClick={changeImg}>click</button>
                                    <div id='front'>Hello world</div> */}
                                   
                              </div>
                             
                        </div>
                  </div> 
            </main>     
        </div>
    
  )
}

export default Home;