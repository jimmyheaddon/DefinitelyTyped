// Type definitions for enzyme-adapter-react-16 1.1
// Project: https://github.com/airbnb/enzyme
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Jimmy Headdon <https://github.com/jimmyheaddon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { EnzymeAdapter } from 'enzyme';

declare class ReactSixteenAdapter extends EnzymeAdapter {
    constructor();
}

declare const Adapter: typeof ReactSixteenAdapter;
export = Adapter;
