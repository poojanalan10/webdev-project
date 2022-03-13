import "./contact.css";
import EmailIcon from "../../img/email.jpg"


const Contact = () => {
    return(
        <div className="c" id="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> What's up with your project?</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={EmailIcon} alt="email icon" className="c-icon"></img>
                                pnalan@pdx.edu
                            </div>
                        </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Have any comments or a story to share?</b> Get in touch now! 
                    </p>
                    <form>
                        <div>
                            <label for="username">Username: </label>
                            <input id="username" type="text"  placeholder="Full Name" name="username"></input>
                        </div>
                        <div>
                            <label for="subject">Subject: </label>
                            <input id="subject" type="text"  placeholder="Subject" name="subject"></input>
                        </div>
                        <div>
                            <label for="email">Email: </label>
                            <input id="email" type="email"  placeholder="Email id" name="email"></input>
                        </div>
                        <div>
                            <label for="message">Message: </label>
                            <textarea id="message" rows="5" placeholder="comments" name="user_message"></textarea>
                        </div>
                        <button type="submit" value="submit" className="button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact