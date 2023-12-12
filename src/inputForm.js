// CropRecommendationForm.js
import Grid from '@mui/material/Grid';
import "./inputForm.css"
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import fox from "./foxy.png";
import React, { useState, useEffect }  from 'react';
import apple from "./data/Crops/apple.jpg";
import banana from "./data/Crops/banana.jpg";
import blackgram from "./data/Crops/blackgram.jpg";
import chickpea from "./data/Crops/chickpea.jpg";
import coconut from "./data/Crops/coconut.jpg";
import coffee from "./data/Crops/coffee.jpg";
import grapes from "./data/Crops/grapes.jpg";
import jute from "./data/Crops/jute.jpg";
import kidneybeans from "./data/Crops/kidneybeans.jpg";
import lentil from "./data/Crops/lentil.jpg";
import maize from "./data/Crops/maize.jpg";
import mango from "./data/Crops/mango.jpg";
import mothbeans from "./data/Crops/mothbeans.jpg";
import mungbean from "./data/Crops/mungbean.jpg";
import muskmelon from "./data/Crops/muskmelon.jpg";
import orange from "./data/Crops/orange.jpg";
import papaya from "./data/Crops/papaya.jpg";
import pigeonpeas from "./data/Crops/pigeonpeas.jpeg";
import pomegranate from "./data/Crops/pomegranate.jpg";
import rice from "./data/Crops/rice.jpg";
import watermelon from "./data/Crops/watermelon.jpg";
import cotton from "./data/Crops/cotton.jpg";


import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    // other typography settings...
  },
  // other theme settings...
});
// import './inputForm.css';
const imageMap = {
  "apple" : apple,
  "banana" : banana,
  "blackgram": blackgram,
  "chickpea": chickpea,
  "coconut":coconut,
  "coffee" : coffee,
  "grapes" : grapes,
   "jute": jute, 
   "kidneybeans":kidneybeans,
   "lentil":lentil, 
   "maize":maize, 
   "mango":mango ,
   "mothbeans":mothbeans, 
   "mungbean":mungbean, 
   "orange":orange, 
   "papaya":papaya, 
   "pigeonpeas":pigeonpeas, 
   "pomegranate":pomegranate, 
   "rice":rice,
   "muskmelon":muskmelon,
   "watermelon":watermelon,
    "cotton": cotton,
}


