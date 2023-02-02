import {
  Button,
  ButtonGroup,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const BasicUses = ({ isModalVisible, setIsModalVisible, Sdata }) => {
    console.log("Sdata",Sdata)
    const onClose = () => {
        setIsModalVisible(false);
      };

  return (
    <div>
      <Popover
        returnFocusOnClose={false}
        isOpen={isModalVisible}
        onClose={onClose}
        placement="top"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button bg="#cbd5e1"></Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">SpaceX</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
          <Stack mt="6" spacing="3">
            <Heading size="s">{`Details : ${Sdata.details}`}</Heading>
            <Heading size="s">{`Landings : ${Sdata.landings}`}</Heading>
            <Heading size="s">{`Capsule_serial : ${Sdata.capsule_serial}`}</Heading> 
          </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BasicUses;
