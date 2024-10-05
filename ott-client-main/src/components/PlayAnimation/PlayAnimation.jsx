import "./playAnimation.scss";
import React from "react";
import { useParams } from "react-router-dom";
import ShakaPlayer from "shaka-player-react";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { TADUM_SOUND_URL } from "../../requests";
import "shaka-player/dist/controls.css";
import { getContentById } from "../../services/content.service";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

const PlayAnimation = () => {
  let { id } = useParams();
  const [mpdFile, setMdpFile] = useState(
    "D:myprojectsott\backend-ott\tmpmpdmpd_62959aa8a3dd6f9ffc9230ee-SampleVideo_1280x720_10mb.mpd"
  );
  let history = useHistory();
  const soundRef = useRef(null);
  const controllerRef = useRef(null);

  //   const handleTadum = () => {
  //     soundRef.current.currentTime = 0;
  //     soundRef.current.play();
  //   };

  useEffect(() => {
    // const { player, ui, videoElement } = controllerRef.current;
    async function loadAsset() {
      const { data } = await getContentById(id);
      setMdpFile(data.mpdFile);
      //   //   await player.load(mpdFile);
      //   //   videoElement.play();
    }
    loadAsset();
  }, []);

  return (
    <div className="player">
      {mpdFile && (
        <ShakaPlayer
          width={600}
          height={600}
          loop
          src="http://localhost:8000/mpd\mpd_62959da04e2f508855beac4e-SampleVideo_1280x720_10mb.mpd"
        />
      )}
    </div>
  );
};

export default PlayAnimation;
