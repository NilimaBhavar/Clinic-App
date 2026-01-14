import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <section className="info_section">
                <div className="container">
                    <div className="info_top">
                        <div className="info_logo">
                            <Link to="/">
                                <img src="images/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="info_form">
                            <form>
                                <input type="email" placeholder="Your email" />
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <div className="info_bottom layout_padding2">
                        <div className="row info_main_row">
                            <div className="col-md-6 col-lg-3">
                                <h5>Address</h5>
                                <div className="info_contact">
                                    <a href="#">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>Location</span>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>Call +01 1234567890</span>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-envelope"></i>
                                        <span>demo@gmail.com</span>
                                    </a>
                                </div>
                                <div className="social_box">
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                    <a href="#"><i className="fa fa-linkedin" /></a>
                                    <a href="#"><i className="fa fa-instagram" /></a>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="info_links">
                                    <h5>Useful Links</h5>
                                    <div className="info_links_menu">
                                        <Link className="active" to="/">Home</Link>
                                        <Link to="/about">About</Link>
                                        <Link to="/treatment">Treatment</Link>
                                        <Link to="/doctors">Doctors</Link>
                                        <Link to="/contact">Contact us</Link>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="info_post">
                                    <h5>LATEST POSTS</h5>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post1.jpg" alt="" />
                                        </div>
                                        <p>Normal distribution</p>
                                    </div>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post2.jpg" alt="" />
                                        </div>
                                        <p>Normal distribution</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_post">
                                    <h5>News</h5>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post3.jpg" alt="" />
                                        </div>
                                        <p>Normal distribution</p>
                                    </div>
                                    <div className="post_box">
                                        <div className="img-box">
                                            <img src="images/post4.png" alt="" />
                                        </div>
                                        <p>Normal distribution</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; {new Date().getFullYear()} All Rights Reserved By
                        <a href="https://html.design/" target="_blank" rel="noopener noreferrer">
                            {" "}Free Html Templates
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
}
