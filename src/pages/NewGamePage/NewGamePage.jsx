import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Typography } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const { Title } = Typography;

export const NewGamePage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()

    const votingSystems = [
        [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?'],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '?'],
    ]

    const votingOptions = votingSystems.map(
        (item, index) => <Option value={index}> {item.join(', ')}</Option>
    )

    const onGenderChange = (value) => {
        //TODO отправить в эффектор
        console.log('onGenderChange', value)
    };

    const handleFinish = (values) => {
        console.log(values);
        navigate('/')
    };

    const handleReset = () => {
        form.resetFields();
    };

    return (<>
            <Title level={5}>Выберите имя и систему голосования для игры</Title>
            <Form {...layout} form={form} name="control-hooks" onFinish={handleFinish}>
                <Form.Item
                    name="Имя игры"
                    label="Имя игры"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input prefix={<AimOutlined />}/>
                </Form.Item>
                <Form.Item
                    name="Система голосования"
                    label="Система голосования"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Нажмите для выбора системы голосования"
                        onChange={onGenderChange}
                        allowClear
                    >
                        {votingOptions}
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Подтвердить
                    </Button>
                    <Button htmlType="button" onClick={handleReset}>
                        Сброс
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}