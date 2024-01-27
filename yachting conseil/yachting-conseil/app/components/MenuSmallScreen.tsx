import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ModifiedMenu = (props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    {...props}
  />
)

export default function MenuSmallScreen({title, elements}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div style={{display:'flex', flexDirection:'row'}}>
        <Button
          id="menu-button-small"
          aria-controls={open ? 'menu-small' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="text"
          disableElevation
          onClick={handleClick}
          onMouseLeave={handleClose}
          endIcon={<ArrowRightIcon />}
          className='menu-item small'
          sx={{'&:hover':{backgroundColor:"none"}}}
        >
          {title.title}
        </Button>
      <ModifiedMenu
        id="menu-small"
        MenuListProps={{
          'aria-labelledby': 'menu-button-small',
        }}
        anchorEl={anchorEl}
        open={open}
        sx={{margin: '50px', zIndex: 2000}}
      >
        {elements && elements[0] != null ? 
        elements.map((item, index) => (
          <Link underline="none" href={item.url} key={index} sx={{color:"black"}}>
            <MenuItem key={index} disableRipple>
            {item.name}
          </MenuItem>
        </Link>
        )) :
        null
      }
      </ModifiedMenu>
    </div>
  );}