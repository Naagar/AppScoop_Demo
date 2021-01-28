import React, { PureComponent } from 'react';
import {Route,withRouter, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import Login from './component/Login/login'
import Container from './container/container';
import Submission from './component/SubmissionDetails/Submission';
import AddEmployee from './component/AddEmployee/AddEmployee';
import ViewDetails from './component/ViewDetails/ViewDetails';

axios.interceptors.request.use(req => {
  console.log("request...", req);
  return req;
})

axios.interceptors.response.use(res => {
   console.log("response...", res);
  return res;
})

class App extends PureComponent {
  
render(){

  let container = null;
    if(localStorage.getItem('JitToken')!=null && localStorage.getItem('JitToken')!="" && localStorage.getItem('JitToken')!=undefined)
  {
     container = ( 
      <Container>
      <Switch>
      <Route path="/employeeList" exact strict component={Submission}/>
      <Route path="/addEmployee" exact strict component={AddEmployee}/>
      <Route path="/employeeList/viewDetails" exact strict component={ViewDetails}/>
      <Redirect to="/employeeList"/>
      </Switch>
     </Container> 
     );
  }
  else{
    container = (<div>
      <Switch>
      <Route path="/login" exact strict component={Login}/>
      <Redirect to="/login"/>
       </Switch>
      </div>
    );
  }
  return (
    <div>
    {container}
    </div>
  )
}

}

export default withRouter(App);
