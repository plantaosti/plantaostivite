import React, { ComponentPropsWithRef } from "react";
type Logoprops = ComponentPropsWithRef<"svg">;
function IconeProdutos({ ...rest }: Logoprops) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 24 24"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
    >
      <path d="M20.2 6c.8-1.5.9-3.1 0-4.3C18.8 0 16 0 13.7 1.7 13 2.3 12.4 3 12 3.8c-.4-.8-1-1.5-1.7-2.1C8 0 5.2 0 3.8 1.8 2.9 2.9 3 4.6 3.8 6H1.6c-.4 0-.8.4-.8.9v4.8c0 .5.4 1 1 1H3v10c0 .5.4.9.9.9h16.3c.5 0 .9-.4.9-.9v-10h1.3c.5 0 .9-.4.9-.9V6.9c0-.5-.4-.9-.9-.9h-2.2zM4.8 2.5c1-1.3 3.1-1.3 4.8 0 1.3 1 1.9 2.4 1.7 3.6H5c-.8-1.2-.9-2.6-.2-3.6zm6.7 20.1H4v-9.9h7.5v9.9zm0-10.9H1.8V7h9.7v4.7zm2.8-9.2c1.7-1.3 3.8-1.3 4.8 0 .7 1 .6 2.4-.2 3.5h-6.3c-.1-1.1.5-2.6 1.7-3.5zm-1.8 20.1v-9.9H20v9.9h-7.5zm9.7-10.9h-9.7V7h9.7v4.7z"></path>
    </svg>
  );
}

export default IconeProdutos;
