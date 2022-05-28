import dayjs from 'dayjs';
import React , {useState, useEffect}from 'react'
import './covid.css'
import logo from "../components/c.png"
import lo from "../components/imgbin_covid19-coronavirus-virus-png.png"
const Covid = () => {
    const [search , setsearch] = useState("India") ; 
    const  [country , setcountry] = useState(null);  
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            'X-RapidAPI-Key': 'd5b7d1e676msh052563ca3875628p152f44jsnca03cd34b509'
        }
    };
   const getCovidData = async ()=>{
  const data = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${search}`, options)
     const jsondata = await data.json() ;
     setcountry(jsondata.response[0]) ;
     console.log(jsondata.response[0]) ;
   } 

   useEffect(()=>{
   getCovidData() ;  
   }, [search]) ; 
  if(country!=null)
   var s = new Date(country.time).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});

    return (
    <>
    <div className='container'>
    <div className='bubbles'>
         <span style={{"--i":"11"}}> 
        <img className='logo' src={logo} alt="hello" />
         </span>
         <span style={{"--i":"12"}}>
        <img className='logo' src={lo} alt="hello" />
         </span>
         <span style={{"--i":"24"}}>
        <img className='logo' src={logo} alt="hello" />
         </span>
         <span style={{"--i":"10"}}> 
        <img className='logo' src={logo} alt="hello" />
         </span>
         <span style={{"--i":"14"}}>
        <img className='logo' src={lo} alt="hello" />
         </span>
         <span style={{"--i":"23"}}>
        <img className='logo' src={logo} alt="hello" />
         </span>
         <span style={{"--i":"18"}}> 
        <img className='logo' src={logo} alt="hello" />
         </span>
         <span style={{"--i":"16"}}>
        <img className='logo' src={lo} alt="hello" />
         </span>
         <span style={{"--i":"19"}}>
        <img className='logo' src={logo} alt="hello" />
         </span>
         <span style={{"--i":"20"}}> 
        <img className='logo' src={logo} alt="hello" />
         </span>
         <span style={{"--i":"22"}}>
        <img className='logo' src={lo} alt="hello" />
         </span>
         <span style={{"--i":"25"}}>
        <img className='logo' src={logo} alt="hello" />
         </span>
         
    </div>
    </div>
   
    <div className='screen'>  
    <h2 className='li'><img className='Live'  src="https://live.carebeyond.com/images/transparent-live-animated-gif-3.gif" alt="live" />
              LIVE </h2>
    <h2 className='li'>COVID-19 TRACKER</h2>
    <div className='sear'>
    <input className='search' type="text"  placeholder='Search Country' onChange={(event)=>{setsearch(event.target.value)}} />
        </div>
        {country==null ? (
            <p className='no_data'>No Data Found..!!</p>
        ): (
            <ul className='l'>
            <li className='card'>
       <div className='card_main'>
      <div className='card_inner1'>
     <p className='card_name'><span>COUNTRY</span></p>
     <p className='card_total'>{country.country}</p>
      </div>
       </div>
            </li>
            <li className='card'>
       <div className='card_main'>
      <div className='card_inner2'>
     <p className='card_name'><span style={{"font-size":"10px"}}>TOTAL</span> RECOVERED</p>
     <p className='card_total'>{country.cases.recovered}</p>
      </div>
       </div>
            </li>
            <li className='card'>
       <div className='card_main'>
      <div className='card_inner3'>
     <p className='card_name'><span style={{"font-size":"10px"}}>TOTAL</span> ACTIVE</p>
     <p className='card_total'>{country.cases.active}</p>
      </div>
       </div>
            </li>
            <li className='card'>
       <div className='card_main'>
      <div className='card_inner4'>
     <p className='card_name'><span style={{"font-size":"10px"}}>TOTAL</span> CRITICAL</p>
     <p className='card_total'>{country.cases.critical}</p>
      </div>
       </div>
            </li>
            <li className='card'>
       <div className='card_main'>
      <div className='card_inner5'>
     <p className='card_name'><span style={{"font-size":"10px"}}>TOTAL</span> DEATH</p>
     <p className='card_total'>{country.deaths.total}</p>
      </div>
       </div>
            </li>
            <li className='card'>
       <div className='card_main'>
      <div className='card_inner6'>
     <p className='card_name'><span style={{"font-size":"10px"}}>TOTAL</span> POPULATION</p>
     <p className='card_total'>{country.population}</p>
      </div>
       </div>
            </li>
            <li className='card'>
       <div className='card_main'>
      <div className='card_inner7'>
     <p className='card_name'><span style={{"font-size":"10px"}}>TOTAL</span> TESTED</p>
     <p className='card_total'>{country.tests.total}</p>
      </div>
       </div>
            </li>
            <li className='card'>
       <div className='card_main'>
      <div className='card_inner8'>
     <p className='card_name'><span style={{"font-size":"10px"}}>LAST</span> UPDATED AT</p>
     <p className='card_total1'>{s}</p>
      </div>
       </div>
            </li>

        </ul>
        )}
        <h2 className='created'>CREATED BY:<span className='kshitiz'> KSHITIZ KUMAR</span></h2>
    </div>
    </>
  )}


export default Covid