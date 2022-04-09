import React, {useState, useEffect} from 'react'
import {getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from "../firebase-config";

function convertToDate(x) {
    let t = new Date(1970, 0, 1);
    t.setSeconds(x);
    return t
}

function FetchConvoyInfoDashboard() {

    const [ConvoyInfo, setConvoyInfo] = useState([]);
    const [EventTime, setEventTime] = useState({});
    
    const convoyData = async () => {

        const docRef = doc(db, "info", "convoy");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setConvoyInfo(docSnap.data());
          let t = convertToDate(docSnap.data().date.seconds);
          let mapka =
              {date: t.getUTCFullYear() + '-' + (t.getUTCMonth()<10?'0':'') + t.getUTCMonth() + '-' + (t.getUTCDate()<10?'0':'') + t.getUTCDate(),
              time: (t.getUTCHours()<10?'0':'') + t.getUTCHours() + ':' + (t.getUTCMinutes()<10?'0':'') + t.getUTCMinutes()};
          setEventTime(mapka);
        }
    };

    useEffect(() => {
        convoyData();
    }, []);

    const [Inputs, setInputs] = useState([]);
  
    const handleChangeC = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      if (name == 'date' || name == 'meetup') {
        name = 'date';
        let d = new Date();
        d.setMilliseconds('1,652,230,800,000')
        value = d;
      } 
      if (name == 'dlcs') {
        let tempDLCSnodes = document.querySelectorAll("input[name='dlcs']");
        let tempDLCSChecked = [];
        for (let i = 0; i < tempDLCSnodes.length; i++) {
          const e = tempDLCSnodes[i];
          if (e.checked) {
            tempDLCSChecked.push(e.value);
          }
        }
        value = tempDLCSChecked;
      }
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmitC = async (event) => {
      event.preventDefault();
      const washingtonRef = doc(db, "info", "convoy");

      await updateDoc(washingtonRef, Inputs).then(function() {
        console.log("Convoy updated");
        alert('Convoy details updated successfully')
      });
      
    }

    return (
        <>
        <form onSubmit={handleSubmitC}>
        <div>
          <label htmlFor="title">Event title</label>
          <input type="text" name="title" id="title" defaultValue={ConvoyInfo.title} required onChange={handleChangeC}/>
        </div>
        <div>
          <label htmlFor="date">Event date</label>
          <input type="date" name="date" id="date" 
          defaultValue={EventTime.date}
          required disabled/>
        </div>
        <div>
          <label htmlFor="meetup">Meet-up hour (in UTC)</label>
          <input type="time" name="meetup" id="meetup" defaultValue={EventTime.time} required disabled/>
        </div>
        <div>
          <label htmlFor="start">Start</label>
          <input type="text" name="start" id="start" defaultValue={ConvoyInfo.start} required onChange={handleChangeC}/>
        </div>
        <div>
          <label htmlFor="destination">Destination</label>
          <input type="text" name="destination" id="destination" defaultValue={ConvoyInfo.destination} required onChange={handleChangeC}/>
        </div>
        <div>
          <label htmlFor="distance">Distance</label>
          <input type="number" name="distance" id="distance" defaultValue={ConvoyInfo.distance} required onChange={handleChangeC}/>
        </div>
        <div>
          <label htmlFor="server">Server</label>
          <input type="text" name="server" id="server" defaultValue={ConvoyInfo.server} required onChange={handleChangeC}/>
        </div>
        <div>
          <label htmlFor="map">Map with route</label>
          <input
            type="text"
            name="map"
            id="map"
            placeholder="https://i.imgur.com/example.png"
            onChange={handleChangeC}
            defaultValue={ConvoyInfo.mapURL}
          />
        </div>
        <div>
          <div>
            <label htmlFor="dlcs">Required DLCs</label>
            <div className="chkbx">
              <input
                type="checkbox"
                name="dlcs"
                id="goingeast"
                value="Going East"
                onChange={handleChangeC}
              />
              <label htmlFor="goingeast">Going East</label>
            </div>
            <div className="chkbx">
              <input
                type="checkbox"
                name="dlcs"
                id="scandinavia"
                value="Scandinavia"
                onChange={handleChangeC}
              />
              <label htmlFor="scandinavia">Scandinavia</label>
            </div>
            <div className="chkbx">
              <input
                type="checkbox"
                name="dlcs"
                id="vivelafrance"
                value="Vive la France"
                onChange={handleChangeC}
              />
              <label htmlFor="vivelafrance">Vive la France</label>
            </div>
            <div className="chkbx">
              <input type="checkbox" name="dlcs" id="italia" value="Italia" onChange={handleChangeC}/>
              <label htmlFor="italia">Italia</label>
            </div>
            <div className="chkbx">
              <input
                type="checkbox"
                name="dlcs"
                id="balticsea"
                value="Beyond the Baltic Sea"
                onChange={handleChangeC}
              />
              <label htmlFor="balticsea">Beyond the Baltic Sea</label>
            </div>
            <div className="chkbx">
              <input
                type="checkbox"
                name="dlcs"
                id="blacksea"
                value="Road to the Black Sea"
                onChange={handleChangeC}
              />
              <label htmlFor="blacksea">Road to the Black Sea</label>
            </div>
            <div className="chkbx">
              <input type="checkbox" name="dlcs" id="iberia" value="Iberia" onChange={handleChangeC}/>
              <label htmlFor="iberia">Iberia</label>
            </div>
            <div className="chkbx">
              <input
                type="checkbox"
                name="dlcs"
                id="promods"
                value="ProMods"
                onChange={handleChangeC}
              />
              <label htmlFor="promods">ProMods</label>
            </div>
          </div>
        </div>
        <input type="submit" value="Update" />
      </form>
      </>
    )
}
export default FetchConvoyInfoDashboard;
