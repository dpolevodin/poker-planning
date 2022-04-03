import { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { subscribeToPoker } from '../../api';

export const GamePage = () => {
    const [userName, setUserName] = useState('')
    if (userName) {
        subscribeToPoker(userName)
    }
    const onFinish = (values) => {
        setUserName(values.username)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(userName)

    return (
        <>
            <div>This is Poker Planning!</div>
            {userName && (<div>Hello, {userName}!</div>)}
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}