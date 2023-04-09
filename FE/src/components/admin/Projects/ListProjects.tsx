import {Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import{
    DeleteFilled,
} from '@ant-design/icons';
interface DataType {
    key: string;
    name: string;
    tags: string[];
}
const columns: ColumnsType<DataType> = [

    {
        title: 'Name Project',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Thumbnail',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Categories',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[]) => (
            <span>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'Pink' : 'yellow';
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
        title: 'Author',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space wrap>
                <Button type="primary">Update</Button>
                <Button danger><DeleteFilled style={{color:'red'}}/></Button>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {   
        key:"1",
        name: 'John Brown',
        tags: ['nice', 'developer'],
    },
];

type Props = {}

const ListProject = (props: Props) => {

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default ListProject