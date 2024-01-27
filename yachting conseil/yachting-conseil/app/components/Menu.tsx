import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/navigation';

const ModifiedMenu = (props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
)

export default function CustomizedMenus({title, elements}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter()
  return (
    <div>
        <Button
          id="menu-button"
          aria-controls={open ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="text"
          disableElevation
          onMouseOver={handleHover}
          onClick={() => router.push(`${title.url}`)}
          endIcon={<KeyboardArrowDownIcon />}
          className='menu-item'
          sx={{'&:hover':{backgroundColor:"white"}}}
        >
          {title.title}
        </Button>
      <ModifiedMenu
        id="menu"
        MenuListProps={{
          'aria-labelledby': 'menu-button',
          onMouseLeave: handleClose,
        }}
        onBlur={handleClose}
        anchorEl={anchorEl}
        open={open}
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
  );
}