import React, { Component } from 'react';

import { Layout, Form, Input, Icon, Row, Col, Button, Card, List} from 'antd';

export class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText : '',
      listItem: []
    }

    this.handleChangeText = this.handleChangeText.bind(this);

  }

  submitList = () => {
    this.setState({
      listItem: this.state.listItem.concat([this.state.inputText]),
      inputText: ''
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.submitList();
    }
  }

  handleChangeText = (event) => {
    this.setState({inputText: event.target.value});
  }

  render() {

    // const data = [
    //     'text 1',
    //     'text 2',
    //     'text 3',
    // ];

    const { Header, Footer, Sider, Content } = Layout;
    const Search = Input.Search;
    const FormItem = Form.Item;

    return (
        <Card style={{ width: 500 }}>
            <h1>To-do-list</h1>

            <div style={{ marginBottom:'10px'}}>
              <Input
                addonAfter={<Button type="primary" onClick={this.submitList}>Add</Button>}
                onChange={this.handleChangeText}
                value={this.state.inputText}
                onKeyPress={this.handleKeyPress}/>
            </div>

            <List
              bordered
              dataSource={this.state.listItem}
              renderItem={item => (
                <List.Item actions={[<a><Icon type="close-circle" style={{ fontSize: 16, color: 'rgb(255, 145, 0)' }} /></a>]}>
                    {item}
                </List.Item>
            )}
            />
            {/*
              this.state.listItem.map((value, index) => {
                //console.log(index);
                return (
                  <h3 key={index + value}>{value}</h3>
                );
              })
            */}
        </Card>
      );
    }
}
