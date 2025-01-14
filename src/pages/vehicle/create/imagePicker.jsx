import React, { useState } from 'react';
import { Box, Button, Grid, IconButton, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';

import { DeleteFilled, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

export const ImagePicker = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); // Para controlar o índice da imagem exibida no modal

  const handleAddImages = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file), // Temporary unique URL
      file
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  const handleOpenImage = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseDialog = () => {
    setCurrentIndex(null);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Imagens do veículo
      </Typography>
      <Button variant="contained" component="label">
        Adicionar
        <input type="file" accept="image/*" multiple hidden onChange={handleAddImages} />
      </Button>
      <Grid container spacing={2} mt={2}>
        {images.slice(0, 6).map((image, index) => (
          <Grid item xs={4} key={image.id} sx={{ position: 'relative' }}>
            <Box
              onClick={() => handleOpenImage(index)}
              sx={{
                width: '100%',
                height: 0,
                paddingTop: '75%', // Mantém uma proporção de 4:3 para a miniatura
                backgroundImage: `url(${image.id})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '8px'
              }}
            >
              <IconButton
                color="error"
                onClick={(e) => {
                  e.stopPropagation(); // Evita abrir o modal ao clicar no botão
                  handleRemoveImage(image.id);
                }}
                sx={{
                  position: 'absolute',
                  top: 4,
                  right: 4,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                  }
                }}
              >
                <DeleteFilled />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Dialog open={currentIndex !== null} onClose={handleCloseDialog} maxWidth="lg">
        <DialogTitle>Visualizar Imagem</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: '#000'
          }}
        >
          <Box
            sx={{
              width: '80vw',
              height: '80vh',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            <IconButton
              onClick={handlePrevImage}
              disabled={images.length === 1}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: '#fff'
              }}
            >
              <ArrowLeftOutlined />
            </IconButton>

            {currentIndex !== null && (
              <Box
                component="img"
                src={images[currentIndex].id}
                alt="Visualização"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain' // Mantém a proporção da imagem
                }}
              />
            )}

            <IconButton
              onClick={handleNextImage}
              disabled={images.length === 1}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: '#fff'
              }}
            >
              <ArrowRightOutlined />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
