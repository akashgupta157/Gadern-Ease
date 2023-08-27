import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
export const Plantscard = ({ image, english_name }) => {
  return (
    <Box
      mt={"50px"}
      w={"240px"}
      h={"320px"}
      borderRadius={"10px"}
      boxShadow={
        " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      }
      cursor={"pointer"}
    >
      <Image
        src={image}
        borderRadius={"8px 8px 0px 0px"}
        w={"240px"}
        h={"220px"}
      />
      <Text
        fontFamily={"Roboto(woff2),sans-serif"}
        fontWeight={700}
        fontSize={"24px"}
        lineHeight="31.2px"
        p={"15px"}
        font-stretch="100%"
        _hover={{
          color: "#6DB644",
        }}
        cursor={"pointer"}
      >
        {english_name}
      </Text>
    </Box>
  );
};
