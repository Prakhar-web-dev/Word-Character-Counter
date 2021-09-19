// import { getSuggestedQuery } from '@testing-library/dom';
import React,{useState} from 'react'

export default function About() {

    const [mystyle,setmystyle] = useState({
    color: "black", 
    backgroundColor : "white"
     })
    // let  mystyle = {
    //     color: props.mode ==='dark'?'white':'black',
    //     backgroundColor : props.mode === 'dark'?'grey':'white'
    // }

    const [btnText, setBtnText] = useState("Enable Dark mode")

     const togggleStyle = ()=>{
         if(mystyle.color==="black"){
             setmystyle({
                 color:"white",
                 backgroundColor:"black",
                
                 border: "1px solid white"
             })
             setBtnText ("Enable light mode")
         }
         else{
            setmystyle({
                color:"black",
                backgroundColor:"white",
                border: "1px solid white"
            })
            setBtnText ("Enable dark mode")
         }
     }
    return (
        <div className="container" style={mystyle}>
            <h3>About Us</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " style={mystyle} 
                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body style={mystyle}">
                            {/* <p>Analyze Your Text</p>  */}
                        TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,character countor time taken.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style ={mystyle} type="button" data-bs-toggle="collapse"
                         data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle}
                     aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body style={mystyle}">
                            {/* <strong>This is the second item's accordion body.</strong>  */}
                          TextUtils is a free character counter tool that provides instant haracter count & word count statistics for a given test.
                          TextUtils reports the number of words and characters.thus it is suitable for writing tetx with word 
                          character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" 
                        data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} 
                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body style={mystyle}">
                           This word counter software works in any web browsers such as chrome,firefox,internet explorer,safari
                           Opera.It suits to count characters in facebook ,blog books,excel document,pdf document,essays,etc.
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn my-2">
            <button type="button" onClick={togggleStyle} className="btn btn-secondary">{btnText}</button>
            </div>
            
        </div>
    )
}
