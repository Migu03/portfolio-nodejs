import React, { useEffect, useState } from "react";
import { UndoOutlined } from "@ant-design/icons";
import { Space, Table, Tag, Button, Tooltip,Popconfirm,notification } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProject } from "../../../interface/projects";
import { ITechnology } from "../../../interface/technologies";
import { forceDeleteProject, restoreProject } from "../../../api/projects";
// import '../../../assets/css/admin.css';

interface DataType {
  key?: string | number;
  name: string;
  image?: string;
  thumbnail?: string;
  description?: string;
  slug: string;
  link?: string;
  linkGithub?: string;
  technologyId?: [];
  categoryId: {};
  createdAt?: Date;
  updateAt?: Date;
  deleteAt?: Date;
  deleted?: boolean;
}

type Props = {
    projectsTrash: IProject[];
};

const ProjectTrash = ({ projectsTrash }: Props) => {
  // tooltip
  const text = <span>Restore</span>;

  // notification
  const [api, contextHolder] = notification.useNotification();
  
  // popconfirm
  const [openId, setOpenId] = useState<number | string | null>(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const showPopconfirm = (id: number | string) => {
    setOpenId(id);
  };

  const handleOk = (id: number | string) => {
    setConfirmLoading(true);
    forceDeleteProject(id)
    setOpenId(null);
    setTimeout(function () {
      setShowNotification(true);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    setOpenId(null);
  };

  // Display notification
  useEffect(() => {
    if (showNotification) {
      api.success({
        message: "Delete successfully",
      });
      setShowNotification(false);
    }
  }, [api, showNotification]);

  // colums
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      align: "center",
      fixed: "left",
    },
    {
      title: "Thumbnail",
      width: 110,
      dataIndex: "thumbnail",
      align: "center",
      key: "image",
      render: (thumbnail) => <img className="thumbnail" width={"80px"} src={thumbnail} alt="" />,
    },
    {
      title: "Công nghệ",
      dataIndex: "technologyId",
      key: "technologyId",
      align: "center",
      width: 150,
      render: (technologyId) =>
        technologyId.map((item:ITechnology) => (
          <Tag key={item._id} color="rgba(13, 29, 49, 0.9)">
            <i className={`bx bxl-${item?.tag} tag`}></i>
          </Tag>
        )),
    },
    {
      title: "Link website",
      dataIndex: "link",
      key: "link",
      align: "center",
      width: 200,
    },
    {
      title: "Danh mục",
      dataIndex: "categoryId",
      key: "categoryId",
      align: "center",
      width: 150,
      render: (record) => {
        return <span>{record?.name}</span>
      }
    },
    {
      title: "Action",
      key: "operation",
      align: "center",
      fixed: "right",
      width: 100,
      render: (record) => {
        const isOpen = openId === record._id;
        return (
          <Space size="middle">
              <Tooltip placement="top" title={text}>
                <UndoOutlined onClick={() => restoreProject(record._id)}/>
              </Tooltip>
            <Popconfirm
              title="Are you sure to delete?"
              // open={removingId !== null}
              onConfirm={() => handleOk(record._id)}
              okButtonProps={{ loading: confirmLoading }}
              onCancel={handleCancel}
              popupVisible={isOpen}
            >
              {contextHolder}
              <Button
                type="primary"
                danger
                onClick={() => showPopconfirm(record._id)}
              >
                Delete
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

const data: any = projectsTrash?.map((project: IProject) => {
  return {
    key: project._id,
    ...project,
  };
});

  if (!projectsTrash) return <div>Loading....</div>;
  return (
    <>
    <p className="title">Project removed recent</p>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 1500, y: 500 }}
      />
    </>
  );
};

export default ProjectTrash;
