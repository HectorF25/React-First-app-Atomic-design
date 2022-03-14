import React from "react";
import { Nav } from "react-bootstrap";

const NavLink = ({page, link}) => {
  return (
    <>
      <Nav.Link href={link}>{page}</Nav.Link>
    </>
  );
};
export default NavLink;
