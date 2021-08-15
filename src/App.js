import React from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import Timer from './Components/Timer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      input:"",
      days:0,
      hours:0,
      minutes:0,
      seconds:0,
      isClick:false
    }
  }
   onDateInput= (e) =>{
    this.setState({
      input : e.target.value,
    })
   }
   onClickHandle = () =>{
      let currentTime=new Date().getTime();
      let countDownTime=new Date(this.state.input).getTime();
      let distance=countDownTime-currentTime;
      
       this.setState({countDown: distance})
       if(distance < 0 || this.state.input===""){
        alert("Please enter future date");
        return;
      }
      let x = setInterval(()=>{
      distance=distance-1000;
      let day = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hour= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let second = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({
        days:day,
        hours:hour,
        minutes:minute,
        seconds:second,
        input:""
      }, () => this.timeUp(x))
     },1000) 

     this.setState({isClick:true})
   }

   timeUp = (props)=>{
     if((this.state.days+this.state.hours+this.state.minutes+this.state.seconds)===0){
       clearInterval(props);
     }
   }
  render(){
  return (
    <div className="App">
      <h1>{`The Timer Ends In`}</h1>
       <Timer days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
       <div className="input_container">
       <Input onDateInput={this.onDateInput} input={this.state.input} />
        <Button onClickHandle={this.onClickHandle}/>
       </div>
        
    </div>
  );
}
}

export default App;
