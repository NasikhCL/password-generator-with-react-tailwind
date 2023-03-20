import './App.css';
import { useState } from "react";
function App() {
  const [passwordLength, setPasswordLength] = useState(0)
  const [password, setPassword] = useState([])


  const generatePassword  = () => {
    setPassword([])

    if(passwordLength < 4 || passwordLength > 12){
      alert('enter length between 4 and 12')
      return;
    }else{
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]\\|:;"<>,.?/~`';

    for (let i = 0; i < passwordLength; i++) {
        const random = Math.floor(Math.random() * charset.length)
        setPassword(prev=> [...prev , charset[random]])
    }
    setPassword(prev=> prev.join(''))
  }
}

  return (
    <div className="App w-full h-screen bg-gray-700 flex justify-center items-center">
      <div className='flex flex-col items-center w-[300px] sm:w-[400px] lg:w-[600px] py-[20px] bg-gray-200'>
        <h2 className='text-2xl text-gray-700 font-semibold'>Password Generator</h2>
        <div className='w-[90%] mb-[10px]'>
          <div className='bg-white w-full h-[50px] mb-[100px] flex justify-center items-center rounded'>{password.length > 0 ? password : 'Password Shows Here!'}</div>
          <input type="number" className='w-full pl-[10px] bg-transparent border border-blue-700 rounded' placeholder='Enter your Password Length' onChange={(e)=> setPasswordLength(e.target.value)}/>
        </div>
        <div className='w-[90%] h-[50px] rounded bg-blue-900 font-medium text-white flex justify-center items-center cursor-pointer hover:bg-blue-700' onClick={generatePassword}>Generate Password</div>

      </div>
    </div>
  );
}

export default App;
