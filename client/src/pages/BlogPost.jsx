import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useToast,
} from "@chakra-ui/react";
import styled from "styled-components";
import { url } from "../components/url";
import axios from "axios";
import { useSelector } from "react-redux";
const categories = [
  "Aquatic plants",
  "Balcony Flowers",
  "Bulbous and tuberous plants",
  "Climbing plants",
  "Container plants",
  "Fruit",
  "Herbs",
  "Houseplants",
  "Ornamental grasses",
  "Perennials",
  "Roses",
  "Summer flowers",
  "Trees and Shrubs",
  "Vegetables",
];
const BlogPost = () => {
  const [formData, setFormData] = useState({
    english_name: "",
    botanical_name: "",
    description: "",
    image: "",
    category: "",
    factSheet: {
      flower_color: "",
      growth_height: "",
      light: "",
      garden_style: "",
    },
    origin: "",
    location: "",
    fertilizing: "",
    diseases_pests: "",
  });
  const auth = useSelector((state) => state);
  // console.log(auth.authReducer.user.token);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFactSheetChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      factSheet: {
        ...prevData.factSheet,
        [name]: value,
      },
    }));
  };
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${auth.authReducer.user.token}`,
      },
    };
    await axios.post(`${url}/posts/add`, formData, config);
    toast({
      title: `Data added successfully`,
      status: "success",
      position: "top-center",
      duration: 2000,
      isClosable: true,
    });
    setFormData({
      english_name: "",
      botanical_name: "",
      description: "",
      image: "",
      category: "",
      factSheet: {
        flower_color: "",
        growth_height: "",
        light: "",
        garden_style: "",
      },
      origin: "",
      location: "",
      fertilizing: "",
      diseases_pests: "",
      userId: "",
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="combine">
        <FormControl isRequired>
          <FormLabel>English Name:</FormLabel>
          <Input
            type="text"
            name="english_name"
            value={formData.english_name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Botanical Name:</FormLabel>
          <Input
            type="text"
            name="botanical_name"
            value={formData.botanical_name}
            onChange={handleInputChange}
          />
        </FormControl>
      </div>
      <FormControl isRequired>
        <FormLabel>Description:</FormLabel>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </FormControl>
      <div className="combine">
        <FormControl isRequired>
          <FormLabel>Image URL:</FormLabel>
          <Input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Category:</FormLabel>
          <Select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            onInput={(e) => handleInputChange(e)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(formData.factSheet).map(([property, value]) => (
            <Tr key={property}>
              <Td sx={{ fontWeight: "bold" }}>
                {property
                  ?.replace(/_/g, " ")
                  .toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </Td>
              <Td>
                <Input
                  type="text"
                  name={property}
                  value={value}
                  onChange={handleFactSheetChange}
                  isRequired
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <FormControl isRequired>
        <FormLabel>Origin:</FormLabel>
        <Textarea
          name="origin"
          value={formData.origin}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Location:</FormLabel>
        <Textarea
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Fertilizing:</FormLabel>
        <Textarea
          name="fertilizing"
          value={formData.fertilizing}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Diseases & Pests:</FormLabel>
        <Textarea
          name="diseases_pests"
          value={formData.diseases_pests}
          onChange={handleInputChange}
        />
      </FormControl>
      <br />
      <Button type="submit" colorScheme="green">
        Submit
      </Button>
    </Form>
  );
};

export default BlogPost;
const Form = styled.form`
  width: 50%;
  margin: auto;
  input,
  textarea,
  select {
    border: 2px solid black;
  }
  table {
    border: 1px solid black;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .combine {
    display: flex;
    gap: 10px;
  }
`;
