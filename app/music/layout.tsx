import getSongsByUserId from '@/app/music/actions/getSongsByUserId'
import Sidebar from '@/app/music/components/Sidebar'
import ToasterProvider from '@/app/music/providers/ToasterProvider'
import UserProvider from '@/app/music/providers/UserProvider'
import SupabaseProvider from '@/app/music/providers/SupabaseProvider'
import Player from '@/app/music/components/Player'
import React from "react";
import '@/app/music/style.css'


export default async function RootLayout({children,}: { children: React.ReactNode }) {

  const userSongs = await getSongsByUserId();

  return (
      <html lang="en">
      <body>
      <ToasterProvider />
      <SupabaseProvider>
          <UserProvider>
              <Sidebar songs={userSongs}>
                  {children}
              </Sidebar>
              <Player />
          </UserProvider>
      </SupabaseProvider>
      </body>
      </html>
  )
}
