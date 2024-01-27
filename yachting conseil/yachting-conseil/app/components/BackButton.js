'use client'

import { useRouter } from 'next/navigation'
import ReplyIcon from '@mui/icons-material/Reply';
import Button from '@mui/material/Button';

export default function BackButton({color}) {
  const router = useRouter()

  return (
    <Button sx={{color:`${color}`, textTransform: 'capitalize'}} variant='text' onClick={() => router.back()}>
      <ReplyIcon />  Retour
    </Button>
  )
}