import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import Section from "../Section/Section";
import { z } from "zod";
import { phoneRegex, addInlineStyles } from "../../utils/utils";
import { sendContactData } from "../../utils/api";
import EmailProgressModal from "../EmailProgressModal/EmailProgressModal";
import NotificationModal from "../NotificationModal/NotificationModal";
import EmailNotification from "../EmailNotification/EmailNotification";

const styles = {
  section: "relative pb-[7rem] pt-16 border-t-2 border-black border-solid",
  subtitle: "block text-[#f9004d] mb-4 text-center",
  title: "text-[#c4cfde] text-5xl lg:text-6xl mb-10 text-center font-bold",
  container: "flex flex-col gap-16 lg:flex-row",
  connect: "w-full lg:w-[60%] shadow-custom-one p-8",
  connectHeading: "text-[29px] leading-[44px] text-[#c4cfde] mb-[0.7rem]",
  connectSpan: "block text-[#878e99] mb-6",
  contact: "mb-6",
  contactSpan: "mb-0",
  list: "flex gap-4",
  listItem:
    "flex flex-col justify-center items-center shadow-custom-one bg-gradient-light cursor-pointer",
  listItemLink: "w-[60px] h-[60px] flex justify-center items-center",
  listSvg: "text-white text-[1.1rem] translate-y-[2px]",
  inputOuter: "w-full",
  inputContainer: "flex flex-col gap-4",
  inputContainerLabel: "text-[0.9rem] text-[#a0a8b3] font-semibold",
  inputElem:
    "w-full bg-[#191b1e] rounded-md h-[55px] border-2 border-solid border-[#191b1e] px-4 text-base shadow-custom-inner text-[#c4cfde] outline-none transition-[all] duration-200 ease-in focus:border-[#f9004d]",
  textAreaElem: "min-h-[235px] p-0 resize-none",
  error: "text-[#f9004d] text-[0.9rem] mt-2 h-6",
  form: "w-full flex flex-col gap-6 shadow-custom-one p-8 rounded-[14px]",
  name: "w-full flex gap-8 flex-col md:flex-row",
  nameContainer: "w-full",
  button:
    "w-full p-4 flex justify-center items-start gap-2 text-base text-[#f9004d] bg-gradient-dark shadow-custom-one rounded-md outline-2 outline outline-[transparent] cursor-pointer focus:outline-[#f9004d] disabled:opacity-50",
  buttonSvg:
    "transition-[transform] duration-300 ease-in-out hover:translate-x-[3px] focus:translate-x-[3px]",
  buttonSpan:
    "transition-[transform] duration-300 ease-in-out hover:translate-x-[-3px] focus:translate-x-[-3px]",
};

