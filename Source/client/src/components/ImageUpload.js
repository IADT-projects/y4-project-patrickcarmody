import React, { useState, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [fileDialogOpened, setFileDialogOpened] = useState(false);
  const [draggingOver, setDraggingOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    setDraggingOver(true);
  };

  const handleDragLeave = () => {
    setDraggingOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDraggingOver(false);
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      setFileDialogOpened(false);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    // save image
    console.log("Confirmed!");
  };

  const handleRemove = () => {
    setImage(null);
  };

  const handleClick = () => {
    if (!image) {
      fileInputRef.current.click();
      setFileDialogOpened(true);
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          width: '100%',
          border: `2px dashed ${draggingOver ? '#3f51b5' : 'gray'}`,
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover': {
            border: `2px dashed #009945`,
          },
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {image ? (
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Box
              component="img"
              src={image}
              alt="Uploaded image"
              sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Box>
        ) : (
          <Typography variant='body1'>Drag and drop here or click to select a file</Typography>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileSelect}
        />
      </Box>

      {image && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <Button variant='contained' onClick={handleRemove}>Remove</Button>
          <Box sx={{ width: "85%" }} />
          <Button variant='contained' onClick={handleUpload}>Confirm</Button>
        </Box>
      )}
    </Box>
  );
}

export default ImageUpload;