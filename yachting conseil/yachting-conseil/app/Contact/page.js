'use client'

import React, { useState } from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField';
import ActiveLastBreadCrumbs from '../components/BreadCrumbs'
import BackButton from '../components/BackButton'
import Grid from '@mui/material/Grid';
import ReCAPTCHA from "react-google-recaptcha"
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#FFFFFF",
            },
        },
      },
    },
  },
})

function Contact() {
    const[name,setName] = useState('')
    const[mail,setMail] = useState("")
    const[phone,setPhone] = useState('')
    const[message,setMessage] = useState('')
    const[checked,setChecked] = useState(false)
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box className="section-two full-height background-con"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>Contact</Typography> {/* reusing CSS of previous components */}
    </Box>
    <Box className="con-i-section-two">
        <BackButton color={'white'}/><ActiveLastBreadCrumbs />
        <Box className="con-i-section-two-content">
            <Typography>Vous souhaitez <Link href='#'>vendre</Link> votre <Link href='#'>bateau à moteur</Link> ou votre <Link href='#'>voilier</Link> ? Vous recherchez un bateau <Link href='#'>neuf</Link> ou d’<Link href='#'>occasion</Link> ? Une <Link href='#'>place de port</Link> ? Vous avez besoin d’un renseignement ou d’un <Link href='#'>conseil</Link> ? Contactez-nous.</Typography>
            <Typography>You want to <Link href='#'>sell</Link> your <Link href='#'>motorboat</Link> or your <Link href='#'>sailboat</Link>? You plan to purchase a <Link href='#'>brand new</Link> unit or a <Link href='#'>second-hand</Link> boat? You're lookin for a <Link href='#'>mooring</Link>? You need to get some information or ask for <Link href='#'>advice</Link>? Please contact us.</Typography>
            <Typography>Sie möchten Ihr <Link href='#'>Motorboot</Link> oder <Link href='#'>Segelboot</Link><Link href='#'>verkaufen</Link>? Sie suchen ein  <Link href='#'>neues</Link> oder <Link href='#'>gebrauchtes</Link> Boot ? Ein <Link href='#'>Liegeplatz</Link> ? Sie benötigen Informationen oder <Link href='#'>Ratschläge</Link> ? Bitte kontaktieren Sie uns.</Typography>
        </Box>
    </Box>
    <Box className="con-i-section-three">
        <Box className="con-i-section-three-left">
            <Typography variant="h5" className="padding"><InfoIcon /> Yachting Conseil</Typography>
            <Typography variant='h6'><LocationOnIcon/> <strong>NOTRE ADRESSE :</strong></Typography>
            <Typography variant="h6">228 BLD DU FRONT DE MER</Typography>
            <Typography variant="h6">RESIDENCE SIMONE BERRIAU</Typography>
            <Typography variant="h6">LES SALINS</Typography>
            <Typography variant="h6" className="padding">83400 Hyères</Typography>
            <Typography variant='h6'><LocalPhoneIcon/> <strong>TEL :</strong></Typography>
            <Typography variant='h6' className="padding">+33 (0)4 94 66 49 56</Typography>
            <Typography variant='h6'><PhoneAndroidIcon/> <strong>PORT. :</strong></Typography>
            <Typography variant='h6' className="padding">+33 (0)6 81 32 27 13 +33 (0)6 80 84 35 39</Typography>
            <iframe className="footer-row-one-map full-screen" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.5539940769017!2d6.191927715777886!3d43.113887079143524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c92452786b8b6b%3A0x706a7b8519e8619b!2sYachting%20Conseil!5e0!3m2!1sfr!2sfr!4v1585731223515!5m2!1sfr!2sfr' allowFullScreen></iframe> {/* reusing CSS */}
        </Box>
        <Box className='con-i-section-three-right'>
            <Typography variant='h6' className='padding'><EmailIcon/> <strong>Votre message </strong></Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography>Name*</Typography>
                    <TextField fullWidth value={name} InputProps={{classes:{root:'con-i-section-three-input', focused: 'con-i-section-three-input-focused'}}} inputProps={{}} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Mail*</Typography>
                    <TextField fullWidth value={mail} InputProps={{classes:{root:'con-i-section-three-input', focused: 'con-i-section-three-input-focused'}}} onChange={(e) => {
                        setMail(e.target.value)
                    }}/>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Téléphone*</Typography>
                    <TextField fullWidth value={phone} InputProps={{classes:{root:'con-i-section-three-input', focused: 'con-i-section-three-input-focused'}}} onChange={(e) => {
                        setPhone(e.target.value)
                    }}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Message*</Typography>
                    <TextField
                    multiline
                    rows={5}
                    fullWidth
                    value={message} onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    InputProps={{classes:{root:'con-i-section-three-input', focused: 'con-i-section-three-input-focused'}}}
                    />
                </Grid>
            </Grid>
            <p></p>
            <ReCAPTCHA
            size="normal"
            sitekey="6LfZL1opAAAAAH8WrGspyAZizVS0J831sh9vjH3X"
          />
          <p></p>
          <FormControlLabel control={<Checkbox onChange={()=>{setChecked(!checked)}}/>} label="En cochant cette case et en soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de ma demande et de la relation commerciale qui peut en découler. Je suis conscient que mes données personnelles renseignées dans le formulaire seront conservées dans un fichier informatisé par notre société. Pour plus d'information sur l'utilisation et la protection des données ou exercer votre droit d'accès, consultez notre " />
          {name && mail && phone && message && checked ? <Button variant="contained" fullWidth className="con-i-section-three-button">Envoyer</Button> : <Button variant="contained" disabled fullWidth className="con-i-section-three-button">Envoyer</Button>}
        </Box>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default Contact