import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Avatar,
  styled,
  Card,
  CardContent,
  CardActions,
  Grid,
  Input,
  FormLabel,
} from "@mui/material";
import { Add, Delete, Save } from "@mui/icons-material";
import Model from "../Model";
import SuccessMesage from "./SuccessMesage";
import { handleSubmit } from "./createOrganizer";

const OrganizersList = () => {
  const [image, setImage] = useState("");
  const [add, setAdd] = useState(false);
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    const getOrganizers = async () => {
      try {
        const response = await axios.get("http://localhost:3008/organizers/");
        setOrganizers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrganizers();
  }, []);

  const addOrganizer = (e) => {
    setAdd(true);
  };

  const CustomButton = styled(Button)(({ theme }) => ({
    margin: 5,
    "& > span": {
      marginLeft: "8px",
      marginRight: "-2px",
    },
  }));

  const handleInputs = (e) => {
    // e.preventDefault();

    // console.log(e.target.name)

    if (e.target.name === "name") {
      // console.log(e.target.value)
      setName(e.target.value);
    }

    if (e.target.name === "description") {
      // console.log(e.target.value)
      setDescription(e.target.value);
    }

    if (e.target.name === "image") {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
      // console.log(e.target.value)
    }
  };

  const organizerCard = (
    id,
    img,
    name,
    des,
    onRemove,
    onSave,
    remove,
    onsubmit
  ) => {
    return (
      <Grid item xs={12} md={4} key={id}>
        <Card>
          <form onSubmit={onsubmit}>
            <CardContent>
              <FormLabel htmlFor="image">
                <Avatar
                  src={img || image}
                  sx={{ width: 64, height: 64, margin: "auto" }}
                />
              </FormLabel>

              <Input
                name="image"
                // type="file"
                sx={{ display: "none" }}
                id="image"
                value={file}
                onChange={onSave}
              />
              <FormLabel sx={{ fontSize: 14 }}>الاسم</FormLabel>
              <Input
                name="name"
                fullWidth
                defaultValue={name}
                sx={{ mb: 2, mt: 1, fontSize: 14 }}
                onChange={onSave}
              />
              <FormLabel sx={{ fontSize: 14 }} color="error">
                الوصف
              </FormLabel>
              <Input
                name="description"
                onChange={onSave}
                fullWidth
                defaultValue={des}
                multiline
                maxRows={3}
                sx={{ mt: 1, mb: 1, fontSize: 14 }}
              />
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              {/* <CreateOrganizer  /> */}
              <CustomButton
                type="submit"
                // onClick={onSave}
                size="small"
                variant="contained"
                startIcon={<Save />}
              >
                حفظ
              </CustomButton>
              {remove && (
                // <DeleteOrganizer showModal={onRemove} />
                <CustomButton
                  onClick={onRemove}
                  color="error"
                  size="small"
                  variant="contained"
                  startIcon={<Delete />}
                >
                  حذف
                </CustomButton>
              )}
            </CardActions>
          </form>
        </Card>
      </Grid>
    );
  };
  // Component
  return (
    <Box
      flex={4}
      px={3}
      py={5}
      sx={{ backgroundColor: "#eee" }}
      ml="0 !important"
    >
      <Box>
        <CustomButton
          onClick={addOrganizer}
          variant="contained"
          startIcon={
            <Add sx={{ backgroundColor: "black", borderRadius: "50px" }} />
          }
        >
          إضافة منظم
        </CustomButton>
        <Grid container spacing={2} my={1}>
          {add &&
            organizerCard(
              null,
              null,
              null,
              () => setAdd(false),
              null,
              handleInputs,
              null,
              (e) => {
                e.preventDefault();
                handleInputs();
                handleSubmit({
                  name,
                  description,
                  file,
                });
              }
            )}
          {organizers.map((item) => {
            const options = [
              item.id,
              `http://localhost:3008/${item.image}`,
              item.name,
              item.description,
              () => setModal(true),
              () => {
                alert("Saved");
              },
              true,
            ];
            return organizerCard(...options);
          })}
        </Grid>
      </Box>
      <Model
        openModal={modal}
        closeModal={() => setModal(false)}
        isOpen={(value) => setIsOpen(value)}
      />
      <SuccessMesage open={isOpen} />
    </Box>
  );
};

export default OrganizersList;
