import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import data from '../testData';

import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = { test: 42};
    // }
    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    componentDidMount(){
    //    axios.get('/api/contests')
    //         .then(resp => {
    //             this.setState({
    //                 contests: data.contests
    //             });
    //         })
    //         .catch(console.error);

        // this.setState({
        //     contests: data.contests
        // });
    }
    // componentWillMount(){
    //     // console.log('Will Unount');
    //     // debugger;
    //     // Clean Timers & Listeners
    // }
    
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                {this.state.contests.map(contest =>
                    <ContestPreview key={contest.id} {...contest} />
                )}
                </div>
            </div>
        );
    }
}

export default App;


/************** Statelesss Component **************/

// const App = (props) => {
//     return (
//         <div className="App">
//             <Header message="Naming Contests" />
//             <div>
//                 ...
//             </div>
//         </div>
//     );
// };

// App.propTypes = {
//     headerMessage: PropTypes.string
// };

// App.defaultProps = {
//     headerMessage: 'Hello!!'
// };