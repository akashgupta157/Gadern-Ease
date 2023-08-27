import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Grid,
} from "@chakra-ui/react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

import { useSearchParams } from "react-router-dom";

export const PlantsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFlowerColor = searchParams.getAll("flower_color");

  const [flower_color, setFlowerColor] = useState(initialFlowerColor || "");

  const initialGrowthHeight = searchParams.getAll("growth_height");
  const [growth_height, setGrowthHeight] = useState(initialGrowthHeight || "");

  const initialLight = searchParams.getAll("light");
  const [light, setLight] = useState(initialLight || []);

  const initialGardenStyle = searchParams.getAll("garden_style");
  const [garden_style, setGardenStyle] = useState(initialGardenStyle || "");

  useEffect(() => {
    let params = {
      flower_color,
      growth_height,
      light,
      garden_style,
    };

    setSearchParams(params);
  }, [flower_color, growth_height, light, garden_style]);

  const handleFlowerColor = (value) => {
    setFlowerColor(value);
  };
  const handleHeight = (value) => {
    setGrowthHeight(value);
  };
  const handleLight = (value) => {
    setLight(value);
  };
  const handleGardenStyle = (value) => {
    setGardenStyle(value);
  };

  return (
    <Box
      width={["100%", "100%", "75%", "75%"]}
      margin={"auto"}
      p={["30px 0px 90px 0px"]}
    >
      <Text
        textAlign={"left"}
        lineHeight={"32px"}
        fontSize={"19px"}
        fontWeight={700}
        fontStretch={"100%"}
        text-decoration={"none solid rgb(64, 64, 64)"}
        pb={"20px"}
      >
        Filter by Plant
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={20}
      >
        <Box>
          <Accordion
            allowMultiple
            position={"absolute"}
            bg={"white"}
            _hover={{ bg: "white" }}
            box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    _hover={{ bg: "white" }}
                    w={["120px", "130px", "150px", "200px"]}
                  >
                    <Image
                      w={"35px"}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa374wI2e0xacLz9dvTjOAogn5jQTiQsNUSg&usqp=CAU"
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={15}
                      pl={"5px"}
                      pr={"10px"}
                    >
                      Flower color
                    </Box>
                    {isExpanded ? (
                      <TbTriangleInvertedFilled
                        fontSize="11px"
                        color="#6DB644"
                      />
                    ) : (
                      <TbTriangleFilled fontSize="11px" color="#6DB644" />
                    )}
                  </AccordionButton>

                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    textAlign={"left"}
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("blue")}
                  >
                    blue
                  </AccordionPanel>
                  <AccordionPanel
                    textAlign={"left"}
                    pb={2}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("brown")}
                  >
                    brown
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("green")}
                  >
                    green
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("multicolored")}
                  >
                    multicolored
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("orange")}
                  >
                    orange
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("Pink")}
                  >
                    pink
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("Purple")}
                  >
                    purple
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("red")}
                  >
                    red
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("white")}
                  >
                    white
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleFlowerColor("yellow")}
                  >
                    yellow
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <Accordion
            allowMultiple
            position={"absolute"}
            bg={"white"}
            _hover={{ bg: "white" }}
            box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    _hover={{ bg: "white" }}
                    w={["120px", "130px", "150px", "200px"]}
                  >
                    <Image
                      w={"35px"}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1Jbsv-Mf5uWHSmkZZ-TQi-xoeF1aEnas1jNCZOp-YPrbe_4xde9LfNau_p7zcpqVDo0&usqp=CAU"
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={15}
                      pl={"5px"}
                      pr={"10px"}
                    >
                      Growth height
                    </Box>
                    {isExpanded ? (
                      <TbTriangleInvertedFilled
                        fontSize="11px"
                        color="#6DB644"
                      />
                    ) : (
                      <TbTriangleFilled fontSize="11px" color="#6DB644" />
                    )}
                  </AccordionButton>

                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    textAlign={"left"}
                    fontSize={"14px"}
                    onClick={() => handleHeight("small")}
                  >
                    small
                  </AccordionPanel>
                  <AccordionPanel
                    textAlign={"left"}
                    pb={2}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleHeight("medium")}
                  >
                    medium
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleHeight("large")}
                  >
                    large
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <Accordion
            allowMultiple
            position={"absolute"}
            bg={"white"}
            _hover={{ bg: "white" }}
            box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    _hover={{ bg: "white" }}
                    w={["120px", "130px", "150px", "200px"]}
                  >
                    <Image
                      w={"40px"}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-R4MYwIOReYKc6izTyszKECvB5dTgy4MCA&usqp=CAU"
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={15}
                      pl={"5px"}
                      pr={"10px"}
                    >
                      Light
                    </Box>
                    {isExpanded ? (
                      <TbTriangleInvertedFilled
                        fontSize="11px"
                        color="#6DB644"
                      />
                    ) : (
                      <TbTriangleFilled fontSize="11px" color="#6DB644" />
                    )}
                  </AccordionButton>

                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    textAlign={"left"}
                    fontSize={"14px"}
                    onClick={() => handleLight("sunny")}
                  >
                    sunny
                  </AccordionPanel>
                  <AccordionPanel
                    textAlign={"left"}
                    pb={2}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleLight("shade")}
                  >
                    shade
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleLight("semi-shade")}
                  >
                    semi-shade
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <Accordion
            allowMultiple
            position={"absolute"}
            bg={"white"}
            _hover={{ bg: "white" }}
            box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    _hover={{ bg: "white" }}
                    w={["120px", "130px", "150px", "200px"]}
                  >
                    <Image
                      w={"50px"}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76HkxhJJGhRTvTaqW2PhaYxWqYuuOh4VqBw&usqp=CAU"
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={15}
                      pl={"5px"}
                      pr={"10px"}
                    >
                      Garden Style
                    </Box>
                    {isExpanded ? (
                      <TbTriangleInvertedFilled
                        fontSize="11px"
                        color="#6DB644"
                      />
                    ) : (
                      <TbTriangleFilled fontSize="11px" color="#6DB644" />
                    )}
                  </AccordionButton>

                  <AccordionPanel
                    pb={2}
                    cursor="pointer"
                    textAlign={"left"}
                    fontSize={"14px"}
                    onClick={() => handleGardenStyle("Forest Garden")}
                  >
                    Forest garden
                  </AccordionPanel>
                  <AccordionPanel
                    textAlign={"left"}
                    pb={2}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleGardenStyle("Flower garden")}
                  >
                    Flower garden
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleGardenStyle("Water garden")}
                  >
                    Water garden
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleGardenStyle("Roof Garden")}
                  >
                    Roof garden
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleGardenStyle("Natural garden")}
                  >
                    Natural garden
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleGardenStyle("cottage garden")}
                  >
                    Cottage garden
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleGardenStyle("Rose Garden")}
                  >
                    Rose garden
                  </AccordionPanel>
                  <AccordionPanel
                    pb={2}
                    textAlign={"left"}
                    cursor="pointer"
                    fontSize={"14px"}
                    onClick={() => handleGardenStyle("Pot garden")}
                  >
                    Pot garden
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </Grid>
    </Box>
  );
};
