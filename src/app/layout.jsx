import React from 'react';
import './globals.css';
// import {Inder} from 'next/font/google';

// const inder = Inder({subsets: ['latin']})

export default function Layout({children}) {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prueba</title>
    </head>
    <body >
        {children}
    </body>
    </html>
  )
}
