import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import Manu from "../../public/images/manu.jpeg"
import Benoit from "../../public/images/benoit.jpeg"
import Isa from "../../public/images/isa.jpeg"
import JeanMarie from "../../public/images/jean-marie.jpeg"

export default function FolderList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', borderTop:'none', borderBottom:'none'}}>
      <ListItem className="team-member-item">
        <ListItemAvatar>
          <Avatar className="team-member-icon">
          <Image 
                src={Manu}
                alt="Manuel D'ALMEIDA"
                />
          </Avatar>
        </ListItemAvatar>
        <ListItemText  primary="Manuel D'ALMEIDA" secondary="TEL. : 06 81 32 27 13" />
      </ListItem>
      <ListItem className="team-member-item">
        <ListItemAvatar>
          <Avatar className='team-member-icon'>
          <Image 
                src={Benoit}
                alt="Benoit RAVEL"
                />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Benoit RAVEL" secondary="TEL. : 06 80 84 35 39" />
      </ListItem>
      <ListItem className="team-member-item">
        <ListItemAvatar>
          <Avatar className='team-member-icon'>
          <Image 
                src={Isa}
                alt="Isabelle D'ALMEIDA"
                />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Isabelle D'ALMEIDA" secondary="TÉL. : 04 94 66 49 56" />
      </ListItem>
      <ListItem className="team-member-item">
        <ListItemAvatar>
          <Avatar className='team-member-icon'>
          <Image 
                src={JeanMarie}
                alt="Jean-Marie CARIOU"
                />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Jean-Marie CARIOU" secondary="TÉL. : 06 43 43 71 13" />
      </ListItem>
    </List>
  );
}