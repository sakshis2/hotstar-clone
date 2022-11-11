import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <Link to="./">
          <img src="/images/home-icon.svg" />
          <span>Home</span>
        </Link>
        <Link to="./">
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </Link>
        {/* <Link to="./">
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </Link> */}
        <Link to="./">
          <img src="/images/watchlist-icon.svg" />
          <span>ORIGINALS</span>
        </Link>
      </NavMenu>
      <Link to="/login">
        <UserImg src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2348a5a3-1e9b-4866-9755-d730e47fdaa7/dcithbt-70f34d63-03e2-46d4-8ff1-58d7df0180d4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzNDhhNWEzLTFlOWItNDg2Ni05NzU1LWQ3MzBlNDdmZGFhN1wvZGNpdGhidC03MGYzNGQ2My0wM2UyLTQ2ZDQtOGZmMS01OGQ3ZGYwMTgwZDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UkV33nD3YDUS1mx6RuuR_HiD_bS7Nl5EqsLiSffct-U" />
      </Link>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  cursor: pointer;
  margin-left: 30px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: #ffff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cube-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
