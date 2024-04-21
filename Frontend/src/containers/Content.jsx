import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'; // Import Link from react-router-dom

import Home from '../components/Home/Home';
import Graph from '../components/Graph/Graph';
import MacroUsGDPGrowthRange from '../components/Graph/GrowthRateGraph';
import CurrentAccountBalance from '../components/Graph/CurrentAccountBalance';
import FDIGraph from '../components/Graph/FDIBOI'; // Make sure this import matches your file name
import Chat from '../components/Chat/Chat';
import './Content.css';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutline'; // Import the chat icon

const Content = () => {
    return (
        <main className="content">
            <div className="content_container">
                {/* Add a button that links to the chat route */}

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/graph">
                        <Graph />
                    </Route>
                    <Route path="/macrogdpgrowthrange">
                        <MacroUsGDPGrowthRange />
                    </Route>
                    <Route path="/currentaccountbalance">
                        <CurrentAccountBalance />
                    </Route>
                    <Route path="/fdigraph">
                        <FDIGraph />
                    </Route>
                    <Route path="/chat">
                        <Chat />
                    </Route>
                </Switch>
                <Link to="/chat" className="chat-icon-link">
    <div className="chat-icon-with-text">
        <ChatBubbleIcon style={{ fontSize: 40 }} />
        <span className="chat-text">Chat with Budget LLM</span>
    </div>
</Link>

            </div>
        </main>
    );
};

export default Content;
