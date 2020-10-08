/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ResultScreen from './src/Pages/ResultScreen';
import IntroScreen from './src/Pages/IntroScreen';

class SkinAI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      transferData: null,
    };
  }

  changePage = (page) => {
    this.setState({currentPage: page});
  };

  exitPage = () => {
    // console.log('Back Page');
    const {exitPage} = this.props;
    exitPage && exitPage();
  };

  setTransferData = (data) => {
    this.setState({transferData: data});
  };

  render() {
    const {email, apikey, linkserver, language = 'vi'} = this.props;
    return this.state.currentPage === 0 ? (
      <IntroScreen
        exitPage={this.exitPage}
        changePage={this.changePage}
        email={email}
        apikey={apikey}
        linkserver={linkserver}
        language={language}
        setTransferData={this.setTransferData}
      />
    ) : (
      <ResultScreen
        changePage={this.changePage}
        language={language}
        setTransferData={this.setTransferData}
        transferData={this.state.transferData}
      />
    );
  }
}

export default SkinAI;
