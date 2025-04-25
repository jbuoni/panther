import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Menu, Button, Portal, Box } from '@chakra-ui/react';

interface DropDownMenuProps {
    handleSignOut: () => void;
}

const DropDownMenu = ({handleSignOut}: DropDownMenuProps) => {
return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="plain" color="white" size="sm">
            <FontAwesomeIcon className='text-white' icon={faUser} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt-a" onClick={handleSignOut}>
              <Box textAlign="center" margin='auto'>
                Logout
              </Box>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
);
}


export default DropDownMenu