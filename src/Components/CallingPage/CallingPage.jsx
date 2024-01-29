import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const CallingPage = () => {
  const { meatingId } = useParams();
  const [username, setUsername] = useState("h");

  const navigate = useNavigate();
  // console.log(import.meta.env.VITE_APP_ID, import.meta.env.VITE_SERVER_SECRET);

  const myMeating = async (element) => {
    const appID = 1970923885;
    const serverSecret = `58d8458b116df12cdfe2c25892c49f93`;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      meatingId,
      Date.now().toString(),
      username
    );
    const uikit = ZegoUIKitPrebuilt.create(kitToken);

    uikit.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      sharedLinks: [
        {
          name: "Copy Link",
          url: window.location.pathname + "?meatingId=" + meatingId,
        },
      ],

      layout: "Auto",
      showPreJoinView: true,
      showLayoutButton: true,
      showTextChat: false,
      showLeaveRoomConfirmDialog: true,
      showScreenSharingButton: true,
      onReturnToHomeScreenClicked: () => {
        navigate("/");
      },
    });
  };

  return (
    <>
      <div
        className="myCallContainer"
        ref={myMeating}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </>
  );
};

export default CallingPage;
