import React from 'react'
import InputField from 'terra-form-input/lib/InputField'
import SelectField from 'terra-form-select/lib/SelectField'
import Button from 'terra-button'
import { injectIntl, intlShape } from 'react-intl';
import axios from 'axios'

class DemographicsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: '',
            age: '',
            zipCode: '',
            state: '',
            country: '',
            posts: []
        }
		  this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
      }

    handleInputChange(e) {
        const target = e.target;
        const name = target.name;
        this.setState({
            [name]: target.value
          });
    }

    handleGenderChange(e){
        this.setState({
            "gender": e
        })
    }

    handleStateChange(e){
        this.setState({
            "state": e
        })
    }

    handleCountryChange(e){
        this.setState({
            "country": e
        })
    }

    handleSubmit(e) {
        const post = {
            age: this.state.age,
            gender: this.state.gender
        }
        console.log("Hiya")
        axios.post('/v1/demographics_form',post).then(res => {
            console.log(res.data.body)
        });


	 }
	 getRequest() {
		 let d =  ""
	 axios.get('/v1/demographics_form').then(({ data }) => {console.log("hi");
	 d = data;
	 console.log(data);
	 console.log("bye");
	});
		return d;
  	}
	 
	 
    render () {
        return (
        <div>
				<h1>Please fill out this form for Covid'19 Assesment:</h1> 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <SelectField label="Gender" name="gender" placeholder="Gender" selectId="gender-field" onChange={this.handleGenderChange} required className={('form-select')}>
                    <SelectField.Option value= "Male" display="Male"/>
                    <SelectField.Option value= "Female" display="Female"/>
                </SelectField>
                <InputField
                    inputId="age"
                    label="Age"
                    type="text"
                    placeholder="Age"
                    required
                    onChange={this.handleInputChange}
                    inputAttrs={{
                    name: 'age',
                    }}
                />
                <InputField
                    inputId="zip-code"
                    label="Zip Code"
                    type="text"
                    placeholder="Zip Code"
                    onChange={this.handleInputChange}
                    inputAttrs={{
                    name: 'zipCode',
                    }}
                />
                <SelectField label="State" name="state" placeholder="State" selectId="state-field" onChange={this.handleStateChange} className={('form-select')}>
					 <SelectField.Option value= "Alabama" display="Alabama"/>
                  <SelectField.Option value= "Alaska" display="Alaska"/>
                  <SelectField.Option value= "Arizona" display="Arizona"/>
                  <SelectField.Option value= "Arkansas" display="Arkansas"/>
                  <SelectField.Option value= "California" display="California"/>
                  <SelectField.Option value= "Colorado" display="Colorado"/>
                  <SelectField.Option value= "Connecticut" display="Connecticut"/>
                  <SelectField.Option value= "Delaware" display="Delaware"/>
                  <SelectField.Option value= "Florida" display="Florida"/>
                  <SelectField.Option value= "Georgia" display="Georgia"/>
                  <SelectField.Option value= "Hawaii" display="Hawaii"/>
                  <SelectField.Option value= "Idaho" display="Idaho"/>
                  <SelectField.Option value= "Illinois" display="Illinois"/>
                  <SelectField.Option value= "Indiana" display="Indiana"/>
                  <SelectField.Option value= "Iowa" display="Iowa"/>
                  <SelectField.Option value= "Kansas" display="Kansas"/>
                  <SelectField.Option value= "Kentucky" display="Kentucky"/>
                  <SelectField.Option value= "Louisiana" display="Louisiana"/>
                  <SelectField.Option value= "Maine" display="Maine"/>
                  <SelectField.Option value= "Maryland" display="Maryland"/>
                  <SelectField.Option value= "Massachusetts" display="Massachusetts"/>
                  <SelectField.Option value= "Michigan" display="Michigan"/>
                  <SelectField.Option value= "Minnesota" display="Minnesota"/>
                  <SelectField.Option value= "Mississippi" display="Mississippi"/>
                  <SelectField.Option value= "Missouri" display="Missouri"/>
                  <SelectField.Option value= "Montana" display="Montana"/>
                  <SelectField.Option value= "Nebraska" display="Nebraska"/>
                  <SelectField.Option value= "Nevada" display="Nevada"/>
                  <SelectField.Option value= "NewHampshire" display="New Hampshire"/>
                  <SelectField.Option value= "NewJersey" display="New Jersey"/>
                  <SelectField.Option value= "NewMexico" display="New Mexico"/>
                  <SelectField.Option value= "NewYork" display="New York"/>
                  <SelectField.Option value= "NorthCarolina" display="North Carolina"/>
                  <SelectField.Option value= "NorthDakota" display="North Dakota"/>
                  <SelectField.Option value= "Ohio" display="Ohio"/>
                  <SelectField.Option value= "Oklahoma" display="Oklahoma"/>
                  <SelectField.Option value= "Oregon" display="Oregon"/>
                  <SelectField.Option value= "Pennsylvania" display="Pennsylvania"/>
                  <SelectField.Option value= "RhodeIsland" display="Rhode Island"/>
                  <SelectField.Option value= "SouthCarolina" display="South Carolina"/>
                  <SelectField.Option value= "SouthDakota" display="South Dakota"/>
                  <SelectField.Option value= "Tennessee" display="Tennessee"/>
                  <SelectField.Option value= "Texas" display="Texas"/>
                  <SelectField.Option value= "Utah" display="Utah"/>
                  <SelectField.Option value= "Vermont" display="Vermont"/>
                  <SelectField.Option value= "Virginia" display="Virginia"/>
                  <SelectField.Option value= "Washington" display="Washington"/>
                  <SelectField.Option value= "WestVirginia" display="West Virginia"/>
                  <SelectField.Option value= "Wisconsin" display="Wisconsin"/>
                  <SelectField.Option value= "Wyoming" display="Wyoming"/>
                  

                </SelectField>
                <SelectField label="Country" name="country" placeholder="Country" selectId="country-field" onChange={this.handleCountryChange} className={('form-select')}>
                    <SelectField.Option value= "US" display="United States"/>
                </SelectField>
                <Button text="Submit" type="submit" className={('button')} />
            </form> 
				<div>
            <h1>Recommendations on what to do next are solely based on WHO and CDC:</h1> 
            <h2><a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/checklist-household-ready.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fcommunity%2Fhome%2Findex.html">CDC Recommendations for House Hold Checklist</a></h2> 
            <h2><a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html">Steps when you're sick</a></h2> 
            <h2><a href="https://www.cdc.gov/coronavirus/2019-ncov/php/risk-assessment.html">Risk Assessment</a></h2>
            <h2><a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/after-travel-precautions.html">Travel Precautions</a></h2>
            </div>
				
				{this.getRequest()}
				    
        </div>
        )
    }
    }
    export default injectIntl(DemographicsForm);
