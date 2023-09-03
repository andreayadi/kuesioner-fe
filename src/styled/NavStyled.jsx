import styled from "styled-components";

const NavStyled = styled.div`
    color: rgb(8, 120, 86);
    height: 7rem;
    border-bottom: 1px solid rgba(0, 176, 155, 0.2);
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    transition: all 0.3s;
    font-weight: 500;
    text-decoration: none !important;
  }
  
  :hover
  {
    border-right: 2rem solid rgba(0, 176, 155, 0.5);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    font-size: 1.7rem;
  }
`;

export default NavStyled;
