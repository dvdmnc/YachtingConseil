import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function StandardImageList({itemData, columns}) {
  return (
    <ImageList sx={{ width: '100%', overflowY:'visible'}} cols={columns} rowHeight={'auto'} gap={20}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{'&:hover':{transform: 'scale(1.1)'}, transition: '0.5s'}}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
           <ImageListItemBar
            sx={{backgroundColor: 'none'}}
            actionIcon={
              <IconButton
                sx={{ color: 'rgb(255, 255, 255)', '&:hover':{backgroundColor:'black'} }}
              >
                <VisibilityIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}