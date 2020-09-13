import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  width: 45vw;
  height: calc(100vh - 30vh);
  overflow-y: hidden;
  padding: 20px;
`;

export const ArtistName = styled.h3``;

export const BackLink = styled(Link)`
  height: auto;
  color: darkblue;

  &:hover {
    text-decoration: underline;
  }
`;
