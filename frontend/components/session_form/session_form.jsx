import React from 'react';
import {withRouter} from "react-router-dom";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            email: "",
            password: "",
            age: "",
            gender: "",
            username: "",
            page: 0
         };
         this.handleSubmit = this.handleSubmit.bind(this)
         this.handleModalUpdate1 = this.handleModalUpdate1.bind(this)
         this.handleModalUpdate2 = this.handleModalUpdate2.bind(this)
         this.handleModalUpdate3 = this.handleModalUpdate3.bind(this)
         this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
         this.previousModal = this.previousModal.bind(this)
        //  this.renderErrors = this.renderErrors.bind(this)
        this.passwordError = null;
        this.genderError = null;
        this.ageError = null;

    }

    validPassword(password){
        if(password.length < 6){
            return false 
        } else {
            return true 
        }
    };

    validAge(age){
        if(age < 0){
            return false
        } else {
            return true
        }
    };

    validGender(gender){
        if(gender === "" || gender === "Choose a Gender"){
            return false 
        } else {
            return true 
        }
    }

   
    
    handleSubmit(e){
        e.preventDefault();
        this.props.processForm({
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            gender: this.state.gender,
            username: this.state.username
        }).then(this.props.closeModal())
    }


    handleDemoSubmit(e){
        e.preventDefault();
        this.props.processForm({
            email: "TestDemo@gmail.com",
            password: "password123"
        }).then(this.props.closeModal())
    }

    // then(this.props.history.push("/discover")

    handleModalUpdate1(e){
        e.preventDefault()
        this.setState({page: 1})
    }
    handleModalUpdate2(e){
        e.preventDefault()
        if( this.validPassword(this.state.password) ){
            this.setState({ page: 2 })
        } else {
            this.setState({page: 1})
            this.passwordError = `Use at least 8 charcters(You currently using ${this.state.password.length} characters)`
        }
    }
    handleModalUpdate3(e){
        e.preventDefault()
        if (this.validGender(this.state.gender) && this.validAge(this.state.age)) {
            this.setState({page: 3})
        } else if (!this.validAge(this.state.age) && !this.validGender(this.state.gender)) {
            this.setState({ page: 2 })
            this.ageError = "Age has to be greater than 0"
            this.genderError = "Please select a gender"
        } else if(!this.validAge(this.state.age)){
            this.setState({page: 2})
            this.ageError = "Age has to be greater than 0"
        } else if(!this.validGender(this.state.gender)){
            this.setState({page: 2})
            this.genderError = "Please select a gender"
        }
    }

    previousModal(e){
        e.preventDefault()
        this.setState({page: 0})
    }

  
    update(field){
        return e => this.setState({[field]: e.target.value})
    }


    render() { 
       
        if(this.state.page === 0) {
            return (
                <div className="modal-first">
                    <button className="demo-user-button" onClick={this.handleDemoSubmit}>DEMO USER</button>
                    <form onSubmit={this.handleModalUpdate1}>
                        <br />
                        
                        <div className="or-text">
                            <hr/>
                            <p>or</p>
                            <hr/>
                        </div>
                        <input 
                            className="email-input1"
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            placeholder="Your email address or profile URL"
                            id="email"
                        />
                        <br />
                      
                        <input className="modal-first-button"type="submit" value="Continue"/>
                        <div className="need-help">Need help?</div>
                        <p>
                            Welcome to Noiser's products and services, Where music defines you, find all types of music 
                            from different genres, artist. You can unsubscribe for free at any time in your notifactions 
                            settings.
                        </p>
                        <p>
                            You can upload your own music anytime, anywhere. With a click of a button you can let the world 
                            hear your music!
                        </p>
                    </form>
                   
                </div>
            )
        }

        let loginOnly = (this.props.formType === "Login") ? true : false
        if(this.state.page === 1) {
            return ( 
                <div className="modal-two">
                    <h2 className="create-account-text">{loginOnly ? "" : "Create your Noiser Account" }</h2>
                    <br />
                    <form onSubmit={ loginOnly ? this.handleSubmit : this.handleModalUpdate2}>
                       
                        <label>
                            <input 
                            className={`email-prefilled-${loginOnly ? "login" : "create"}`}
                            type="email"
                            value={this.state.email} // this.props.state.email
                            onChange={this.update("email")}
                            required
                            >    
                            </input>
                        </label>
                        <br />
                        {/* <a className="prev-button" onClick={this.previousModal}></a>    */}
                        <h2 className="password-header">{ loginOnly ? "" : "Choose a password"}</h2>
                        <label>
                            <input 
                            className={`password-input-${loginOnly ? "login" : "create"}`}
                            placeholder="Your Password"
                            type="password"
                            value={this.state.password} // this.props.state.password
                            onChange={this.update("password")}
                            required
                            />
                        </label>
                        <p className="validation-error">{this.passwordError}</p>
                        <br />
                        <p className="privacy-text">{ loginOnly ? "" : ""}</p>
                        <input className="login-submit" type="submit" value={loginOnly ? "Sign in" : "Accept & continue"}/>
                        <p className="login-issue-text">{loginOnly ? "" : "Are you trying to sign in ?"}</p>
                        <p className="login-issue-text">{loginOnly ? "" : "The email address that you entered was not found."}</p>
                        <p className="login-issue-text">{loginOnly ? "" : "Double-check your email address."}</p>
                    </form>
                </div>
            )
        } else if(this.state.page === 2){
            return(
                <div className="modal-three">
                    <h2 className="create-account-2">Create your Noiser account</h2>
                    <form onSubmit={this.handleModalUpdate3}>
                      
                        <label className="age-gender-label">Tell us your age
                            <br />
                            <input 
                            className="age-input"
                            type="number"
                            value={this.state.age}
                            onChange={this.update("age")}
                            required
                            />
                        </label>
                        <p className="validation-error">{this.ageError}</p>
                        <br />
                        <label className="age-gender-label">Gender
                            <br />
                           <select 
                           className="gender-input"
                           name="Choose Gender" 
                           onChange={this.update("gender")}
                           required>
                                <option value="Null">Choose a Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                           </select>
                        </label>
                        <p className="validation-error">{this.genderError}</p>
                        <br />
                    <input className="modal-first-button" type="submit" value="Continue"/>
                    </form>
                </div>
            )
        } else if (this.state.page === 3){
            return (
                <div className="modal-four">
                    <h2 className="modal-four-header">Tell us a bit about yourself</h2>
                    <form onSubmit={this.handleSubmit}>
                       
                        <label className="display-label">Choose your display name
                        <br />
                            <input 
                            className="display-input"
                            type="text"
                            value={this.state.username}
                            onChange={this.update("username")}
                            required
                            />
                        </label>
                        <br/>
                        <p className="display-info">Your display name can be anything you like. Your name or artist name are good choices</p>
                        <br />
                        <input className="get-started-button" type="submit" value="Get Started"/>
                    </form>
                </div>
            )
        }
    }
}
 
export default withRouter(SessionForm);