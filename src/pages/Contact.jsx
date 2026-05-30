import { useState } from "react";
import{FaFacebook, FaInstagram, FaTwitter,FaSnapchat, FaPhone, FaMapMarkerAlt, FaEnvelope} from "react-icons/fa";

function Contact(){
    const[form, setForm]=useState({name:"", email:"", message:"" });

    const[sent, setSent]=useState(false);

    const handlechange=(e)=>{

        setForm({...form, [e.target.name]: e.target.value });
    };

    const handlekeyDown = (e, nextField) => {
        if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
           e.preventDefault();
           const next = document.getElementById(nextField);
           if (next) next.focus();
        }
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.name || !form.email || !form.message) return;
        setSent(true);

        setForm({ name:"", email:"", message:"" });

        setTimeout( ()=>setSent(false), 3000);
    }

    return(
        <>
            <section className="contact-page">
                <h2 className="title">Contact Us</h2>
                <br/>

                <div className="contact-info">
                    <b><p>Connect with Chez Sarah 🌸</p></b>

                    <div className="info-item">
                        <FaPhone/><span>+961 71 999 000</span>
                    </div>

                    <div className="info-item">
                        <FaEnvelope/><span>chez-sarah@gmail.com</span>
                    </div>

                    <div className="info-item">
                        <FaMapMarkerAlt/><span>Beirut, Lebanon</span>
                    </div>

                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>

                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>

                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>

                        <a href="https://snapchat.com" target="_blank" rel="noreferrer"><FaSnapchat/></a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input id="name" name="name" type="text" placeholder="Your Name" value={form.name} onChange={handlechange} onKeyDown={(e)=>handlekeyDown(e,"email")} required />

                    <input  id="email" name="email" type="email"  placeholder="Your Email" value={form.email} onChange={handlechange} onKeyDown={(e)=>handlekeyDown(e, "message")} required/>

                    <textarea id="message" name="message" placeholder="Your Message" value={form.message} onChange={handlechange} required />

                    <button type="submit" id="btn">Send Message</button>

                    <div className="success-message">
                        {sent &&( <p className="success-msg">✅ Message sent successfully!</p>)}
                    </div>                    
                </form>
            </section>
        </>
    );
}
export default Contact;