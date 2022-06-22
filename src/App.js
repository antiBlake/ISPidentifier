import React from 'react';



function App() {
  const [formData, setFormData] = React.useState({
    phone: "",
  })
  const Networks = [['803' ,'806','703', '706', '813', '816', '810', '814', '903', '906'], 
  ['805', '807','705', '815', '811', '905'],
  ['802', '808',' 708', '704', '812', '701', '901', '902', '004'], 
  ['809', '818', '817', '909']
]

const prefix = formData.phone.substring(0,3) 
for(let index = 0; index < Networks.length; index++){
  var {styles, btntext, ispimage, ispname } = false
  
  if(Networks[0].includes(prefix)){
    styles = {
      backgroundColor: "#FFC325", color: "#ffffff"
    }
    btntext ="MTN NIGERIA"
    ispimage ="mtn.png"
    ispname = "MTN"
} else if(Networks[1].includes(prefix)){
  styles = {
    backgroundColor: "#57B348", color: "#ffffff"
  }
  btntext ="GLO NETWORK"
  ispimage ="glo.png"
  ispname = "GLO"
}else if(Networks[2].includes(prefix)){
  styles = {
    backgroundColor: "#E20010", color: "#ffffff"
  }
  btntext ="AIRTEL NETWORK"
  ispimage ="airtel.png"
  ispname = "AIRTEL"
}else if(Networks[3].includes(prefix)){
  styles = {
    backgroundColor: "#006E53", color: "#ffffff"
  }
  btntext ="9MOBILE NETWORK"
  ispimage ="9mobile.png"
  ispname = "9MOBILE"
  
}else{
  btntext="Check"

}
}


  function handleSubmit(event) {
    event.preventDefault()

  }
  function handleChange(event){
    const {name, value,} = event.target
    setFormData(prevData=>{
      return{
      ...prevData, 
      [name]: value
      
    }
    })
  }
  //CSS Styling in JS
  
  return (
      <div className="form-container">
        <h1 className='identifyheading'>Identify Your Network Provider</h1>
          <form className="form" onSubmit={handleSubmit}>
          <span className='phonenumber'>Enter Your Phone Number</span>
          <div className='inputcontainer'>
          <input 
                  type="text" 
                  placeholder="Input Phone Number"
                  className="form--input-disabled"
                  disabled
                  value="+234"
              />
              <input 
                  type="text" 
                  placeholder="Your Number"
                  className="form--input"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="11"
              />
              </div>
              {ispimage && ispname && <div className='networkprovider'>
                <img src={`images/${ispimage}`} className='netimg' />
                <span className='networkp'>Your Network Provider is {ispname}</span>
              </div>}

              <button 
                  className="form--submit"
                  style={styles}
              >
                  {btntext }
              </button>
          </form>
      </div>
  );
}

export default App;

