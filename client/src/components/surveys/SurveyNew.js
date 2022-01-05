import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    
    // Component Level State
    state = { showFormReview: false };

    renderContent() {
        return (this.state.showFormReview) 
          ? <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })}/>
          : <SurveyForm onSurveySubmit={() => { this.setState({ showFormReview: true })}} />;
    }

    render() {
        return (
          <div>
            { this.renderContent() }
          </div>
        );
    }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
