import React, { useState, useEffect } from "react";
import '../../css/app.css';
import { Link } from "@inertiajs/inertia-react";
export default function Nav({children}) {

  const [index, setIndex] = useState(0);
  const phrases = ["Search for tours", "Search for destinations", "Explore Kashmir", "Search for best deals"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Rotate phrases
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [phrases.length]);

  return (
    <div>
        <div id='nav' className="row justify-content-evenly align-items-center  container-fluid m-0 fixed-top p-3">
            <div className="col">
              <img className='mx-3' src="https://media1.thrillophilia.com/white-thrillo-logo.png" width={200} alt="" srcset="" />
            </div>
            <div className="col text-white 	d-none d-md-block mx-5 me-5"><input type="text"   placeholder={phrases[index]}   style={{background:'rgba(0, 0, 0, 0.237)'}} className='form-control rounded-pill text-white fw-medium' /></div>
            <div className="col text-white text-end me-3">
              <Link href="/login" className="fw-medium text-white text-decoration-none">Login</Link> 
            </div>
        </div>

        <main>
            {children}
        </main>
    </div>
  )
}
