import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Imported Routes from Pages
import { Navbar } from '../Navbar/Navbar';
import { HomePage } from '../Pages/HomePage';
import { LoginForm } from '../Pages/LoginForm';
import { QuestionOne } from '../Pages/QuestionOne';
import { QuestionTwo } from '../Pages/QuestionTwo';
import { QuestionThree } from '../Pages/QuestionThree';
import { QuestionFour } from '../Pages/QuestionFour';
import { QuestionFive } from '../Pages/QuestionFive';

function Routes() {
  return (
    <div className="pages">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/get-started" component={QuestionOne} />
          <Route exact path="/question-two" component={QuestionTwo} />
          <Route exact path="/question-three" component={QuestionThree} />
          <Route exact path="/question-four" component={QuestionFour} />
          <Route exact path="/question-five" component={QuestionFive} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
