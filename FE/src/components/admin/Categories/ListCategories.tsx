import React, { useState } from 'react';
import { Radio, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: number|string;
    name: string;
    tags: string[];
}
const columns: ColumnsType<DataType> = [
    {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
        render: (index) => <a>{index+1}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[]) => (
            <span>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: "1",
        name: 'John Brown',
        tags: ['nice', 'developer'],
    },
];

type Props = {}

const ListCategories = (props: Props) => {

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default ListCategories