import { Avatar,Box,CardMedia,IconButton,CardHeader} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";
const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  const classNamees = useStyles();
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`https://blogmernkalai.herokuapp.com/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };
  return (
    <>

      <div className="col-xl-6 col-md-6">
        
        <div className="single-service">

        {isUser && (
            <Box display="flex">
              <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
                <ModeEditOutlineIcon color="primary" />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteForeverIcon color="error" />
              </IconButton>
             
            </Box>
          )}

        <span>{userName}</span>
        
          <CardMedia component="img" height="194" image={imageURL} alt="Paella dish" />

          <div className="content">
          <h2>  {title} </h2>
            <p> {description} </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Blog;