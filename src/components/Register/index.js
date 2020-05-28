import React from 'react';
import {Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const index = () => {
    return(
        <div>
        <Button>Developer</Button>
        <Button>Company</Button>
        </div>
    )
}

export default index;