import React, { useEffect } from "react";
import { IProject } from "../../../interface/projects";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProject } from "../../../api/projects";

type Props = {
  projects: IProject[];
};

const ProjectEdit = ({ projects }: Props) => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams(); // lấy id từ url
  useEffect(() => {
    const currentProject = projects.find((item) => item._id == id); // tìm product có id trùng với id trên url
    reset(currentProject); // reset lại form với giá trị của product
  }, [projects]);
  const onHandleSubmit = async (data: any) => {
    await updateProject(data);
    navigate("/admin/products");
  };
  return <></>;
};

export default ProjectEdit;
