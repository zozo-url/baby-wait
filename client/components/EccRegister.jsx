import React from 'react'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'



const ecc = props => {
  const { handleSubmit, pristine, reset, submitting } = props



class  EccRegister  extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render (){
    return (
      <div className="main-container">
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Orgainisation</label>
        <div>
          <label>
            <Field
              name="Organisation"
              component="input"
              type="radio"
              value="Daycare"
            />{' '}
           
          </label>
        </div>
      </div>
      <div>
        
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
    </div>
  )
}
}


export default EccRegister
  

