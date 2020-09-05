import React from 'react';
import classes from './topbar.module.css';

class topbar extends React.Component {
    constructor(props){
        super(props)
    }
    state={
        link: "",
        size: ""
    }

    // onInputNumberChange = (e) =>{
    //     localStorage.setItem("number",e.target.value);
    // }

    // onInputFieldChange = (e) =>{
    //     localStorage.setItem("link",e.target.value);
    // }
    onInputFieldChange = (e) => {
        if(e.target.value !== ""){
            this.setState({link: e.target.value});
        }
        else
        this.setState({link: this.state.tag});
    }
    onInputNumberChange = (e) => {
        if(e.target.value !== ""){
            this.setState({size: e.target.value+"px"});
            this.props.onSizeClick(e.target.value+"px");
        }
        else
        this.setState({link: this.state.size});
    }
    // onLinkClicked = (e) => {
    //     e.preventDefault();
    //     this.props.onLinkClick(this.state.link);  
    // }
    onLinkSubmitted = (e) => {
        e.preventDefault();
        this.props.onLinkClick(this.state.link);
    }

    // onSizeSubmitted = (e) => {
    //     e.preventDefault();
    //     this.props.onSizeClick(this.state.size);
    // }
    onNewPageClicked = () => {
        if(localStorage.getItem("id") === "1") {
            this.props.onLinkClick("https://assets.website-files.com/5da84c0b3e5488033ddb69f6/5da86cc13e54881edfdd15d4_logo-white-p-500.png");
            this.props.onSizeClick("90px");
            this.props.onNewPageClick("YOU DREAM. WE CREATE.","none");
        }
        else if(localStorage.getItem("id") === "2") {
            this.props.onLinkClick("https://mobirise.com/extensions/organicamp/assets/images/logo1.jpg");
            this.props.onSizeClick("40px");
            this.props.onNewPageClick("Vegan Store Simple Template","none");
        }
    }

    render() {

    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                <div onClick={this.onNewPageClicked} style={{marginLeft: "20px"}}><h3>New Page</h3></div>
                <div style={{marginRight: "20px"}}><h3>Preview Page</h3></div>
           </div>
            <div className={classes.handler}>
                <div><h3>Change Image</h3></div>
                <div><h3>Size</h3><input onChange={this.onInputNumberChange} style={{width:"40px"}} type="number"/></div>
                <form onSubmit={this.onLinkSubmitted}><input onChange={this.onInputFieldChange} type="text" placeholder="Link URL" name="link" /></form>
            </div>
        </div>
    );
    }
}

export default topbar;