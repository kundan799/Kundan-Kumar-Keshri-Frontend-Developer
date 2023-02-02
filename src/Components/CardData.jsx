import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Divider, Text, ButtonGroup, Button } from "@chakra-ui/react";
import BasicUses from "./Modal/BasicUses";

const CardData = ({
  capsule_id,
  capsule_serial,
  status,
  type,
  original_launch,
  image,
  data
}) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});

  const handleClick = (item) => {
    setTimeout(()=>{
      setIsModalVisible(true);
      setSelectedBox(item);

    },500)
  }

  
  return (
    <div >
      <Card maxW="sm">
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{`Capsule_id : ${capsule_id}`}</Heading>
            <Heading size="md">{`Capsule_serial : ${capsule_serial}`}</Heading>
            <Heading size="md">{`Status : ${status}`}</Heading>
            <Heading size="md">{`Type: ${type}`}</Heading>
            <Heading size="md">{`Original_launch: ${original_launch}`}</Heading>
            
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue"  onClick={() => handleClick(data)}>
              view more
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <BasicUses
        Sdata={selectedBox}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      
      />
    </div>

  );
};

export default CardData;
