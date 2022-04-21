import { Alert, Snackbar } from "@mui/material";
import React from "react";

const SuccessMesage = ({open}) => {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity="success" color="success">
        تم الحذف بنجاح
      </Alert>
    </Snackbar>
  );
};

export default SuccessMesage;
