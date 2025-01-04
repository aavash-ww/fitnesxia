import { useState } from "react";
import { Button, Box } from "@chakra-ui/react";

const ToggleButton = () => {
  const [selected, setSelected] = useState("monthly");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      border="1px solid red"
      borderRadius="30px"
      bg="#333"
      width="200px"
      p="0"
     
      margin="auto"
    >
      <Button
        flex="1"
        color={"white"}
        bg={selected === "monthly" ? "red" : "transparent"}
        borderRadius="30px"
        fontSize={"sm"}
        _hover={{ bg: "rgba(255,0,0,0.8)" }}
        onClick={() => setSelected("monthly")}
      >
        Monthly
      </Button>
      <Button
        flex="1"
        color={"white"}
        bg={selected === "annual" ? "red" : "transparent"}
        borderRadius="30px"
        _hover={{ bg: "rgba(255,0,0,0.8)" }}
        fontSize={"sm"}
        onClick={() => setSelected("annual")}
      >
        Annual
      </Button>
    </Box>
  );
};

export default ToggleButton;
