import React from "react";
import BlobFishParty from "../images/blobfish.png";

export default function Installation() {
  return (
    <div className="Installation">
      <h5
        style={{
          color: "#023E8A",
          marginTop: 20,
          marginBottom: 0,
          fontStyle: "italic",
        }}
      >
        Installing PartyFish
      </h5>
      <br></br>
      <img src={BlobFishParty} alt="Blobfish Party"></img>
      <br></br>
      <br></br>
      <p>
        We will have more info on how to get our game up and running once we have our first release!
      </p>
      <p>
         Stay tuned for more information.
      </p>
    </div>
  );
}