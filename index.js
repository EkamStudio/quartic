import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Application from './src/components/Application';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlusCircle, faListUl } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPlusCircle, faListUl)

ReactDOM.render(<Application />, document.getElementById("root"));
