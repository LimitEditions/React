import React, {useState} from 'react';

function Registration() {
    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setfLastName] = useState('Last Name');
    const [email, setEmail] = useState('Enter Your Email');
    const [password, setPassword] = useState('******');

    return (
        <>
            <nav className="contener nav-style">
                <div className="nav-style__content">
                    <h3 className="nav-style__text">REGISTRATION</h3>
                </div>
            </nav>
            <section className="second__container">
                <div className="registration">
                    <div className="registration__form order__adress">
                        <h2 className="registration__name">Your Name</h2>
                        <form className="registration__form" action="#">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" value={lastName} onChange={(e) => setfLastName(e.target.value)} />
                        </form>
                        <div className="registration__gender">
                            <input type="radio" name="gender" value="" id="male" />
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" value="" id="female" />
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" value="" id="other" />
                            <label htmlFor="other">Other</label>
                        </div>
                        <h2 className="registration__name">Login details</h2>
                        <input type="email" value = {email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <p className="registration__example">Please use 8 or more characters, with at least 1 number and a mixture
                            of uppercase and lowercase letters</p>
                        <button className="btn btn_reg">JOIN NOW <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10"
                            viewBox="0 0 17 10" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M11.54 0.208095C11.6058 0.142131 11.684 0.0897967 11.77 0.0540883C11.8561 0.01838 11.9483 0 12.0415 0C12.1347 0 12.2269 0.01838 12.313 0.0540883C12.399 0.0897967 12.4772 0.142131 12.543 0.208095L16.7929 4.458C16.8589 4.5238 16.9112 4.60196 16.9469 4.68802C16.9826 4.77407 17.001 4.86632 17.001 4.95949C17.001 5.05266 16.9826 5.14491 16.9469 5.23097C16.9112 5.31702 16.8589 5.39518 16.7929 5.46098L12.543 9.71089C12.41 9.84389 12.2296 9.91861 12.0415 9.91861C11.8534 9.91861 11.673 9.84389 11.54 9.71089C11.407 9.57788 11.3323 9.39749 11.3323 9.2094C11.3323 9.0213 11.407 8.84091 11.54 8.70791L15.2898 4.95949L11.54 1.21107C11.474 1.14528 11.4217 1.06711 11.386 0.981059C11.3503 0.895005 11.3319 0.802752 11.3319 0.709584C11.3319 0.616415 11.3503 0.524162 11.386 0.438109C11.4217 0.352055 11.474 0.273891 11.54 0.208095Z"
                                fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M0 4.95948C0 4.77162 0.0746263 4.59146 0.207462 4.45862C0.340297 4.32579 0.52046 4.25116 0.708318 4.25116H15.583C15.7708 4.25116 15.951 4.32579 16.0838 4.45862C16.2167 4.59146 16.2913 4.77162 16.2913 4.95948C16.2913 5.14734 16.2167 5.3275 16.0838 5.46033C15.951 5.59317 15.7708 5.6678 15.583 5.6678H0.708318C0.52046 5.6678 0.340297 5.59317 0.207462 5.46033C0.0746263 5.3275 0 5.14734 0 4.95948Z"
                                fill="white" />
                        </svg></button>
                    </div>
                    <div className="loyal">
                        <h2 className="loyal__heading">LOYALTY HAS ITS PERKS</h2>
                        <h3 className="loyal__heading">Get in on the loyalty program where you can earn points and unlock serious
                            perks. Starting with these as soon as you join:</h3>
                        <ol className="loyal__list">
                            <li className="loyal__li">15% off welcome offer</li>
                            <li className="loyal__li">Free shipping, returns and exchanges on all orders</li>
                            <li className="loyal__li">$10 off a purchase on your birthday</li>
                            <li className="loyal__li">Early access to products</li>
                            <li className="loyal__li">Exclusive offers & rewards</li>
                        </ol>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Registration;