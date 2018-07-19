import React, { Component } from 'react';
// 对react ui 阿里的antd 部份引用
import { Table, Pagination, Input, Row, Button, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import './App.css'
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;

class App extends Component {
    columns = [{
        dataIndex: "username",
        title: '用户'
    },
    {
        dataIndex: "age",
        title: '年龄'
    },
    {
        dataIndex: "address",
        title: '地址'
    },
    {
        dataIndex: "action",
        title: "操作",
        width: 200,
        render: (text, row) => {
            return (
                <div>
                    <Button type="primary" onClick={() => {this.modal('edit', row)}}>编辑</Button>
                    <Button type="danger" onClick={ () => this.remove(row) } style={{marginLeft: 10}}>删除</Button>                    
                </div>
            )
        }
    }]
    state = {
        visible: false,
        type: 'add',
        users: [{
            username: 'zk',
            age: 18,
            address: '杭州',
            id: 1
        }]
    }
    remove(row) {
        console.log(row)
        const that = this;
        confirm({
            title: '是否要删除该用户？',
            okText: '是',
            cancelText: '否',
            onOk() {
                // 保存对this的引用，也可使用箭头函数
                const _users = that.state.users.filter(data => {
                    return data.id !== row.id;
                });
                that.setState({
                    users: _users
                })
            }
        })
    }
  render() {
    // 容器组件：将App包在Form内，Form.create()(App) 封装，this.props.form 拿出
    // 解构：获取一个字段的装饰器(表单验证)
    // 装饰者模式
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 4 }
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
          }
      }
    return (
      <div className="App">
        <Row>
          <Search style={{width: 300}}/>
          <Button type="primary" style={{marginLeft: 20}} onClick={() => this.modal('add')}>添加用户</Button>
        </Row>
        <Row>
            <Table dataSource={this.state.users} 
                columns={this.columns} 
                rowKey={row => row.id} 
                bordered 
                pagination={false}/>
        </Row>
        <Modal title="添加用户" visible={this.state.visible} 
            onCancel={() => this.setState({ visible: false })}
            onOk={() => this.handleOk()}>
            <Form>
                <FormItem label="用户" {...formItemLayout}>
                    {
                        getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!'}]
                        })(<Input placeholder="Username"/>)
                    }
                </FormItem>
                <FormItem label="年龄" {...formItemLayout}>
                    {
                        getFieldDecorator('age', {
                            rules: [{ required: true, message: 'Please input your age!'}]
                        })(<Input placeholder="Age"/>)
                    }
                </FormItem>
                <FormItem label="地址" {...formItemLayout}>
                    {
                        getFieldDecorator('address', {
                            rules: [{ required: true, message: 'Please input your address!'}]
                        })(<Input placeholder="Address"/>)
                    }
                </FormItem>
            </Form>
        </Modal>
      </div>
    );
  }
  modal (type, row) {
    console.log(type)
    this.setState({
        visible: true,
        type
    }, () => {
        this.props.form.resetFields();
        if (type === 'add') return;
        this.props.form.setFieldsValue({
            username: row.username,
            age: row.age,
            address: row.address
        })
    })
  }
  handleOk(e) {
    // 验证表单 validateFieldsAndScroll 使用了 异步回调
    console.log('ok:', e);
    this.props.form.validateFieldsAndScroll((err, values) => {
        console.log('values:', values);
        if (!err) {
            const obj = {
                username: values.username,
                age: values.age,
                address: values.address,
                id: this.state.users.length+1
            }
            const users = this.state.users;
            users.push(obj);
            this.setState({
                visible: false,
                users
            })            
        } else {
            console.log(err);
        }
    })
  }
}
// 创建一个 form 表单
export default  Form.create()(App);
