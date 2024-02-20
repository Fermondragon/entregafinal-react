import { useState, useEffect } from "react";
import "./App.css";

//Firebase
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import CardMuebles from "./components/CardMuebles/CardMuebles";

const App = () => {
    const [mueblesData, setMueblesData] = useState([]);
//    const [escritoriosData, setEscritoriosData] = useState([]);

    useEffect (() => {
        const getMuebles = async () => {                    
            const q = query (collection(db, "comedores")
            //,where("precio","in", [1000,20000]) donde el precio sea 1000 y 20000 (se pueden poner mas valores)
            ); //y te traera la info del valor exacto, se pueden poner <,<=,==,>,>=,!=,array-contains,array-contains-any,in,not-in
            const docs =[];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            });
            setMueblesData(docs);
        };
        getMuebles();
/*
        const getEscritorios = async () => {  
            const qE = query (collection(db, "escritorios"));
            const docsE =[];
            const querySnapshotE = await getDocs(qE);
            querySnapshotE.forEach((docE) => {
                docsE.push({...docE.data(), id:docE.id});
            });
            setEscritoriosData(docsE);
        };
        getEscritorios();
*/
    }, []);

  return (
      <div className="App">
        <h1>Firebase</h1>
        <div className="grid-muebles">
            {mueblesData.map((muebles) => {
                return <CardMuebles mueblesData={muebles} key={muebles.id}/>;
            })}
        </div>
       
        
      </div>
    
  );
};

export default App