import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Image, Text } from "@chakra-ui/react";
import { Plantscard } from "../components/Plants/Plantscard";
import { PlantsFilter } from "../components/Plants/PlantsFilter";
import { useSearchParams } from "react-router-dom";
import { PlantsCategory } from "../components/Plants/PlantsCategory";

export const Plants = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Houseplants");
  const [searchParams] = useSearchParams();

  let obj = {
    params: {
      flower_color: searchParams.get("flower_color"),
      growth_height: searchParams.get("growth_height"),
      light: searchParams.get("light"),
      garden_style: searchParams.get("garden_style"),
    },
  };

  const fetchCategoryData = async (category) => {
    console.log(obj);
    try {
      const res = await axios.get(
        `https://gardenease.onrender.com/posts/plant/${category}`,
        obj
      );
      setFetchedData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(fetchedData);
  useEffect(() => {
    fetchCategoryData(currentCategory);
  }, [currentCategory, searchParams]);

  const handleButtonClick = (category) => {
    setCurrentCategory(category);
  };

  return (
    <Box
      width={["90%", "90%", "100%", "100%"]}
      mt={["10px", "10px", "50px", "50px"]}
    >
      <Text
        textAlign={"center"}
        fontFamily={["Roboto", "sans-serif"]}
        color={"#6DB644"}
        lineHeight={"67.2px"}
        fontSize={["40px", "40px", "50px", "56px"]}
        fontWeight={700}
        fontStretch={"100%"}
        textDecoration={"none solid rgb(109, 182, 68)"}
      >
        {currentCategory}
      </Text>
      {/* categories */}
      <Box
        margin={"auto"}
        mt={"50px"}
        mb={"20px"}
        w={["100%", "100%", "100%", "80%"]}
        ml={["0px", "0px", "0px", "150px"]}
        mr={["0px", "0px", "400px", "180px"]}
      >
        <PlantsCategory handleButtonClick={handleButtonClick} />
      </Box>
      {/* filter */}
      <Box
        bgColor={"#F5F5F5"}
        pl={["20px", "20px", "0px", "0px"]}
        pr={["20px", "20px", "0px", "0px"]}
      >
        <PlantsFilter />
      </Box>
      {/* card */}
      <Box margin={"auto"} w={"75%"}>
        {fetchedData.length === 0 ? (
          <Box display={"flex"}>
            <Image
              width={["100px", "100px", "350px", "700px"]}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwh0LYweMyHoc9g0GsLdsIrgveMwTTfrbxQw&usqp=CAU"
            />
            <Text
              fontWeight={900}
              fontSize={["20px", "20px", "60px", "60px"]}
              pt={["20px", "30px", "140px", "110px"]}
              color={"#6DB644"}
            >
              More plants coming your way soon!
            </Text>
          </Box>
        ) : (
          fetchedData?.map((el) => {
            return (
              <Box
                display={"grid"}
                placeContent={"center"}
                gridTemplateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
              >
                {" "}
                <Plantscard key={el._id} {...el} />
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
};
