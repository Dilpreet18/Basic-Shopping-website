//import { styled } from "@material-ui/core";
import styled from "styled-components";
//import React from 'react';
const Container = styled.div`
 height:30px;
 display: flex;
 background-color: blue;
 color: white;
 align-items: center;
 justify-content: center;
 font-size: 14px;
 font-weight: 500;
`
const Announcement = () => {
  return(<Container>
    Super Deal!! Free shipping on orders over 1000/-rs
</Container>
) };

export default Announcement;
