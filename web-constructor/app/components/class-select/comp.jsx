import { Badge, Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Box from '../box/comp';
import { useState } from 'react';
import { generate } from '../../../app/utilities/utilities'

var Style = styled.div``

function Item(props){

    var badge = (
        <>
            <EditOutlined/>
            <DeleteOutlined />
        </>
    )

    return (
        <>
            <Box fill='' badge={badge}>
                <Button type="primary" shape="round">{props.children}</Button>
            </Box>
        </>
    )
}

function ButtonAdd(props){
    
    return (
        <>
            <Button className='success' type="primary" shape="circle"><PlusOutlined /></Button>
        </>
    )
}

export default function ClassSelect(props){
    var [data, setData] = useState(props.data.map(el => <Item key={generate.id()}>{el}</Item>));

    return (
        <>
            <Style>
                <Box>
                    <Space size={24} direction='horizontal' wrap>
                        {data}
                        <ButtonAdd/>
                    </Space>
                </Box>
            </Style>
        </>
    )
};