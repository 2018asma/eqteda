import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import { ReportGmailerrorred } from "@mui/icons-material";
import DeleteOrganizer from "./organizer/DeleteOrganizer";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
  alignItems: "center",
};

const Model = ({ openModal, closeModal, isOpen }) => {
  return (
    <Box>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardContent sx={{ textAlign: "center" }}>
            <ReportGmailerrorred color="error" fontSize="large" />
            <Typography variant="h6" mt={1}>
              سيتم الحذف نهائياً
            </Typography>
          </CardContent>
          <CardActions>
          <DeleteOrganizer confirmDelete={()=>{
            closeModal();
            isOpen(true);
            setTimeout(() => {
              isOpen(false);
            }, 1000);
          }} />
            {/* <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => {
                closeModal();
                isOpen(true);
                setTimeout(() => {
                  isOpen(false);
                }, 1000);
              }}
            >
              تأكيد الحذف
            </Button> */}
          </CardActions>
        </Card>
      </Modal>
    </Box>
  );
};

export default Model;