const InputContainer = ({ children, error, htmlFor, label }) => {
  return (
    <div className={styles.inputOuter}>
      <div className={styles.inputContainer}>
        <label className={styles.inputContainerLabel} htmlFor={htmlFor}>
          {label}
        </label>
        {children}
      </div>
      <div className={styles.error}>{error && error}</div>
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  // loading state for sending the email
  const [isLoading, setIsLoading] = useState(false);

  // email delivery status
  const [emailDeliveryStatus, setEmailDeliveryStatus] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    const body = document.querySelector("body");

    if (isLoading) {
      addInlineStyles(body, { overflow: "hidden" });
    } else {
      addInlineStyles(body, { overflow: "auto" });
    }
  }, [isLoading]);

  useEffect(() => {
    let timeOut;
    if (emailDeliveryStatus?.status && emailDeliveryStatus.message) {
      new Promise((resolve, _) => {
        timeOut = setTimeout(() => {
          resolve();
        }, 8000);
      })
        .then(() => {
          setEmailDeliveryStatus({
            status: "",
            message: "",
          });
        })
        .finally(() => {
          clearTimeout(timeOut);
        });
    }
  }, [emailDeliveryStatus.status, emailDeliveryStatus.message]);

  const schema = z.object({
    name: z.string().min(3, { message: "Name is required" }),
    phone: z.string().regex(phoneRegex, { message: "Phone is required" }),
    email: z
      .string()
      .email({ message: "Email is not valid" })
      .min(1, { message: "Email is required" }),
    subject: z.string().min(3, { message: "Subject is required" }),
    message: z.string().min(5, { message: "Message is required" }),
  });

  //validate schema
  const validate = () => {
    const result = schema.safeParse({
      name: name,
      phone: phone,
      email: email,
      subject: subject,
      message: message,
    });
    setErrors(result?.error?.format());
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    validate();
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    validate();
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    validate();
  };

  const subjectHandler = (e) => {
    setSubject(e.target.value);
    validate();
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
    validate();
  };

  const formReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSubject("");
    // To disable the submit button
    setErrors([]);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let emailDeliveryStatus;
    let emailDeliveryMessage;
    try {
      if (!errors) {
        const data = {
          name,
          phone,
          email,
          subject,
          message,
        };

        // Start loading
        setIsLoading(true);
        const response = await sendContactData(data);
        const { data: contactData, status } = await response;

        if (status === 200) {
          emailDeliveryStatus = "Success";
          emailDeliveryMessage = "Email is delivered successfully.";
          formReset();
        }
      }
    } catch (err) {
      console.log("##Error submitting Contact form", err);
      emailDeliveryStatus = "Fail";
      emailDeliveryMessage =
        "Email delivery failed. Please try again after sometime.";
    }
    // Stop Loading
    setIsLoading(false);
    setEmailDeliveryStatus({
      status: emailDeliveryStatus,
      message: emailDeliveryMessage,
    });
  };

  return (
    <>
      <Section className={styles.section} id="contact">
        <span className={styles.subtitle}>Contact</span>
        <h2 className={styles.title}>Contact With Me</h2>
        <div className={styles.container}>
          {/* DETAILS */}
          <div className={styles.connect}>
            {/* <div className={styles.imageContainer}></div> */}
            <h2 className={styles.connectHeading}>Contact Details</h2>
            <span className={styles.connectSpan}>Web Developer</span>
            <span className={styles.connectSpan}>
              Connect with me via email and phone.
            </span>
            {/* CONTACT DETAILS */}
            <div className={styles.contact}>
              <div>
                <span className={styles.connectSpan}>Phone:</span>
                <span className={styles.connectSpan}>+919151091004</span>
              </div>

              {/* <div>
                <span className={styles.connectSpan}>Email:</span>
                <span className={styles.connectSpan}>apshuk21@gmail.com</span>
              </div> */}
            </div>

            {/* SOCIALS */}
            <div>
              <span className={styles.connectSpan}>Find Me</span>
              <div>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <a
                      href="https://www.facebook.com/"
                      target={"_blank"}
                      rel={"noreferrer"}
                      className={styles.listItemLink}
                    >
                      <FaFacebookF className={styles.listSvg} />
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a
                      href="https://www.instagram.com/"
                      target={"_blank"}
                      rel={"noreferrer"}
                      className={styles.listItemLink}
                    >
                      <FaInstagram className={styles.listSvg} />
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a
                      href="https://www.linkedin.com/"
                      target={"_blank"}
                      rel={"noreferrer"}
                      className={styles.listItemLink}
                    >
                      <FaLinkedinIn className={styles.listSvg} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* FORM */}
          <form
            autoComplete="off"
            onSubmit={onSubmitHandler}
            className={styles.form}
          >
            {/* NAME */}
            <div className={styles.name}>
              <InputContainer
                className={styles.nameContainer}
                htmlFor={"name"}
                label="YOUR NAME"
                error={errors?.name?._errors[0]}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={nameHandler}
                  className={styles.inputElem}
                />
              </InputContainer>
              <InputContainer
                htmlFor={"phone"}
                label="PHONE"
                error={errors?.phone?._errors[0]}
              >
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={phoneHandler}
                  className={styles.inputElem}
                />
              </InputContainer>
            </div>
            {/* EMAIL */}
            <InputContainer
              htmlFor={"email"}
              label={"EMAIL"}
              error={errors?.email?._errors[0]}
            >
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={emailHandler}
                className={styles.inputElem}
              />
            </InputContainer>

            {/* SUBJECT */}
            <InputContainer
              htmlFor={"subject"}
              label={"SUBJECT"}
              error={errors?.subject?._errors[0]}
            >
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={subjectHandler}
                className={styles.inputElem}
              />
            </InputContainer>

            {/* YOUR MESSAGE */}
            <InputContainer
              htmlFor={"message"}
              label="MESSAGE"
              error={errors?.message?._errors[0]}
            >
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={messageHandler}
                className={`${styles.inputElem} ${styles.textAreaElem}`}
              />
            </InputContainer>

            <button disabled={!!errors} className={styles.button}>
              <span className={styles.buttonSpan}>SEND MESSAGE</span>
              <FaArrowRight className={styles.buttonSvg} />
            </button>
          </form>
        </div>
      </Section>
      {/* Email Progress Modal */}
      {isLoading ? <EmailProgressModal /> : null}
      {/* Notification Modal */}
      {emailDeliveryStatus?.status && emailDeliveryStatus?.message ? (
        <NotificationModal
          message={emailDeliveryStatus.message}
          render={(message) => <EmailNotification message={message} />}
        />
      ) : null}
    </>
  );
};

export default Contact;
