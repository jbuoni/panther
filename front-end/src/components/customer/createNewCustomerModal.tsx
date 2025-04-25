import { Dialog, Button, Input, Box, Span, Portal, CloseButton, Heading, Table } from '@chakra-ui/react'
import { Customer } from '../../models/customer';
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { addCustomer } from '../../services/customer';
import { useMutation, useQueryClient } from '@tanstack/react-query';


interface CreateNewCustomerModalProps {
    open: boolean; 
    onClose: () => void;
    onCustomerCreate: () => void;
}

const CreateNewCustomerModal = ({open, onClose, onCustomerCreate}: CreateNewCustomerModalProps) => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [birthday, setBirthday] = useState<Date | null>(null)
    const [address, setAddress] = useState<string>("")

    const queryClient = useQueryClient()

    const { mutate: createCustomer,  error }  = useMutation({
        mutationFn: () => addCustomer(name, address, birthday, email, phone),
        onSuccess: () => {
            onCustomerCreate()
            onClose()
            queryClient.refetchQueries()
        },
        onError: (error: any) => {
            console.error("Error signing in:", error);
        }
    })

    return (
        <Dialog.Root open={open} size="full" motionPreset="slide-in-bottom">  
            <Portal>
                <Dialog.Trigger />
                <Dialog.Backdrop />
                <Dialog.Positioner>
                <Dialog.Content>
                    <Dialog.Header >
                        <Box display="flex" justifyContent="space-between" alignItems="center" w="100%">
                            <Heading color="blue" paddingLeft="5px" paddingRight="5px">Create New Customer</Heading>
                            <CloseButton onClick={onClose} justifyContent="right" marginTop="-30px"/>
                        </Box>
                    </Dialog.Header>
                    <Dialog.Body>
                        <Box display={"flex"} flexDirection="column">
                            <Span padding="5px">Name:</Span>
                            <Input placeholder="Customer Name" onChange={(e) => setName(e.target.value)}/>
                            <Span padding="5px">Email:</Span>
                            <Input placeholder="Customer Email" onChange={(e) => setEmail(e.target.value)}/>
                            <Span padding="5px">Phone:</Span>
                            <Input placeholder="Customer Phone" onChange={(e) => setPhone(e.target.value)}/>
                            <Span padding="5px">Birthday:</Span>
                            <Span w="100%" h="30px" border="1px solid #ccc"><DatePicker selected={birthday} onChange={(date) => setBirthday(date)} showTimeSelect dateFormat="Pp"/></Span>
                            <Span padding="5px">Address:</Span>
                            <Input placeholder="Customer Address" onChange={(e) => setAddress(e.target.value)}/>
                        </Box>
                    </Dialog.Body>
                    <Dialog.Footer>
                        <Button backgroundColor="blue" color="white" marginLeft={5} onClick={() => createCustomer()}>
                            Create Customer
                        </Button>
                    </Dialog.Footer>
                </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}

export default CreateNewCustomerModal;