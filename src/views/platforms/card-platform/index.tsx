import { HStack, Text, IconButton, Tooltip, Box } from "@chakra-ui/react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { IPlatform } from "../../../api/platforms";

type PlatformProps = {
  platform: IPlatform;
  onEditClick: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
};

function CardPlatform({ platform, onDeleteClick, onEditClick }: PlatformProps) {
  return (
    <HStack
      border="1px"
      borderColor="#999999"
      borderRadius="10px"
      justifyContent="space-between"
    >
      <Text fontSize={16} padding="8px">
        {platform.nome}
      </Text>
      <Box>
        <Tooltip hasArrow label="Editar plataforma" placement="top">
          <IconButton
            colorScheme="whatsapp"
            aria-label="Edição de plataforma"
            margin={1}
            icon={<HiPencilAlt />}
            onClick={onEditClick}
          />
        </Tooltip>

        <Tooltip hasArrow label="Remover plataforma" placement="top">
          <IconButton
            colorScheme="red"
            margin={1}
            aria-label="Apagar plataforma"
            icon={<HiTrash />}
            onClick={onDeleteClick}
          />
        </Tooltip>
      </Box>
    </HStack>
  );
}

export default CardPlatform;
