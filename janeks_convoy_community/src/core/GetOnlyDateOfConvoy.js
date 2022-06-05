import React, {useState, useEffect} from 'react'
import {getDoc, doc } from 'firebase/firestore';
import { db } from "../firebase-config";
import Countdown from "../Components/Countdown";

function convertToDate(x) {
    let t = new Date(1970, 0, 1);
    t.setSeconds(x);
    return t
}

function GetOnlyDateOfConvoy() {
    const [ConvoyInfo, setConvoyInfo] = useState([]);
    const [EventTime, setEventTime] = useState([]);
    //2022-03-13T14:00:00
    const convoyData = async () => {

        const docRef = doc(db, "info", "convoy");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setConvoyInfo(docSnap.data());
          let t = convertToDate(docSnap.data().date.seconds);
          let mapka = t.getUTCFullYear() + '-' + ((t.getUTCMonth()+1)<10?'0':'') + (t.getUTCMonth()+1) + '-' + (t.getUTCDate()<10?'0':'') + t.getUTCDate() + 
                (t.getUTCHours()<10?'T0':'T') + t.getUTCHours() + ':' + (t.getUTCMinutes()<10?'0':'') + t.getUTCMinutes() + ':' + (t.getUTCSeconds()<10?'0':'') + t.getUTCSeconds();
          setEventTime(mapka);
        }
    };

    useEffect(() => {
        convoyData();
    }, []);

    return (
        <Countdown date={EventTime} />
    )
}
export default GetOnlyDateOfConvoy;
