// import { Box, styled, Tab, Tabs, Typography } from "@mui/material";
// import { useState } from "react";
// import OrganizersList from "./OrganizersList";
// import CreateOrganizer from './CreateOrganizer'

// const Organizers = () => {
//   const [tabVale, setTabValue] = useState(0);

//   const handleTab = (event, value)=>{
//     setTabValue(value)
//   }
//   const Tabpanel = ({children, index, value})=>{
//     return(
//       <Box>
//         {value === index &&(
//           <Typography>{children}</Typography>
//         )}
//       </Box>
//     )
//   }
//   return (
//     <Box bgcolor={"#eee"} flex={4}  px={2}  ml="0 !important">
//       <Box >
//         <Tabs
//           value={tabVale}
//           onChange={handleTab}
//           aria-label="basic tabs example"
//         >
//           <Tab label="جميع المنظمون"  />
//           <Tab label="إضافة منظم" />
//           <Tab label="تعديل منظم"  />
//         </Tabs>
//       </Box>
//       <Tabpanel value= {tabVale} index={0}>
//         <OrganizersList/>
//       </Tabpanel>
//       <Tabpanel value= {tabVale} index={1}>
//         <CreateOrganizer/>
//       </Tabpanel>
//       <Tabpanel value= {tabVale} index={2}>
//         panel 3
//       </Tabpanel>
//     </Box>
//   );
// };

// export default Organizers;
