import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
    imgAlt: 'https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x?io=transform:fill,width:1440&format=webp'
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
    imgAlt: 'https://images.squarespace-cdn.com/content/v1/53cee4fee4b0068e79bee0c4/1597517023428-3NVTAUAI7RNDXB872JXT/ACS_0198.JPG?format=2500w'
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    imgAlt: 'https://assets.weforum.org/article/image/responsive_big_webp_v2gQQH6Qq5EAJSemo1Yqie27aYBOHE4pSwA6jSkFHKg.webp'
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    imgAlt:'https://media.istockphoto.com/id/1297852801/es/foto/rayos-de-luz-de-ne%C3%B3n-en-la-oscuridad-con-humo-foco-de-escena-de-fondo-vac%C3%ADo.jpg?s=1024x1024&w=is&k=20&c=Jfy0C_grXKVt4oAviouZo3vrxmBMhFU6OPgzRJT9CkY='
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            imgAlt={project.imgAlt}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
