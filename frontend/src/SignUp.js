import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Cookies from 'universal-cookie';
import {useState} from "react";



import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);



export default function UserProfile() {
  const cookies = new Cookies();
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  const [company,setCompany] = useState("");
  const [FirstName,setFirstName] = useState("");
  const [LastName,setLastName] = useState("");
  const [Email,setEmail] = useState("");
  const [City,setCity] = useState("");
  const [Country,setCounty] = useState("");
  const [Postal,setPostal] = useState("");
  const [About,setAbout] = useState("");


  
  const updateUserName = (event) => {
    setUserName(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };
  const updateCompany = (event) => {
    setCompany(event.target.value);
  };
  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updateLastName = (event) => {
    setLastName(event.target.value);
  };
  const updateCity = (event) => {
    setCity(event.target.value);
  };
  const updatePostal = (event) => {
    setPostal(event.target.value);
  };

  const updateAbout = (event) => {
    setAbout(event.target.value);
  };
  const updateCountry = (event) => {
    setCounty(event.target.value);
  };

  function SignUpRequest() 
{
  var serverUrl = "http://localhost:8080"
  var jsonForm = {userName:userName,password:password,company:company, fName:FirstName,
     lName: LastName, email:Email , city:City, country:Country, postal:Postal, about:About    }
  fetch(`${serverUrl}/signupRequest`, {
      method: "POST",
      mode: 'no-cors',
      url: serverUrl,
      credentials: 'include',
      body: JSON.stringify(jsonForm)
  }).then(function(data) {
    console.log(data)
    var jsonObj = JSON.parse(data)
    cookies.set('loginToken', jsonObj.token, { path: '/' });
    alert("signed up")
  }).catch(err=>{console.log(err)});
}

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Sign up</h4>
              <p className={classes.cardCategoryWhite}>Please write your details</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={userName}
                    onChange={updateUserName}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={FirstName}
                    onChange={updateFirstName}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={LastName}
                    onChange={updateLastName}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={City}
                    onChange={updateCity}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={Country}
                    onChange={updateCountry}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={Postal}
                    onChange={updatePostal}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                    value={About}
                    onChange={updateAbout}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="warning" onClick={()=>SignUpRequest()}>Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
