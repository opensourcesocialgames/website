import React from "react";
import BlobFishParty from "../images/blobfish.png";

export default function Documentation() {
    return (
      <div className="Documentation">
        <h5
          style={{
            color: "#023E8A",
            marginTop: 20,
            marginBottom: 0,
            fontStyle: "italic",
          }}
        >
          Partyfish Documentation Page!
        </h5>
        <br></br>
        <img src={BlobFishParty} alt="Blobfish Party"></img>
        <br></br>
        <br></br>
        <p>
        Updates coming soon.
        </p>
      </div>
    );
  }