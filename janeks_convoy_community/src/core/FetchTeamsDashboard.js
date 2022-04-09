import React, {useState, useEffect} from 'react'
import { collection, getDocs, query, doc, runTransaction } from 'firebase/firestore';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { db } from "../firebase-config";

function FetchTeamsDashboard() {
    const [AllForms, setAllForms] = useState([]);
    
    const teamsForms = async () => {
        const q = query(collection(db, 'teams'));

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(), id: doc.id, 
        }));
        setAllForms(data);
    };

    useEffect(() => {
      teamsForms();
    }, []);

    const handleSubmit = async (formularz) => {
        formularz.preventDefault();
        formularz.target['submit'].value = 'Updating...';
        const parentDocId = formularz.target.getAttribute('parent');
      try {
        await runTransaction(db, async (transaction) => {
          const sfDoc = await transaction.get(doc(db, 'teams', parentDocId));
          if (!sfDoc.exists()) {
            throw "Document does not exist!";
          }
          let oldArray = sfDoc.data().members;
          let pic;
          formularz.target['picture'].value == "" ? pic = null : pic = formularz.target['picture'].value;
          oldArray[formularz.target.id] = {
              nickname: formularz.target['nickname'].value,
              subtitle: formularz.target['subtitle'].value,
              picture: pic,
          }
          transaction.update(doc(db, 'teams', parentDocId), { members: oldArray });
        });
        console.log("Transaction successfully committed!");
        formularz.target['submit'].value = 'Updated!';
      } catch (e) {
        console.log("Transaction failed: ", e);
        formularz.target['submit'].value = 'Error';
        alert("Transaction failed: " + e);
      }
    };

    const handleOnRemoveClick = async (e) => {
      let parentDocId = e.target.getAttribute('parent')
      try {
        await runTransaction(db, async (transaction) => {
          const sfDoc = await transaction.get(doc(db, 'teams', parentDocId));
          if (!sfDoc.exists()) {
            throw "Document does not exist!";
          }
          let oldArray = sfDoc.data().members;
          oldArray.splice(e.target.id, 1);
          transaction.update(doc(db, 'teams', parentDocId), { members: oldArray });
        });
        console.log("Transaction successfully committed!");
        e.target.parentElement.remove();
      } catch (e) {
        console.log("Transaction failed: ", e);
        alert("Transaction failed: " + e);
      }
    }

    const handleAddPerson = async (e) => {
      let x = e.target.getAttribute('parent')
      let container = document.querySelector('#con' + x);
      let personForm = document.createElement('form');
      let nickInp = document.createElement('input');
      let subtitleInp = document.createElement('input');
      let picInp = document.createElement('input');
      let submitInp = document.createElement('input');
      let removeInp = document.createElement('input');

      submitInp.type = 'submit';
      removeInp.type = 'button';

      let elemQuantity = container.querySelectorAll('form').length;
      personForm.id = elemQuantity;
      personForm.setAttribute('parent', x);
      personForm.onsubmit = handleSubmit;
      
      nickInp.name = "nickname";
      nickInp.id = 'nickname';
      nickInp.placeholder = "Nickname*";
      nickInp.required = true;

      subtitleInp.name = "subtitle";
      subtitleInp.id = 'subtitle';
      subtitleInp.placeholder = "Subtitle*";
      subtitleInp.required = true;

      picInp.name = "picture";
      picInp.id = 'avatar';
      picInp.placeholder = "Avatar URL";

      submitInp.name = "submit";
      submitInp.value = 'Save';

      removeInp.value = "Remove";
      removeInp.setAttribute('parent', elemQuantity);
      removeInp.onclick = handleOnRemoveClick;

      personForm.appendChild(nickInp);
      personForm.appendChild(subtitleInp);
      personForm.appendChild(picInp);
      personForm.appendChild(submitInp);
      personForm.appendChild(removeInp);
      container.appendChild(personForm);
    }

    return (
      <>
        {AllForms.map((val, id) => {
            return <div key={id} className='section'>
                <span>{val.title}</span>
                <span>{val.description}</span>
                {/* <span><FontAwesomeIcon icon={faPencil} />{val.title}</span>
                <span><FontAwesomeIcon icon={faPencil} />{val.description}</span> */}
                <button onClick={handleAddPerson} parent={val.id} >Add new person</button>
                <div id={'con' + val.id} className='container'>
                {val.members.map((u, i) => {
                    return <form key={i} id={i} parent={val.id} onSubmit={handleSubmit}>
                        <input type="text" name="nickname" id="nickname" placeholder="Nickname*" defaultValue={u.nickname} required />
                        <input type="text" name="subtitle" id="subtitle" placeholder="Subtitle*" defaultValue={u.subtitle} required />
                        <input type="text" name="picture" id="avatar" placeholder="Avatar URL" defaultValue={u.picture == null ? '' : u.picture} />
                        <input type="submit" name='submit' value="Save"/>
                        <input type="button" value="Remove" parent={val.id} id={i} onClick={handleOnRemoveClick} />
                    </form>
                })}
                </div>
            </div>
        })}
      </>
    )
  }
export default FetchTeamsDashboard;
