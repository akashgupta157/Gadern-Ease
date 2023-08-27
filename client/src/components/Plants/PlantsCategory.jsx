import React from "react";
import { Box, Text, VStack, Button, Image, Grid } from "@chakra-ui/react";
export const PlantsCategory = ({ handleButtonClick }) => {
  const textStyle = {
    mt: "0px",
    p: "0px",
    fontSize: "14px",
    fontFamily: "Roboto(woff2),sans-serif",
    lineHeight: "17px",
    verticalAlign: "baseline",
    fontWeight: 700,
  };
  const btnStyle = {
    background: "none",
    cursor: "pointer",
    border: "none",
    _hover: {
      backgroundColor: "none",
    },
  };
  return (
    <Grid
      placeItems={"center"}
      placeContent={"center"}
      gridTemplateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(8, 1fr)",
      }}
      gap={["35px", "35px", "10px", "0px"]}
    >
      <Button
        style={btnStyle}
        onClick={() => handleButtonClick("Aquatic plants")}
      >
        <VStack spacing={0}>
          <Box as="span" title="Aquatic plants">
            <Image
              m={"0px"}
              p={"0px"}
              width={"45px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTny5FxOIt6HYOpr71Mc2zr9eLXhChHxlZFQg&usqp=CAU"
            />
          </Box>

          <Text style={textStyle}>Aquatic plants</Text>
        </VStack>
      </Button>

      <VStack spacing={5}>
        <Button
          style={btnStyle}
          onClick={() => handleButtonClick("Balcony Flowers")}
        >
          <VStack spacing={0} mt={["50px", "50px", "40px", "0px"]}>
            <Box as="span" title="Balcony flowers">
              <Image
                m={"0px"}
                p={"0px"}
                width={"40px"}
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR6YSoOBHJYV8h7Ztys1faALIK88Wb3ImuX6xn2nF8J_QTTtWeA"
              />
            </Box>
            <Text style={textStyle}>Balcony Flowers</Text>
          </VStack>
        </Button>
        <Button
          style={btnStyle}
          onClick={() => handleButtonClick("Ornamental grasses")}
        >
          <VStack spacing={0} mt={["60px", "60px", "90px", "0px"]}>
            <Box as="span" title="Ornamental grasses">
              <Image
                m={"0px"}
                p={"0px"}
                width={"30px"}
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSs8NB0gSCNfqS27QUGq9fN-9payxYv_2wHvEcTLr4_th854IDD"
              />
            </Box>
            <Text style={textStyle}>Ornamental grasses</Text>
          </VStack>
        </Button>
      </VStack>
      <VStack spacing={5}>
        <Button
          style={btnStyle}
          onClick={() => handleButtonClick("Bulbous and tuberous plants")}
        >
          <VStack
            spacing={0}
            mb={["100px", "100px", "0px", "0px"]}
            mt={["0px", "0px", "30px", "0px"]}
          >
            <Box as="span" title="Bulbous plants">
              <Image
                m={"0px"}
                p={"0px"}
                width={"40px"}
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQrN5nB6JGSC44tcUEhMvy0nMKJBY5N2_gyjW4pQ96aXO_jJAZ"
              />
            </Box>
            <Text style={textStyle}>Bulbous and tuberous plants</Text>
          </VStack>
        </Button>
        <Button
          style={btnStyle}
          onClick={() => handleButtonClick("Perennials")}
        >
          <VStack
            spacing={0}
            mb={["90px", "90px", "0px", "0px"]}
            mt={["0px", "0px", "80px", "0px"]}
          >
            <Box as="span" title="Shrubs">
              <Image
                m={"0px"}
                p={"0px"}
                width={"30px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKAUVYDZcGmZalC3Q0zwyiqFjtjCQSV-6feR9tqgTFVnvRQL-"
              />
            </Box>
            <Text style={textStyle}>Perennials</Text>
          </VStack>
        </Button>
      </VStack>
      <VStack
        spacing={5}
        mb={["0px", "0px", "20px", "0px"]}
        mt={["10px", "10px", "0px", "0px"]}
      >
        <Button
          style={btnStyle}
          onClick={() => handleButtonClick("Climbing plants")}
        >
          <VStack spacing={0}>
            <Box as="span" title="Climbers">
              <Image
                m={"0px"}
                p={"0px"}
                width={"35px"}
                bg={"white"}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT3WgIseKpDjHQAdz3EjP_ukjiL3L3NCXWVUAjIH0saihMG21-u"
              />
            </Box>
            <Text style={textStyle}>Climbing plants</Text>
          </VStack>
        </Button>
        <Button style={btnStyle} onClick={() => handleButtonClick("Roses")}>
          <VStack spacing={0} mt={["30px", "30px", "0px", "0px"]}>
            <Box as="span" title="Rosen">
              <Image
                m={"0px"}
                p={"0px"}
                width={"32px"}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFDhAkMfqUwldFTOETFDtiKiERoYxr6glnQh-GiCmaqPBsRRIm"
              />
            </Box>
            <Text style={textStyle}>Roses</Text>
          </VStack>
        </Button>
      </VStack>
      <VStack spacing={5}>
        <Button
          style={btnStyle}
          onClick={() => handleButtonClick("Container plants")}
        >
          <VStack
            spacing={0}
            mb={["130px", "130px", "0px", "0px"]}
            mt={["0px", "0px", "90px", "0px"]}
          >
            <Box as="span" title="Container plants">
              <Image
                m={"0px"}
                pt={["0px", "0px", "12px", "0px"]}
                width={"45px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLHiRdn_Gk2tyfBumWkr410oYPEMHzNMi8S98c7fnw0Jq01p7"
              />
            </Box>
            <Text style={textStyle}>Container plants</Text>
          </VStack>
        </Button>

        <Button
          style={btnStyle}
          onClick={() => handleButtonClick("Summer flowers")}
        >
          <VStack
            spacing={0}
            mb={["110px", "110px", "0px", "0px"]}
            mt={["0px", "0px", "120px", "0px"]}
          >
            <Box as="span" title="Summer flowers">
              <Image
                m={"0px"}
                p={"0px"}
                width={"27px"}
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi-YQCxjs6hI7Hy2Ov6YtrXDaVxQ3B-5GH6e-nS2W_4OHR2Q6_"
              />
            </Box>
            <Text style={textStyle}>Summer flowers</Text>
          </VStack>
        </Button>
      </VStack>
      <VStack spacing={5}>
        <Button style={btnStyle} onClick={() => handleButtonClick("Fruit")}>
          <VStack spacing={0} mt={["0px", "0px", "130px", "0px"]}>
            <Box as="span" title="Obst">
              <Image
                m={"0px"}
                p={"0px"}
                width={"30px"}
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBa-rj3lOmykg-VynDZ_IZDVFz391Db6pnz7rqepTwLucCO0c2"
              />
            </Box>
            <Text style={textStyle}>Fruit</Text>
          </VStack>
        </Button>

        <Button
          style={btnStyle}
          onClick={() => handleButtonClick("Trees and Shrubs")}
        >
          <VStack spacing={0} mt={["0px", "0px", "120px", "0px"]}>
            <Box as="span" title="Trees and shrubs">
              <Image
                m={"0px"}
                p={"0px"}
                width={"40px"}
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHQi876CLQzk4hTF5QM93tJM91OVEzAjdN6C9RzvKQMzRc0zPP"
              />
            </Box>
            <Text style={textStyle}>Trees and Shrubs</Text>
          </VStack>
        </Button>
      </VStack>
      <VStack spacing={5}>
        <Button style={btnStyle} onClick={() => handleButtonClick("Herbs")}>
          <VStack spacing={0} mb={["131px", "131px", "0px", "0px"]}>
            <Box as="span" title="Herbs">
              <Image
                m={"0px"}
                p={"0px"}
                width={"25px"}
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdObUXjJASq_-YXFStG8eGWNoVb2U8HI-EADMk2PfzONgeKuSb"
              />
            </Box>
            <Text style={textStyle}>Herbs</Text>
          </VStack>
        </Button>

        <Button
          style={btnStyle}
          onClick={() => handleButtonClick("Vegetables")}
        >
          <VStack spacing={0} mb={["100px", "100px", "0px", "0px"]}>
            <Box as="span" title="Vegetables">
              <Image
                m={"0px"}
                p={"0px"}
                width={"35px"}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5XWllOEVhi3uTuOGleUuvYFZb2dZRnAaEYf-vI0wSrrdNauXc"
              />
            </Box>
            <Text style={textStyle}>Vegetables</Text>
          </VStack>
        </Button>
      </VStack>

      <Button style={btnStyle} onClick={() => handleButtonClick("Houseplants")}>
        <VStack
          spacing={0}
          mb={["50px", "50px", "0px", "0px"]}
          mt={["0px", "0px", "50px", "0px"]}
        >
          <Box as="span" title="Houseplants">
            <Image
              m={"0px"}
              p={"0px"}
              width={"20px"}
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIPt9b6IL_mWPhAYpAyF56uwx5u80Famxn2vrupPbZ85V6etU2"
            />
          </Box>
          <Text style={textStyle}>Houseplants</Text>
        </VStack>
      </Button>
    </Grid>
  );
};
