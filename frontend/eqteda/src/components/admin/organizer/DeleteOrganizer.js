import React from "react";
import axios from "axios";
import { Button, styled } from "@mui/material";

const DeleteOrganizer = ({confirmDelete}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    margin: 5,
    "& > span": {
      marginLeft: "8px",
      marginRight: "-2px",
    },
  }));

    const handleDelete = async () => {
      try {
        const response = await axios.delete(
          "http://localhost:3008/admin/organizers/destroy/50",
          {
            withCredentials: true,
          }
        );
        confirmDelete()
      } catch (e) {
        console.log(e.response);
      }
    };

  

  return (
    <CustomButton
      onClick={() => handleDelete()}
      color="error"
      variant="contained"
    >
      حذف
    </CustomButton>
  );
};

export default DeleteOrganizer;
