'use client'

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation'
import Box from '@mui/system/Box';
import { grey } from '@mui/material/colors';

const color = grey[500]

export default function ActiveLastBreadcrumb() {
    const pathname = usePathname()
    let pathList = pathname.split('/')
    pathList.shift() //remove the first element which is ''
  return (
    <Box className="breadcrumb-box">
      <Breadcrumbs aria-label="breadcrumb" sx={{color:'grey'}}>
        <Link underline="hover" color={color} href="/">
          Accueil
        </Link>
        {pathList.length > 0 ? pathList.map((path, index) => {
            path = path.replaceAll('-',' ')
            let To = pathList.slice(0, index+1).join('/')
            return <Link underline="hover" color={color} href={`/${To}`} key={index}>{path}</Link>
        }) : null
        }
      </Breadcrumbs>
    </Box>
  );
}
