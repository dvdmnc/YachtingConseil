'use client'

import {React, useEffect, useState}from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BackButton from './BackButton'
import ActiveLastBreadCrumbs from './BreadCrumbs'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Image from 'next/image'
import ReCAPTCHA from "react-google-recaptcha"
import galeon from '../../public/images/galeon445.jpeg'
import ImageList from './ImageList'
import CustomizedTables from './Table'
import DescriptionBox from './DescriptionBox'

function BoatDetails({title, year, price, mainpic, pictures, engine, fuel, transmission, hours, length, width, cabins, categories, secondhand}) {
    const[name,setName] = useState('')
    const[mail,setMail] = useState("")
    const[phone,setPhone] = useState('')
    const[message,setMessage] = useState('')
    const[checked,setChecked] = useState(false)
    const[screenWidth, setScreenWidth] = useState('')


    useEffect(() =>{
        setScreenWidth(window.screen.width)
        function handleWindowResize() {
            setScreenWidth(window.screen.width);
            }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []) /* if we don't use this hook, JS try to access window before it's defined and it doesn't work. */

  return (
    <>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="bd-header">
        <Typography variant="h3">{title}</Typography>
        <Box className="bd-header-content">
            <Typography variant="h5">Année : <strong>{year}</strong></Typography>
            <Typography variant="h5">Prix : <strong>{price}</strong></Typography>
        </Box>
    </Box>
    <Box className="bd-card">
        <Box className='bd-card-left'>
            <Image objectFit='contain' className='bd-card-left-img' src={mainpic}/>
        </Box>
        <Box className='con-i-section-three-right modified'> {/* reuse of previous CSS */}
                <Typography variant='h6' className='padding'> <strong>DEMANDE DE RENSEIGNEMENTS </strong></Typography> {/* reuse of previous CSS */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>Name*</Typography>
                        <TextField fullWidth value={name} InputProps={{classes:{root:'con-i-section-three-input', focused: 'con-i-section-three-input-focused'}}} onChange={(e) => {
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
            <FormControlLabel control={<Checkbox sx={{color:'white'}} onChange={()=>{setChecked(!checked)}}/>} label="En cochant cette case et en soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de ma demande et de la relation commerciale qui peut en découler. Je suis conscient que mes données personnelles renseignées dans le formulaire seront conservées dans un fichier informatisé par notre société. Pour plus d'information sur l'utilisation et la protection des données ou exercer votre droit d'accès, consultez notre " />
            {name && mail && phone && message && checked ? <Button variant="contained" fullWidth className="con-i-section-three-button">Envoyer</Button> : <Button variant="contained" disabled fullWidth className="con-i-section-three-button" sx={{'&:disabled':{backgroundColor:'grey', color:'rgba(255,255,255,0.5)'}}}>Envoyer</Button>} {/* reuse of CSS */}
        </Box>
    </Box>
    <Box className='bd-pictures'>
        {screenWidth > 1024 ? <ImageList itemData={pictures} columns={6} /> : screenWidth > 640 ? <ImageList itemData={pictures} columns={4} /> : <ImageList itemData={pictures} columns={2} />
        } {/* way of setting our own breakpoints as it is not possible with the ImageList MUI component */}
    </Box>
    <Box className='bd-description'>
        <CustomizedTables year={year} engine={engine} fuel={fuel} transmission={transmission} hours={hours} secondhand={secondhand} length={length} width={width} cabins={cabins} />
        {categories.map((category, index) => (
            <DescriptionBox title={category.title} description={category.description} key={index}/>
        ))}
    </Box>
    </>
  )
}

export default BoatDetails