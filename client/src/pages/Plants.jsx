import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
export const Plants = () => {
  return (
    <Box border={"2px solid red"}>
      <Text
        textAlign={"center"}
        display={"block"}
        font={"Roboto"}
        color={"#6DB644"}
        lineHeight={"67.2px"}
        fontSize={"56px"}
        fontWeight={700}
        fontStretch={"100%"}
        text-decoration={"none solid rgb(109, 182, 68)"}
      >
        Plants
      </Text>
      <Box margin={"auto"}>
        <Flex alignItems={"center"} justifyContent={"center"} gap={5}>
          <HStack>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"45px"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTny5FxOIt6HYOpr71Mc2zr9eLXhChHxlZFQg&usqp=CAU"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Aquatic plants
                </Text>
              </Box>
            </Button>
          </HStack>
          <VStack spacing={4}>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"40px"}
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR6YSoOBHJYV8h7Ztys1faALIK88Wb3ImuX6xn2nF8J_QTTtWeA"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Balcony Flowers
                </Text>
              </Box>
            </Button>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"30px"}
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSs8NB0gSCNfqS27QUGq9fN-9payxYv_2wHvEcTLr4_th854IDD"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Ornamental grasses
                </Text>
              </Box>
            </Button>
          </VStack>
          <VStack spacing={4}>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"40px"}
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQrN5nB6JGSC44tcUEhMvy0nMKJBY5N2_gyjW4pQ96aXO_jJAZ"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Bulbous and tuberous plants
                </Text>
              </Box>
            </Button>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"30px"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKAUVYDZcGmZalC3Q0zwyiqFjtjCQSV-6feR9tqgTFVnvRQL-"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Perennials
                </Text>
              </Box>
            </Button>
          </VStack>
          <VStack spacing={4}>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"35px"}
                  bg={"white"}
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3WgIseKpDjHQAdz3EjP_ukjiL3L3NCXWVUAjIH0saihMG21-u"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Climbing plants
                </Text>
              </Box>
            </Button>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"30px"}
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFDhAkMfqUwldFTOETFDtiKiERoYxr6glnQh-GiCmaqPBsRRIm"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Roses
                </Text>
              </Box>
            </Button>
          </VStack>
          <VStack spacing={4}>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"40px"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLHiRdn_Gk2tyfBumWkr410oYPEMHzNMi8S98c7fnw0Jq01p7"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Container plants
                </Text>
              </Box>
            </Button>

            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"27px"}
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi-YQCxjs6hI7Hy2Ov6YtrXDaVxQ3B-5GH6e-nS2W_4OHR2Q6_"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Summer flowers
                </Text>
              </Box>
            </Button>
          </VStack>
          <VStack spacing={4}>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"30px"}
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBa-rj3lOmykg-VynDZ_IZDVFz391Db6pnz7rqepTwLucCO0c2"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Fruit
                </Text>
              </Box>
            </Button>

            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"40px"}
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHQi876CLQzk4hTF5QM93tJM91OVEzAjdN6C9RzvKQMzRc0zPP"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Trees and Shrubs
                </Text>
              </Box>
            </Button>
          </VStack>
          <VStack spacing={4}>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"30px"}
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdObUXjJASq_-YXFStG8eGWNoVb2U8HI-EADMk2PfzONgeKuSb"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Herbs
                </Text>
              </Box>
            </Button>

            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"40px"}
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5XWllOEVhi3uTuOGleUuvYFZb2dZRnAaEYf-vI0wSrrdNauXc"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Vegetables
                </Text>
              </Box>
            </Button>
          </VStack>
          <HStack>
            <Button background={"none"} cursor={"pointer"} border={"none"}>
              <Box>
                <Image
                  m={"0px"}
                  p={"0px"}
                  width={"20px"}
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIPt9b6IL_mWPhAYpAyF56uwx5u80Famxn2vrupPbZ85V6etU2"
                />
                <Text
                  mt={"0px"}
                  p={"0px"}
                  fontFamily={"Roboto(woff2),sans-serif"}
                  lineHeight={"17px"}
                  verticalAlign={"baseline"}
                  fontWeight={700}
                >
                  Houseplants
                </Text>
              </Box>
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};
