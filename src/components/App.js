import React from 'react';
import PropTypes, { number } from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => 
    window.history.pushState(obj, '', url);

const onPopState = handler => {
    window.onpopstate = handler;
};

class App extends React.Component{
    static propTypes = {
        initialData: PropTypes.object.isRequired
    };
    state = this.props.initialData;
    
    componentDidMount(){
        onPopState((evernt) => {
            this.setState({
                currentContestId: (event.state || {} ).currentContestId
            });
        });
    }

    componentWillUnmount(){
        onPopState(null);
    }

    fetchContest = (contestId) => {
        pushState(
            {currentContestId: contestId },
            `/contests/${contestId}`
        );
        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest._id,
                contest: {
                    ...this.state.contests,
                    [contest._id]: contest
                }
            });
        });
    };

    fetchContestList = () => {
        pushState(
            {currentContestId: null },
            `/`
        );
        api.fetchContestList().then(contests => {
            this.setState({
                currentContestId: null,
                contests
            });
        });
    };

    fetchNames = (nameIds) => {
        if( nameIds.length == 0 ){
            return;
        }
        api.fetchNames(nameIds).then(names => {
            this.setState({
                names
            });
        });
    };

    currentContest2(){
        return this.state.contests[this.state.currentContestId];
    }
    pageHeader(){
        if( this.state.currentContestId){
            return this.currentContest2().contestName;
        }
        return 'Naming Contests';
    }

    lookupName = (nameId) => {
        if( !this.state.names || !this.state.names[nameId] ){
            return {
                name: '...'
            }
        }
        return this.state.names[nameId];
    }

    addName = (newName, contestId) => {
        if( !newName || !contestId )
            return;
        api.addName(newName, contestId).then(resp => 
            this.setState({
                contests: {
                    ...this.state.contests,
                    [resp.updatedContest._id]: resp.updatedContest
                },
                names: {
                    ...this.state.names,
                    [resp.newName._id]: resp.newName
                }
            })
        )
        .catch(console.error);
    }

    currentContest(){
        if (this.state.currentContestId){
            return <Contest 
                    contestListClick = {this.fetchContestList}
                    fetchNames = {this.fetchNames}
                    lookupName = {this.lookupName}
                    addName = {this.addName}
                    {...this.currentContest2()} />;
        }
        return <ContestList 
                    onContestClick={this.fetchContest}
                    contests={this.state.contests} />;
    }

    render() {
        return (
            <div className="App">
                <Header message={this.pageHeader()} />
                {this.currentContest()}
                {/* <ContestList 
                    onContestClick={this.fetchContest}
                    contests={this.state.contests} /> */}
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