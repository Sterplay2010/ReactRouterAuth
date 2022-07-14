import {Button} from "primereact/button";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  let navigate = useNavigate();

  const loginUser = () => {
    navigate(`/login`);
  }

  return(
  <div className='sm:h-screen md:h-screen md:flex md:justify-content-center' style={{background:'#EAF3FB'}}>
    <div>
      <div className='grid container flex justify-content-center mt-2'>
        <div className="text-lg md:flex md:justify-content-center">Esta es una landing page</div>
      </div>
      <div className='grid container flex justify-content-center mt-2'>
        <Button onClick={loginUser} label="Login" aria-label="Login" className="md:flex md:justify-content-center"/>
      </div>
    </div>
  </div>
  )
}