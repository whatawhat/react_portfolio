import { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <h3>Contact Me</h3>
                    <section className="contact-info">
                        <div id="phone">
                            412-345-3146
                        </div>
                        
                        <div id="email">
                            <i className="far fa-envelope"></i>
                            <a href="mailto:stephedavis12@gmail.com">Email Me</a>
                        </div>

                        <div id="github">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/whatawhat" target="_blank" rel="noreferrer">GitHub profile</a>
                        </div>

                        <div id="linkedin">
                            <i className="fab fa-linkedin"></i>
                            <a href="www.linkedin.com/in/stephanie-davis-56780b3b" target="_blank" rel="noreferrer">LinkedIn profile</a>
                        </div>
                    </section>
            </footer>
        );
    }
}

export default Footer;
