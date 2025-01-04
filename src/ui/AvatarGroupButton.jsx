import { Avatar, AvatarGroup, Box, Flex } from "@chakra-ui/react";
import avatarImages from "../data/avatarImages";

function AvatarGroupButton() {
  return (
    <Flex align="center" position={"relative"}>
      {/* Avatar Group */}
      <AvatarGroup size="md" max={4} spacing={-3}>
        {avatarImages.map((image, idx) => (

          <Avatar key={idx} src={image}  />
        ))}
      </AvatarGroup>
      {/* Add Button */}
      <Box
        position={"absolute"}
        left={"144px"}
        w="48px"
        h="48px"
        borderRadius="full"
        bg="red.500"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="lg"
        fontWeight="bold"
      >
        +
      </Box>
    </Flex>
  );
}

export default AvatarGroupButton;
