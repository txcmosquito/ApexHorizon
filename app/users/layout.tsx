import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";
import React from "react";

export default async function UsersLayout({children}: { children: React.ReactNode, })
{

    const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
        {/*<h1>Hello</h1>*/}
      <div className="h-full bg-cyan-200">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
