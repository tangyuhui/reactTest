import React, { Component } from 'react';
import { Input,Row, Col,Button,List   } from 'antd';
import { connect } from 'react-redux'
import { setInputValue,addListItem,deleteItem } from '@/store/actions'

class TodoList extends Component {
 
  constructor(props){
    super(props)
    this.state={
      list:[]
    }
    console.log(this.props)
  }
  render() {
    return (
      <div className="App p-10" >
         <Row className="mt-10">
          <Col span={6}><Input placeholder="请输入" value={this.props.inputValue} onChange={this.props.handleInput} /></Col>
          <Col span={6} style={{textAlign:"left"}} className="ml-10"> <Button type="primary" onClick={this.props.handleClick}>确认</Button></Col>
        </Row>
        <Row className="mt-10">
          <Col span={6}>
              <List
              bordered
              dataSource={this.props.list}
              renderItem={(item,index) => (<List.Item key={item} onClick={()=>this.props.deleteItem(index)}>{item}</List.Item>)}
            />
          </Col>
        </Row>
   
      </div>
    );  
  }
  handleClick(){
    this.setState((prevState)=>{
      console.log(prevState)
      return {
        list : [...prevState.list,prevState.inputValue],
        inputValue:''
      }
 })
  }
  handleInput(e){
    const {value} = e.target
    this.setState(()=>{
        return {
          inputValue:value
        }
   })
  }
  deleteItem(index){
    this.setState((prevState)=>{
      let newList =[...prevState.list]
      newList.splice(index,1)
      console.log(newList)
      return {
        list:newList
      }
    })
  }
}
const mapStateToProps = state => {
  return {
    inputValue:state.todo.inputValue,
    list:state.todo.list
  }
} 
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleInput: (e) => {
    dispatch(setInputValue(e.target.value))
  },
  handleClick:()=>{
    dispatch(addListItem())
  },
  deleteItem:(index)=>{
    dispatch(deleteItem(index))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
