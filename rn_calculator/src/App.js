import React, { Component } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Button from './components/Button';
import DIsplay from './components/DIsplay';

export default class App extends Component {
  state = {
    displayValue: '0'
  } 

  addDigit = n => {
    this.setState({ displayValue: n })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOperation = operation => {
      
    }
    
  render() {
    return (
      <View style={styles.container}>
        <DIsplay value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple OnClick={this.clearMemory} />
          <Button label='/' operation OnClick={this.setOperation}/>
          <Button label='7' OnClick={this.addDigit} />
          <Button label='8' OnClick={this.addDigit} />
          <Button label='9' OnClick={this.addDigit} />
          <Button label='*' operation ={this.setOperation}/>
          <Button label='4' OnClick={this.addDigit} />
          <Button label='5' OnClick={this.addDigit} />
          <Button label='6' OnClick={this.addDigit} />
          <Button label='-' operation ={this.setOperation}/>
          <Button label='1' OnClick={this.addDigit} />
          <Button label='2' OnClick={this.addDigit} />
          <Button label='3' OnClick={this.addDigit} />
          <Button label='+' operation ={this.setOperation}/>
          <Button label='0' double OnClick={this.addDigit} />
          <Button label='.' OnClick={this.addDigit} />
          <Button label='=' operation ={this.setOperation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});