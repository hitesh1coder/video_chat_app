import React, { useCallback, useState } from "react";
import styles from "./landing.module.css";
import Banner from "../../assets/images/google_meet.svg";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [meetingLink, setMeetingLink] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  const handleLinkChange = (e) => {
    setMeetingLink(e.target.value);
  };
  const handleJoinMeeting = useCallback(() => {
    let joiningLink = meetingLink.substring(
      meetingLink.indexOf("/"),
      meetingLink.length
    );
    console.log(joiningLink);
    if (joiningLink) {
      navigate(`${joiningLink}`);
    } else {
      setError("This not a valid link");
    }
  }, [meetingLink, navigate]);

  const handleNewMeating = () => {
    let newMeatingLink = randomID(5);
    if (newMeatingLink) {
      navigate(`/chat/${newMeatingLink}`);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content_info}>
            <p>Premium video meetings Now Free for everyone.</p>
          </div>
          <div className={styles.user_form}>
            <div className={styles.btns}>
              <button
                onClick={handleNewMeating}
                className={styles.new_meeting_btn}
              >
                New Meeting
              </button>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter a code or Link"
                value={meetingLink}
                onChange={handleLinkChange}
              />
              <button
                onClick={handleJoinMeeting}
                className={styles.join_meeting_btn}
              >
                Join{" "}
              </button>
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>

        <div className={styles.banner}>
          <img src={Banner} alt="banner" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
