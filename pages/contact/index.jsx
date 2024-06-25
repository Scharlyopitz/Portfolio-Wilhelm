import Title from "@/components/Title/Title";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [messageOff, setmessageOff] = useState(false);

  const SuccesMsg = `Message Sent`;
  const ErrorMsg = "Complete all Fields";

  const clearFields = () => {
    setEmail("");
    setMessage("");
    setName("");
  };

  const refreshMessage = () => {
    setTimeout(() => {
      setmessageOff(false);
    }, 1500);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_is6z0jh";
    const templateId = "template_723rf7y";
    const plublicKey = "Ivv9VH-K6JIKana-R";

    const templateParams = {
      user_message: message,
      user_email: email,
      user_name: name,
      to_name: "Scharly le boss",
    };

    if (name !== "" && email !== "" && message !== "") {
      clearFields();
      setError(false);
      refreshMessage();
      setmessageOff(true);
    } else {
      setError(true);
      setmessageOff(true);
    }

    // emailjs
    //   .send(serviceId, templateId, templateParams, plublicKey)
    //   .then((reponse) => {
    //     if (name !== "" && email !== "" && message !== "") {
    //       console.log(reponse);
    //       clearFields();
    //       setButtonMessage(SuccesMsg);
    //       refreshButton();
    //     } else {
    //       setButtonMessage(ErrorMsg);
    //       refreshButton();
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <>
      <Title title={"Portfolio | Contact Me"} />
      <main className="Contact">
        <div className="leftPart">
          <div className="bigPhoto">
            <img
              src="https://taupinprod.fr/WordPress3/wp-content/uploads/2021/12/Taupinprod-Web-DSC_7552-1120x1120.jpg"
              alt=""
            />
            <div className="littlePhoto">
              <div className="photo">
                <img
                  src="https://taupinprod.fr/WordPress3/wp-content/uploads/2021/12/Taupinprod-Web-DSC_7552-1120x1120.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rightPart">
          <h1>Contact Me</h1>

          <form onSubmit={(e) => sendEmail(e)}>
            <p
              style={{
                color: error ? "#ff0000" : "#24e76b",
                display: messageOff ? "block" : "none",
              }}
              className="message"
            >
              {error ? ErrorMsg : SuccesMsg} &nbsp;
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#24e76b", display: error ? "none" : "inline" }}
              />
            </p>
            <label htmlFor="name">
              Full Name <span>*</span>{" "}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
            />

            <label htmlFor="mail">
              Email <span>*</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="mail"
            />

            <label htmlFor="msg">
              Message <span>*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="msg"
            ></textarea>

            <button type="submit">
              <div className="submit">
                <p>Send</p>
                <p>Send</p>
              </div>
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
