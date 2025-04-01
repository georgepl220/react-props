import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

function ProfileCard({ title, description, image }) {
  const handleClick = () => {
    alert(title);
  };

  return (
    <Card sx={{ width: 300, boxShadow: 3, borderRadius: 2, margin: '10px' }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ borderRadius: '8px 8px 0 0', objectFit: 'cover' }}
      />
      <CardContent sx={{ padding: '15px' }}>
        <Typography variant="h6" component="div" sx={{ marginBottom: '10px' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: '5px',
            padding: '8px 12px',
            '&:hover': { backgroundColor: '#0056b3' },
          }}
          onClick={handleClick}
        >
          Дізнатися більше
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
