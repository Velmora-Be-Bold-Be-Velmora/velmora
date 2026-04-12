'use client';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/lib/apolloClient';
export default function RootLayout({children}:{children :React.ReactNode})
{
  return(
    <html lang='en'>
      <body>
        <ApolloProvider client={client}>
          <MantineProvider >
            {children}
          </MantineProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}