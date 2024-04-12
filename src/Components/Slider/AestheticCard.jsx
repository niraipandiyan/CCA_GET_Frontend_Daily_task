import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const AestheticCard = ({ children, avatarSrc,headerContent}) => {
  return (
    <Card
      sx={{
        position: 'relative',
        backgroundColor: '#FBF8DD',
        borderRadius: 'shape.borderRadius',
        boxShadow: 2,
        overflow:"visible",
        maxWidth: 400, // Adjust as needed
        margin: 'auto', // Center the card horizontally
        padding: 3, // Optional padding
        textAlign: "center",
        fontSize:"8px",
        boxShadow: '4px 4px 4px 4px rgba(0.7, 0.6, 0.4, 0.2)',
      }}
    >
      <Avatar
        alt="User Avatar"
        src={avatarSrc}
        sx={{
          position: 'absolute',
          top:"-19%",
          left: '50%',
          transform: 'translate(-50%)',
          border:"1px solid #A79277",
          zIndex: 1, // Ensure avatar is above card content
          height: '50px', // Adjust height to extend beyond border (consider avatar size)
          width: '50px', // Adjust width to extend beyond border (consider avatar size)
          
        }}
      />
      <CardContent>
        <h1 style={{fontWeight:"bold",fontFamily:"monospace"}}>{headerContent}</h1>
        <p style={{textAlign:"left",marginTop:"5px",fontWeight:"100px",fontFamily:"monospace"}}>
          Hi, I'm a software developer! I translate ideas into reality by building user-friendly applications and solving problems with code.
        </p>
      </CardContent>
    </Card>
  );
};

export default AestheticCard;
