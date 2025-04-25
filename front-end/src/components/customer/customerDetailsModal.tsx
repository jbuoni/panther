import { Dialog, Box, Portal, CloseButton, Heading, Table, Button, Span, Input } from '@chakra-ui/react'
import { Customer } from '../../models/customer';
import moment from 'moment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addMatter } from '../../services/customer';
import { useState } from 'react';

interface CustomerDetailsProps {
    customer: Customer
}

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {

    const [currentCustomer, setCurrentCustomer] = useState<Customer>(customer)
    const [caseNumber, setCaseNumber] = useState("")
    const [assignedAttorney, setAssignedAttorney] = useState("")
    const [caseType, setCaseType] = useState("")
    const [status, setStatus] = useState("")
    const [showAddMatter, setShowAddMatter] = useState(false)

    const { mutate: addMatterMutation,  error }  = useMutation({
        mutationFn: () => addMatter(customer.id, caseNumber, assignedAttorney, caseType, status),
        onSuccess: (updatedCustomer: Customer) => {
            setCurrentCustomer(updatedCustomer)
        },
        onError: (error: any) => {
            console.error("Error signing in:", error);
        }
    })

    return (
        <Box display={"flex"} flexDirection="column">
            <Box display={"flex"} flexDirection="row" paddingBottom="10px">
                <Box padding="5px"><b>Address:</b> {currentCustomer.address}</Box>
                <Box padding="5px"><b>Birthday:</b> {moment(currentCustomer.birthday).format("MMMM Do YYYY")}</Box>
            </Box>
            <Table.Root variant="outline">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Case Number</Table.ColumnHeader>
                        <Table.ColumnHeader>Assigned Attorney</Table.ColumnHeader>
                        <Table.ColumnHeader>Case Type</Table.ColumnHeader>
                        <Table.ColumnHeader>Status</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {currentCustomer.matters.map((matter) => {
                        let color = "green"

                        if(matter.status === "Open") {
                            color = "green"
                        } else if(matter.status === "Closed") {
                            color = "red"
                        }
                        else if(matter.status === "In Progress") {
                            color = "yellow"
                        }
                    
                        return (
                            <Table.Row key={matter.caseNumber}>
                                <Table.Cell>{matter.caseNumber}</Table.Cell>
                                <Table.Cell>{matter.assignedAttorney}</Table.Cell>
                                <Table.Cell>{matter.caseType}</Table.Cell>
                                <Table.Cell color={color}>{matter.status}</Table.Cell>
                            </Table.Row>
                        )
                        
                    })}
                </Table.Body>
            </Table.Root>
            {
                showAddMatter && (
                    <Box display="flex" flexDirection="column" marginTop={5}>
                        <Span>Case Number</Span>
                        <Input value={caseNumber} onChange={(e) => setCaseNumber(e.target.value)} />
                        <Span>Assigned Attorney</Span> 
                        <Input value={assignedAttorney} onChange={(e) => setAssignedAttorney(e.target.value)} />
                        <Span>Case Type</Span>
                        <Input value={caseType} onChange={(e) => setCaseType(e.target.value)} />
                        <Span>Status</Span>
                        <Input value={status} onChange={(e) => setStatus(e.target.value)} />
                        <Button backgroundColor="blue" color="white" marginTop={5} onClick={() => addMatterMutation()}>
                            Add Matter
                        </Button>
                    </Box>
                ) || (
                    <Button backgroundColor="blue" color="white" marginTop={5} onClick={() => setShowAddMatter(true)}>
                        Add Matter 
                    </Button>
                )
            }
        </Box>
        
    )
}

interface CustomerDetailsModalProps {
    open: boolean; 
    customer: Customer | null;
    onClose: () => void;
}

const CustomerDetailsModal = ({open, customer, onClose}: CustomerDetailsModalProps) => {
    return (
        <Dialog.Root open={open} size="full" motionPreset="slide-in-bottom">  
            <Portal>
                <Dialog.Trigger />
                <Dialog.Backdrop />
                <Dialog.Positioner>
                <Dialog.Content>
                    <Dialog.Header >
                        <Box display="flex" justifyContent="space-between" alignItems="center" w="100%">
                            <Box display="flex"flexDirection="column">
                                <Heading color="blue" paddingLeft="5px" paddingRight="5px">{customer?.name}</Heading>
                                <Box display={"flex"} flexDirection="row" paddingTop="10px">
                                    <Box padding="5px"><b>Email:</b> {customer?.email}</Box>
                                    <Box padding="5px"><b>Phone Number:</b> {customer?.phone}</Box>
                                </Box>
                            </Box>
                            <CloseButton onClick={onClose} justifyContent="right" marginTop="-30px"/>
                        </Box>
                    </Dialog.Header>
                    <Dialog.Body>
                    <CustomerDetails customer={customer!} />
                    </Dialog.Body>
                </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}

export default CustomerDetailsModal;