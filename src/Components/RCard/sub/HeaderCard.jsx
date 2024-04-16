import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import CustomizedTypography from "./CustomizedTypography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Lottie from "lottie-react";
import animationData from "../Assets/alert.json";
import Popover from '@mui/material/Popover';
import settings from "../Assets/settings.json";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import destroy from "../Assets/destroy.json";
import deleteIcon from "../Assets/delete.json";
import { useRef } from "react";

function HeaderCard({
  title,
  subtitle,
  graphComponent,
  priceValue,
  percentage,
  trendingStatus,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [showInst, setShowInst] = useState(true);
  const [animate, setAnimate] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleViewClick = () => {
    // Implement logic to fetch instance data or any other action before opening the modal
    setModalOpen(true);
  };

  function handleClick(){
    setShowInst(false);
  }

  function handleAnimationComplete(){
    setAnimate(false)
  }

  return (
    <div>
      <Card
        style={{
          margin: 10,
          border: "1px solid #CB5EDC",
          borderRadius: "9px",
          height: "120px",
          width: "250px",
          backgroundImage:
          "linear-gradient(to bottom left, #F0EBE3 , #F2D7D9 )",
          boxShadow: "5px 2px 4px rgba(20, 20, 10, 10)",
          position: "relative", // Added for positioning the view button
        }}
      >
        {/* View Button */}
        <Button
          startIcon={
            <RemoveRedEyeIcon sx={{ height: "15px", marginLeft: "1px" }} />
          }
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            fontSize: "10px",
            color: "#000000",
            height: "20px",
            width: "40px",
            borderRadius: "999px",
            opacity: "100%",
          }}
          onClick={handleViewClick}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          View
        </Button>
        <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          '& .MuiPaper-root': {
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', 
            borderRadius: '8px', 
            backgroundImage:"linear-gradient(to bottom left, #F3D0D7 , #F0EBE3)",
            border:"1px solid #FFCDEA"
          },
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1,fontSize: 9, fontWeight:"bold", fontFamily:"monospace" }}>Click to view and <br></br> delete the instances</Typography>
      </Popover>
        <div style={{ height: "10px", padding: "5px" }}>
          <CustomizedTypography
            style={{
              fontSize: 16,
              opacity: 1,
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "0px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Lottie
                style={{ height: "20px", width: "20px", marginLeft: "0px" }}
                animationData={animationData}
              />
              {title}
            </div>
          </CustomizedTypography>
          {subtitle && (
            <Button
              variant="outlined"
              startIcon={
                <Lottie
                  style={{ width: "27px", marginLeft: "-15px" }}
                  animationData={settings}
                />
              }
              style={{
                right: "40px",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000000",
                height: "26px",
                width: "150px",
                borderRadius: "999px",
                border: "0.5px solid #CB5EDC",
              }}
            >
              {subtitle}
            </Button>
          )}
        </div>

        <CardContent>
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={6}>
              <CustomizedTypography
                variant="h5"
                component="div"
                style={{ fontWeight: "bold", fontSize: 24 }}
              >
                {priceValue}
              </CustomizedTypography>
              <div
                style={{
                  marginLeft: "150px",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-27px",
                }}
              >
                {trendingStatus === "up" && <TrendingUpIcon color="success" />}
                {trendingStatus === "down" && (
                  <TrendingDownIcon color="error" />
                )}
                <CustomizedTypography
                  variant="body2"
                  component="div"
                  style={{
                    color: trendingStatus === "up" ? "green" : "red",
                    fontSize: 14,
                    marginLeft: 4,
                  }}
                >
                  {percentage}
                </CustomizedTypography>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width:"400px",
            border: "1px solid gray",
            borderRadius: "9px",
            textAlign: "center",
            backgroundImage:
              "linear-gradient(to bottom left, #F1EEDC, #D3CEDF )",
            transform: "translate(-50%, -50%)",
            boxShadow: "5px 2px 4px rgba(20, 20, 10, 10)"
          }}
        >
          <Typography style={{padding:"20px",fontWeight:"bold",fontFamily:"monospace"}} variant="h6" component="h2">
            List of Instances
          </Typography>
          <Box sx={{backgroundColor:"gray",
          width:"350px", 
          height:"250px",
          marginLeft:"30px",
          marginBottom:"20px",
          backgroundImage:
          "linear-gradient(to bottom left, #F5EDDC , #D3CEDF )",
          border: "1px solid gray",
          borderRadius: "9px",
          boxShadow: "5px 2px 4px rgba(20, 20, 10, 10)",
          }}>
          {showInst  && 
          <Button endIcon={<Lottie style={{height:"50px", marginLeft:"40px"}} animationData={deleteIcon}/>}
          onClick={handleClick} 
          style={{
            padding:"20px",
            height: "50px",
            width:"280px",
            marginTop:"12px",
            marginLeft:"0px",
            fontFamily:"monospace",
            backgroundImage:
            "linear-gradient(to bottom left, #F5EDDC , #D3CEDF )",
            borderRadius:"10px",
            boxShadow: "4px 2px 5px rgba(20, 20, 10, 10)",
            color:"black"}} >
            Instance 1
          </Button>}
          {!showInst && animate && <Lottie style={{marginTop:"16px",height:"220px"}} autoPlay loop={false} animationData={destroy} onComplete={handleAnimationComplete}  />}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default HeaderCard;
