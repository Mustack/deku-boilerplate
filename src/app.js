import element from 'virtual-element';//eslint-disable-line
import {render, tree} from 'deku';
import Root from './root';

import './index.html';

const app = tree(<Root/>);
render(app, document.getElementById('app'));
