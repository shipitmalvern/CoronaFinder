import React from 'react'
import InputField from 'terra-form-input/lib/InputField'
import SelectField from 'terra-form-select/lib/SelectField'
import Button from 'terra-button'
import { injectIntl, intlShape } from 'react-intl';

class DemographicsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: '',
            age: '',
            zipCode: '',
            state: '',
            country: ''
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
        e.preventDefault;
        const form = event.target;
        const data = new FormData(form);

        for (let name of data.keys()) {
            const input = form.elements[name];
            const parserName = input.dataset.parse;
      
            if (parserName) {
              const parser = inputParsers[parserName];
              const parsedValue = parser(data.get(name));
              data.set(name, parsedValue);
            }
          }
    }
    
    render () {
        return (
        <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <SelectField label="Gender" name="gender" placeholder="Gender" selectId="gender-field" onChange={this.handleGenderChange} className={('form-select')}>
                    <SelectField.Option value= "Male" display="Male"/>
                    <SelectField.Option value= "Female" display="Female"/>
                </SelectField>
                <InputField
                    inputId="age"
                    label="Age"
                    type="text"
                    placeholder="Age"
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
                    <SelectField.Option value= "PA" display="PA"/>
                </SelectField>
                <SelectField label="Country" name="country" placeholder="Country" selectId="country-field" onChange={this.handleCountryChange} className={('form-select')}>
                    <SelectField.Option value= "US" display="US"/>
                </SelectField>
                <Button text="Submit" type="submit" className={('button')} />
            </form>        
        </div>
        )
    }
    }
    export default injectIntl(DemographicsForm);