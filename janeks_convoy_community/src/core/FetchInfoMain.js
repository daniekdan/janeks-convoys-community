import { getDoc, doc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute, faCalendar, faCircleInfo, faFlagCheckered, faClock, faCircleExclamation, faMap, faServer, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { db } from "../firebase-config";
import React, { useState, useEffect } from 'react'

function convertToDate(x) {
    let t = new Date(1970, 0, 1);
    t.setSeconds(x);
    return t
}

function addOrdinals(x) {
    switch (x) {
        case 1:
        case 21:
        case 31:
            return 'st';
        case 2:
        case 22:
            return 'nd';
        case 3:
        case 23:
            return 'rd';
        default:
            return 'th';
    }
}

function displayDLCs(array) {
    let list = '';
    if (array != undefined) {
        array.forEach((v, i) => {
            list += v;
            if (i != array.length - 1) {
                list += ', ';
            }
        })
    }
    return list;
}

function FetchInfoMain() {
    const [Convoy, setConvoy] = useState([]);
    const [EventTime, setEventTime] = useState({});
    
    const convoyData = async () => {
        const docRef = doc(db, "info", "convoy");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setConvoy(docSnap.data());
            let t = convertToDate(docSnap.data().date.seconds);
            let mapka =
                {
                    onlyDay: t.getUTCDate(),
                    dateD: t.toLocaleString('en-gb', { month: 'long' }) + ' ' + t.getUTCFullYear(),
                time: (t.getUTCHours()<10?'0':'') + t.getUTCHours() + ':' + (t.getUTCMinutes()<10?'0':'') + t.getUTCMinutes()};
            setEventTime(mapka);
          }
    };

    useEffect(() => {
      convoyData();
    }, []);
    return (
        <>
        <div className='cInformations'>
            <div>
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>{Convoy.title}</span>
            </div>
                <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Date: </span>
            <span>{EventTime.onlyDay}<sup>{addOrdinals(EventTime.onlyDay)}</sup> {' ' + EventTime.dateD}</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faClock} />
            <span>Meet-up: </span>
            <span>{EventTime.time} UTC</span>
            </div>
             <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>From: </span>
            <span>{Convoy.start}</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faFlagCheckered} />
            <span>Destination: </span>
            <span>{Convoy.destination}</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faRoute} />
            <span>Distance: </span>
            <span>{Convoy.distance} km</span>
            </div>
             <div>
            <FontAwesomeIcon icon={faServer} />
            <span>Server: </span>
            <span>{Convoy.server}</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faCircleExclamation} />
            <span>Required DLCs: </span>
            <span>{displayDLCs(Convoy.dlcs)}</span>
            </div>
        </div>
        <div className='cMap'>
            <FontAwesomeIcon icon={faMap} />
            <span>Map</span>
            <img src={Convoy.mapURL} alt=" could not be loaded." />
            </div>
        </>
    )
}
export default FetchInfoMain;
