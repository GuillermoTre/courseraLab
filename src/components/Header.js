import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: luisg.trevinoc@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/GuillermoTre",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/luistrevino-43844271/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Links = (props) => {
  
  return <div className="links">{
    props.links.map((child) => {
      return <a key={child.url} href={child.url} style={{margin:'5px'}}>
        <FontAwesomeIcon icon={child.icon} size="2x" />
      </a>
    })
  }</div>
}


const Header = () => {
  const handleClick = (e, anchor) => {
    e.preventDefault()
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <Links links={socials} />
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#contact-me" onClick={(event => handleClick(event, 'contactme'))}>
                Contact Me
              </a>
              <a href="/#projects" onClick={(event => handleClick(event, 'projects'))}>
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
