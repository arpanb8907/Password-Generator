import React, { useCallback, useEffect, useState } from 'react';

export default function Home() {
  
  const [length,setlength] = useState(8)
  const [num_checkbox,setnum_checkbox] = useState(false)
  const [char_checkbox, setchar_checkbox] = useState(false)
  const [text,settext] = useState("")

  useEffect(()=>{
    fun()
  },[length,num_checkbox,char_checkbox])

  const fun = useCallback(()=>{
    generate_password()
  },[length,num_checkbox,char_checkbox])

  const generate_password = ()=>{
    
    if(length<3){
      settext("")
      return 
    }
    
    
    let str1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let str2 = "0123456789" 
    let str3 = "~!@#$%^&*()-_=+[{]}\\|:',<.>?"
    
    let s1 = str1[Math.floor(Math.random()*str1.length)]
    let len = length-1 
    let comb_s = str1 
    if(num_checkbox){
      s1+= str2[Math.floor(Math.random()*str2.length)]
      len--
      comb_s+=str2 
    }
    if(char_checkbox){
      
      s1+= str3[Math.floor(Math.random()*str3.length)]
      len--
      comb_s+=str3 
    }
    
    let rem_s = Array.from({length:len},()=>comb_s[Math.floor(Math.random()*comb_s.length)]).join('')

    
    
    rem_s+=s1
    let password = rem_s.split('').sort(()=>Math.random()-0.5).join('')
    
    settext(password)
   
    
   
  
    
  }
  
  const copypaste = () => {
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Text copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }

    //alert("copied")
  }


  return (
    <div>
       <div className="flex flex-col justify-center items-center min-h-screen bg-slate-800">
        <div className="relative w-full max-w-lg p-6 bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
          <h1 className="text-4xl font-bold text-center text-white mb-2">
            Password Generator
          </h1>
          <p className="text-md text-center text-gray-300">
            Generate strong and secure passwords effortlessly!
          </p>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-20"></div>
        </div>
      

      <div className="flex justify-center mt-3" >
        <div className="w-full max-w-md">
          <div className="flex items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <input
              type="text"
              
              className="flex-1 border-none p-4 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder=""
              aria-label="Recipient's username"
              value={text}
              onChange={(e)=>{
                settext(e.target.value)
                
                
              }}
              disabled
            />
            <button
              className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-4 rounded-r-lg font-semibold shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
              type="button"
              id="button-addon2"

              onClick={copypaste}
              
            >
              Copy
            </button>



          </div>

          {/* Range Slider Section */}
          <div className="flex items-center mt-5">
            <input
              type="range"
              min="8"
              max="25"
              step="1"
              id="customRange3"
              className="appearance-none w-64 h-2 bg-gray-700 rounded-lg cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${((length - 8) / (25 - 8)) * 100}%, #4a5568 ${((length - 8) / (25 - 8)) * 100}%)`
              }}
              value={length}
              onChange={(e) =>{
                
                setlength(e.target.value)
                
                
              }}
            />
            <span className="ml-3 text-white">{length}</span>

            <span className="text-white mx-2">Length</span>

            <div className="flex space-x-2 ml-2">
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-1 accent-blue-500" value={num_checkbox} onChange={()=>{
                  setnum_checkbox(num_checkbox===true? false : true)
                  
                  
                }}/>
                Numbers
              </label>
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-1 accent-blue-500" value={char_checkbox} onChange={()=>{
                  setchar_checkbox(char_checkbox===true?false:true)
                  
                 
                }}/>
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
}
