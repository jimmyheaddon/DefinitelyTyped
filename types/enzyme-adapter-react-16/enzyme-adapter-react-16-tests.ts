import { configure } from 'enzyme';

// CommonJS module syntax
import AdapterCommonJs = require('enzyme-adapter-react-16');
configure({ adapter: new AdapterCommonJs() });

// ECMAScript module syntax
import * as AdapterEcmaScript from 'enzyme-adapter-react-16';
configure({ adapter: new AdapterEcmaScript() });