function InputForm() {
    const data = {
        "Andaman and Nicobar Islands": ["Port Blair"],
        "Andhra Pradesh": ["Adoni", "Amaravati", "Anantapur", "Chandragiri", "Chittoor", "Dowlaiswaram", "Eluru", "Guntur", "Kadapa", "Kakinada", "Kurnool", "Machilipatnam", "Nagarjunakoṇḍa", "Rajahmundry", "Srikakulam", "Tirupati", "Vijayawada", "Visakhapatnam", "Vizianagaram", "Yemmiganur"],
        "Arunachal Pradesh": ["Itanagar"],
        "Lakshadweep" : ["Lakshadweep"],
        "Assam": ["Dhuburi", "Dibrugarh", "Dispur", "Guwahati", "Jorhat", "Nagaon", "Sivasagar", "Silchar", "Tezpur", "Tinsukia"],
        "Bihar": ["Ara", "Barauni", "Begusarai", "Bettiah", "Bhagalpur", "Bihar Sharif", "Bodh Gaya", "Buxar", "Chapra", "Darbhanga", "Dehri", "Dinapur Nizamat", "Gaya", "Hajipur", "Jamalpur", "Katihar", "Madhubani", "Motihari", "Munger", "Muzaffarpur", "Patna", "Purnia", "Pusa", "Saharsa", "Samastipur", "Sasaram", "Sitamarhi", "Siwan"],
        "Chandigarh": ["Chandigarh"],
        "Chattisgarh": ["Ambikapur", "Bhilai", "Bilaspur", "Dhamtari", "Durg", "Jagdalpur", "Raipur", "Rajnandgaon"],
        "Daman and Diu": ["Daman", "Diu"],
        "Dadra and Nagar Haveli":["Silvassa"],
        "Delhi": ["Delhi", "New Delhi"],
        "Goa": ["Madgaon", "Panaji"],
        "Gujarat": ["Ahmadabad", "Amreli", "Bharuch", "Bhavnagar", "Bhuj", "Dwarka", "Gandhinagar", "Godhra", "Jamnagar", "Junagadh", "Kandla", "Khambhat", "Kheda", "Mahesana", "Morbi", "Nadiad", "Navsari", "Okha", "Palanpur", "Patan", "Porbandar", "Rajkot", "Surat", "Surendranagar", "Valsad", "Veraval"],
        "Haryana": ["Ambala", "Bhiwani", "Chandigarh", "Faridabad", "Firozpur Jhirka", "Gurugram", "Hansi", "Hisar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Panipat", "Pehowa", "Rewari", "Rohtak", "Sirsa", "Sonipat"],
        "Himachal Pradesh": ["Bilaspur", "Chamba", "Dalhousie", "Dharmshala", "Hamirpur", "Kangra", "Kullu", "Mandi", "Nahan", "Shimla", "Una"],
        "Jammu and Kashmir": ["Anantnag", "Baramula", "Doda", "Gulmarg", "Jammu", "Kathua", "Punch", "Rajouri", "Srinagar", "Udhampur"],
        "Jharkhand": ["Bokaro", "Chaibasa", "Deoghar", "Dhanbad", "Dumka", "Giridih", "Hazaribag", "Jamshedpur", "Jharia", "Rajmahal", "Ranchi", "Saraikela"],
        "Karnataka": ["Badami", "Ballari", "Bengaluru", "Belagavi", "Bhadravati", "Bidar", "Chikkamagaluru", "Chitradurga", "Davangere", "Halebid", "Hassan", "Hubballi-Dharwad", "Kalaburagi", "Kolar", "Madikeri", "Mandya", "Mangaluru", "Mysuru", "Raichur", "Shivamogga", "Shravanabelagola", "Shrirangapattana", "Tumakuru", "Vijayapura"],
        "Kerala": ["Alappuzha", "Vatakara", "Idukki", "Kannur", "Kochi", "Kollam", "Kottayam", "Kozhikode", "Mattancheri", "Palakkad", "Thalassery", "Thiruvananthapuram", "Thrissur"],
        "Ladakh": ["Kargil", "Leh"],
        "Madhya Pradesh": ["Balaghat", "Barwani", "Betul", "Bharhut", "Bhind", "Bhojpur", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dr. Ambedkar Nagar (Mhow)", "Guna", "Gwalior", "Hoshangabad", "Indore", "Itarsi", "Jabalpur", "Jhabua", "Khajuraho", "Khandwa", "Khargone", "Maheshwar", "Mandla", "Mandsaur", "Morena", "Murwara", "Narsimhapur", "Narsinghgarh", "Narwar", "Neemuch", "Nowgong", "Orchha", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Sarangpur", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Ujjain", "Vidisha"],
        "Maharashtra": ["Ahmadnagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Bhusawal", "Beed", "Buldhana", "Chandrapur", "Daulatabad", "Dhule", "Jalgaon", "Kalyan", "Karli", "Kolhapur", "Mahabaleshwar", "Malegaon", "Matheran", "Mumbai", "Nagpur", "Nanded", "Nashik", "Osmanabad", "Pandharpur", "Parbhani", "Pune", "Ratnagiri", "Sangli", "Satara", "Sevagram", "Solapur", "Thane", "Ulhasnagar", "Vasai-Virar", "Wardha", "Yavatmal"],
        "Manipur": ["Imphal"],
        "Meghalaya": ["Cherrapunji", "Shillong"],
        "Mizoram": ["Aizawl", "Lunglei"],
        "Nagaland": ["Kohima", "Mon", "Phek", "Wokha", "Zunheboto"],
        "Odisha": ["Balangir", "Baleshwar", "Baripada", "Bhubaneshwar", "Brahmapur", "Cuttack", "Dhenkanal", "Kendujhar", "Konark", "Koraput", "Paradip", "Phulabani", "Puri", "Sambalpur", "Udayagiri"],
        "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
        "Punjab": ["Amritsar", "Batala", "Chandigarh", "Faridkot", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Nabha", "Patiala", "Rupnagar", "Sangrur"],
        "Rajasthan": ["Abu", "Ajmer", "Alwar", "Amer", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittaurgarh", "Churu", "Dhaulpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Jodhpur", "Kishangarh", "Kota", "Merta", "Nagaur", "Nathdwara", "Pali", "Phalodi", "Pushkar", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi", "Tonk", "Udaipur"],
        "Sikkim": ["Gangtok", "Gyalshing", "Lachung", "Mangan"],
        "Tamil Nadu": ["Arcot", "Chengalpattu", "Chennai", "Chidambaram", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanniyakumari", "Kodaikanal", "Kumbakonam", "Madurai", "Mamallapuram", "Nagappattinam", "Nagercoil", "Palayamkottai", "Pudukkottai", "Rajapalayam", "Ramanathapuram", "Salem", "Thanjavur", "Tiruchchirappalli", "Tirunelveli", "Tiruppur", "Thoothukudi", "Udhagamandalam", "Vellore"],
        "Telangana": ["Hyderabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nizamabad", "Sangareddi", "Warangal"],
        "Tripura": ["Agartala"],
        "Uttar Pradesh": ["Agra", "Aligarh", "Amroha", "Ayodhya", "Azamgarh", "Bahraich", "Ballia", "Banda", "Bara Banki", "Bareilly", "Basti", "Bijnor", "Bithur", "Budaun", "Bulandshahr", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad-cum-Fatehgarh", "Fatehpur", "Fatehpur Sikri", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Lakhimpur", "Lalitpur", "Lucknow", "Mainpuri", "Mathura", "Meerut", "Mirzapur-Vindhyachal", "Moradabad", "Muzaffarnagar", "Partapgarh", "Pilibhit", "Prayagraj", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Shahjahanpur", "Sitapur", "Sultanpur", "Tehri", "Varanasi"],
        "Uttarakhand": ["Almora", "Dehra Dun", "Haridwar", "Mussoorie", "Nainital", "Pithoragarh"],
        "West Bengal": ["Alipore", "Alipur Duar", "Asansol", "Baharampur", "Bally", "Balurghat", "Bankura", "Baranagar", "Barasat", "Barrackpore", "Basirhat", "Bhatpara", "Bishnupur", "Budge Budge", "Burdwan", "Chandernagore", "Darjeeling", "Diamond Harbour", "Dum Dum", "Durgapur", "Halisahar", "Haora", "Hugli", "Ingraj Bazar", "Jalpaiguri", "Kalimpong", "Kamarhati", "Kanchrapara", "Kharagpur", "Cooch Behar", "Kolkata", "Krishnanagar", "Malda", "Midnapore", "Murshidabad", "Nabadwip", "Palashi", "Panihati", "Purulia", "Raiganj", "Santipur", "Shantiniketan", "Shrirampur", "Siliguri", "Siuri", "Tamluk", "Titagarh"]
    }

    const [stateSelected, setStateSelected] = useState('');
    const [districtOptions, setDistrictOptions] = useState([]);
    const [cropImage, setCropImage] = useState(null); // State to hold the image source

    useEffect(() => {
      // console.log("state::::::::::::" + stateSelected);
      if (stateSelected) {
        const optionsList = data[stateSelected];
        setDistrictOptions(optionsList || []);
    }
    }, [stateSelected]);

    const handleStateSelected = (e) => {
        setStateSelected(e.target.value);
    }


    function predict() {
        let nitrogen = parseFloat(document.getElementById("nitrogen").value);
      
        let phosphorous = parseFloat(document.getElementById("phosphorous").value);
      
        let potassium = parseFloat(document.getElementById("potassium").value);
      
        let ph = parseFloat(document.getElementById("ph").value);
      
        let state = (document.getElementById("inputState").value).toString();
      
        let district = document.getElementById("inputDistrict").value.toString();
      
        let rainfall = parseFloat(document.getElementById("inputRainfall").value);
      
        // Get the values above, put it in a json object and send it to the backend endpoint localhost:8000/predict using fetch
      
        let inputs_ = {
          nitrogen: nitrogen,
          phosphorous: phosphorous,
          potassium: potassium,
          ph: ph,
          state: state,
          district: district,
          rainfall: rainfall,
        };

        console.log("Inputs::::" + JSON.stringify(inputs_));

        fetch("http://localhost:8000/predict", {
          // mode: 'no-cors',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(inputs_),
        })

          .then((response) => {
            console.log("response ok? " +response.ok)
            console.log("Response status code: " + response.status);
            return response.json()
          })

          .then((data) => {
            console.log("data : "+data)
            // const imageUrl = `./foxy.png`; // Construct the image URL
            let crop = imageMap[data["result"]]
            setCropImage(crop);
            console.log(typeof data["result"])
            document.getElementById("prediction").innerHTML = data["result"];
            // const image = new Image();
            // // image.src = "./data/Crops/" + data.result + ".jpg";
            // image.src = {fox};
            // image.height = 250;
            // console.log(image.src);
      
            // let imageContainer = document.getElementById("imageContainer");
            // while (imageContainer.firstChild) {
            //   imageContainer.removeChild(imageContainer.firstChild);
            // }
            // imageContainer.appendChild(image);
      
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        
      }



  return (
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#87CEEB' }}>
    //   <div style={{ margin: '10px 10px 10px 10px', backgroundColor: '#E2725B' }}>
    //     <div style={{ margin: '90px 10px 10px 10px' }} className="container-fluid">
    //       <h3>CROP RECOMMENDATION</h3>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#2BAE66FF' }}>
    <div style={{ backgroundColor: '#FCF6F5FF', width :'70%' }}>
      <div style={{ margin: '10px' }} className="container-fluid">
        <h1 className = "crop-header" style={{ textAlign: 'center' }}>CROP RECOMMENDATION</h1>
          <br />

          {/* <Input/> */}

          {/* Input fields */}

          <div className="input-group mb-3 custom-input">
            <label htmlFor="nitrogen">Nitrogen</label>
            <input
              type="text"
              placeholder="Nitrogen content of the soil: float"
              id="nitrogen"
            />
          </div>


          {/* <div className="input-group mb-3" style={{ marginBottom: '2px', alignItems: 'left' }}>
            <label className="input-group-text" style={{ width: '30%', fontWeight: '700' , marginRight: "10px", alignItems: 'left'}} htmlFor="nitrogen">Nitrogen</label>
            <input
              type="text"
              placeholder="Nitrogen content of the soil: float"
              id="nitrogen"
              style={{ width: '70%', marginBottom: '5px', marginTop: "10px" }}
            />
          </div> */}

          {/* <div className="input-group mb-3">
            <span className="input-group-text" style={{"marginRight" : '10px'}}>Nitrogen</span>
            <input
              type="text"
              className="form-control"
              placeholder="Nitrogen content of the soil: float"
              id="nitrogen"
            />
          </div> */}
          
          <div className="input-group mb-3 custom-input" style={{ marginBottom: '2px' }}>
            <label className="input-group-text" style={{ fontWeight: '700'}} htmlFor="phosphorous">Phosphorous</label>
            <input
              type="text"
              placeholder="Phosphorous content of the soil: float"
              id="phosphorous"
              style={{ width: '70%', marginBottom: '5px', marginTop: "10px" }}
            />
          </div>

          {/* <div className="input-group mb-3">
            <span className="input-group-text" style={{"marginRight" : '10px'}}>Phosphorous</span>
            <input
              type="text"
              className="form-control"
              placeholder="Phosphorous content of the soil: float"
              id="phosphorous"
            />
          </div> */}

          <div className="input-group mb-3 custom-input" style={{ marginBottom: '5px' }}>
            <label className="input-group-text" style={{ fontWeight: '700' }} htmlFor="potassium">Potassium</label>
            <input
              type="text"
              placeholder="Potassium content of the soil: float"
              id="potassium"
              style={{ width: '70%', marginBottom: '5px', marginTop: "10px" }}
            />
          </div>

          {/* <div className="input-group mb-3">
            <span className="input-group-text" style={{"marginRight" : '10px'}}>Potassium</span>
            <input
              type="text"
              className="form-control"
              placeholder="Potassium content of the soil: float"
              id="potassium"
            />
          </div> */}
          
          <div className="input-group mb-3 custom-input" style={{ marginBottom: '5px' }}>
            <label className="input-group-text" style={{ fontWeight: '700' }} htmlFor="ph">pH</label>
            <input
              type="text"
              placeholder="pH content of the soil: float"
              id="ph"
              style={{ width: '70%', marginBottom: '5px', marginTop: "10px" }}
            />
          </div>
          

          {/* <div className="input-group mb-3">
            <span className="input-group-text" style={{"marginRight" : '10px'}}>pH</span>
            <input
              type="text"
              className="form-control"
              placeholder="pH of the soil: float"
              id="ph"
            />
          </div> */}

          <div className="input-group mb-3 custom-input" style={{ marginBottom: '5px' }}>
            <label className="input-group-text" style={{ fontWeight: '700' }} htmlFor="nitrogen">Rainfall</label>
            <input
              type="text"
              placeholder="Rainfall (mm): float"
              id="inputRainfall"
              style={{ width: '70%', marginBottom: '5px', marginTop: "10px" }}
            />
          </div>
          
          

          {/* <div className="input-group mb-3">
            <span className="input-group-text" style={{"marginRight" : '10px'}}>Rainfall</span>
            <input
              type="text"
              className="form-control"
              placeholder="Rainfall (mm): float"
              id="inputRainfall"
            />
          </div> */}

          {/* Dropdowns */}
          <form>
            <div className="input-group mb-3" style={{marginBottom: '10px', marginTop: '15px'}}>
              <span className="input-group-text" style={{fontWeight: 'bold', marginRight: "10px", marginBottom: '10px'}}>State</span>
              <select className="form-control" id="inputState" value = {stateSelected}  onChange={handleStateSelected}>
              <option >----select--------</option>
                <option value= "Andhra Pradesh"> ANDHRA PRADESH </option>
                <option value="Arunachal Pradesh">ARUNACHAL PRADESH</option>
                <option value="Assam">ASSAM</option>
                <option value="Bihar">BIHAR</option>
                <option value="Gujarat">GUJARAT</option>
                <option value="Haryana">HARYANA</option>
                <option value="Himachal Pradesh">HIMACHAL PRADESH</option>
                <option value="Jammu and Kashmir">JAMMU AND KASHMIR</option>
                <option value="Jharkhand">JHARKHAND</option>
                <option value="Karnataka">KARNATAKA</option>
                <option value="Kerala">KERALA</option>
                <option value="Ladakh">LADAKH</option>
                <option value="Madhya Pradesh">MADHYA PRADESH</option>
                <option value="Maharashtra">MAHARASHTRA</option>
                <option value="Manipur">MANIPUR</option>
                <option value="Meghalaya">MEGHALAYA</option>
                <option value="Mizoram">MIZORAM</option>
                <option value="Nagaland">NAGALAND</option>
                <option value="Odisha">ODISHA</option>
                <option value="Punjab">PUNJAB</option>
                <option value="Rajasthan">RAJASTHAN</option>
                <option value="Sikkim">SIKKIM</option>
                <option value="Tamil Nadu">TAMIL NADU</option>
                <option value="Telangana">TELANGANA</option>
                <option value="Tripura">TRIPURA</option>
                <option value="Uttarakhand">UTTARAKHAND</option>
                <option value="Uttar Pradesh">UTTAR PRADESH</option>
                <option value="West Bengal">WEST BENGAL</option>
                <option value="Andaman and Nicobar Islands">
                  ANDAMAN AND NICOBAR ISLANDS
                </option>
                <option value="Chandigarh">CHANDIGARH</option>
                <option value="Dadra and Nagar Haveli">DADRA AND NAGAR HAVELI</option>
                <option value="Daman and Diu">DAMAN AND DIU</option>
                <option value="Delhi">DELHI</option>
                <option value="Lakshadweep">LAKSHADWEEP</option>
                <option value="Puducherry">PUDUCHERRY</option>
              </select>
            </div>


            <div className="input-group mb-3" style={{marginTop: '15px'}}>
              <span className="input-group-text b" style={{fontWeight: 'bold', marginRight : '10px'}}>City</span>
              {/* <div className="select-container"> */}
              <select className="form-control" id="inputDistrict">
              <option >----select--------</option>
                        {districtOptions.map((district, index) => (
                                <option key={index} value={district}>{district}</option>
                            ))} 
                  </select>
                  {/* </div> */}
                {/* <option value="">-- select one --</option> */}
            </div>  
          </form>              

          {/* Scripts and Button */}

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
            class = "three-d-button"
              // style={{
              //   padding: '10px 20px',
                // border: '1px solid #000',
              //   borderRadius: '5px',
              //   cursor: 'pointer',
              //   fontWeight: '700',
              //   backgroundColor: 'lightgreen'
              // }}
              onClick={predict}
            >
              PREDICT
            </button>
          </div>

          {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '4vh' }}>
            <button className="btn btn-outline-success" onClick={predict}>
              Predict
            </button>
          </div> */}

          {/* Result display */}
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 id="Result" style={{ textAlign: 'center' }}>
              PREDICTION : <span id="prediction"></span>
            </h2>
            <div id="imageContainer">
            {cropImage &&
            <img
                id="cropImage"
                src = {cropImage}
                alt="Crop Image"
                style={{ height: '150px', display: 'block', margin: '0 auto' }}
              />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
