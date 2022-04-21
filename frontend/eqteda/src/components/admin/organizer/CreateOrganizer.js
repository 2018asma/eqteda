// import React from "react";
// import axios from "axios";
// import { Button, styled } from "@mui/material";
// import { Save } from "@mui/icons-material";

// const CreateOrganizer = ({confirmCreate}) => {
  
     const handleCreate = async () => {
      console.log('Handle Create Function')
      // try {
      //   const response = await axios.post(
      //     "http://localhost:3008/admin/organizers/create",
      //     {
      //       withCredentials: true,
      //     }
      //   );
      //   confirmCreate()
      //   console.log(response);
      // } catch (e) {
      //   console.log(e.response);
      // }
    };

   export const handleSubmit = (inputs)=>{
      const data = new FormData()
      
      for(let item in inputs){
        console.log(item)
        // data.append(item, formData[item])
      }
      console.log(inputs)
      
      handleCreate()
    }


    // const CustomButton = styled(Button)(({ theme }) => ({
    //   margin: 5,
    //   "& > span": {
    //     marginLeft: "8px",
    //     marginRight: "-2px",
    //   },
    // }));
  


//   return (
//     <CustomButton
//      type="submit"
//       size="small"
//       onSubmit={handleSubmit}
//       variant="contained"
//       startIcon={<Save/>}
//     >
//       حفظ
//     </CustomButton>
//   );
// };

// export default CreateOrganizer;
