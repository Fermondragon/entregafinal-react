import React, { useState, useEffect } from "react";
import "./PlayerDetail.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardPlayer from "../../components/CardPlayer/CardPlayer";
import Spinner from "../../components/Spinner/Spinner";

// FIRBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const PlayerDetailPage = () => {
  const [playerData, setPlayerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(playerData);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getPlayers = async () => {
      const q = query(
        collection(db, "playersCollection"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      //console.log(docs);
      setPlayerData(docs);
    };
    getPlayers();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div className="DetailContainer">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="PlayersListDetailContainer">
          {playerData.map((data) => {
            return (
              <Link
                to={`/player-detail/${data.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardPlayer player={data} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlayerDetailPage;
