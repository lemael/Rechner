import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
export default class Rechner extends React.Component {
  state = {
    display: ''
  }
  _handleClick(btnVal){
    let result = this.state.display;
    if(result === '0'){
      result = ''
    }
    if (btnVal === '=') {
      result = String(eval(result))
    }else if(btnVal === 'D') {
      result =''
    }else{
      result +=btnVal  
    }
    
    this.setState({
      display: result,
    })
  }
  render(){
    return (
      <View style = {styles.container}>
       <Text style ={styles.display}>{this.state.display}</Text>
      <View style = {styles.row}>
      <MeinButton val={7} handleClick={this._handleClick.bind(this)}/>
      <MeinButton val={8}  handleClick={this._handleClick.bind(this)}/>
      <MeinButton val={9}  handleClick={this._handleClick.bind(this)}/> 
       <MeinButton val={'/'}  handleClick={this._handleClick.bind(this)} highlight={true}/> 
      </View>

      <View style = {styles.row}>
      <MeinButton val={4}  handleClick={this._handleClick.bind(this)}/>
      <MeinButton val={5}  handleClick={this._handleClick.bind(this)}/>
      <MeinButton val={6}  handleClick={this._handleClick.bind(this)}/>
       <MeinButton val={'*'}  handleClick={this._handleClick.bind(this)} highlight={true}/>  
      </View>
     
      <View style = {styles.row}>
      <MeinButton val={1}  handleClick={this._handleClick.bind(this)}/>
      <MeinButton val={2}  handleClick={this._handleClick.bind(this)}/>
      <MeinButton val={3}  handleClick={this._handleClick.bind(this)}/>
       <MeinButton val={'-'}  handleClick={this._handleClick.bind(this)} highlight={true}/>  
      </View>
     
      <View style = {styles.row}>
      <MeinButton val={'D'}  handleClick={this._handleClick.bind(this)}/>
      <MeinButton val={0}  handleClick={this._handleClick.bind(this)}/>
      <MeinButton val={'='}  handleClick={this._handleClick.bind(this)}/>
       <MeinButton val={'+'}  handleClick={this._handleClick.bind(this)} highlight={true}/>  
      </View>
      </View>
    )
  }
}

const MeinButton = ({val, handleClick, highlight}) =>  (
    <TouchableOpacity style={[styles.btn, {backgroundColor:(highlight ? '#335':'#5086f8')}]} onPress={()=>{
    handleClick(val)
    }}>
        <Text style={styles.btnText}>
        {val}
        </Text>
       </TouchableOpacity>
  )


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row : {
    flexDirection : 'row',
  },
  btn :{
    
    flex: 1,
    padding: 20
  },
  btnText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  display :{
    fontSize : 70,
    padding: 20
  }
});