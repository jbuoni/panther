
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { Customer } from "../../models/customer";
import { CustomerTable, CustomerDetailsModal, CreateNewCustomerModal } from "../customer";


const CustomerLayout = () => {
    const [nameFilterInput, setNameFilterInput] = useState<string>("")
    const [nameFilter, setNameFilter] = useState<string>("")
    const [openCustomerModal, setOpenCustomerModal] = useState(false)
    const [openCustomerCreateModal, setOpenCustomerCreateModal] = useState(false)
    const [customer, setCustomer] = useState<Customer | null>(null)

    const handleNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameFilterInput(event.target.value)
    }

    const handleSearch = () => {
        setNameFilter(nameFilterInput)
    }

    const handleCustomerRowClick = (customer: Customer) => {
        setCustomer(customer)
        setOpenCustomerModal(true)
    }

    const handleAdd = () => {
        setOpenCustomerCreateModal(true)
    }
    return (
        <>
            <Box>
                <Box margin="10" display={"flex"} alignItems="center">
                    <InputGroup
                        startElement={<FontAwesomeIcon icon={faMagnifyingGlass}/>}
                    >
                        <Input placeholder="Search by Name" onChange={handleNameFilterChange} />
                    </InputGroup>
                    <Button backgroundColor="blue" color="white" marginLeft={5} onClick={handleSearch}>
                        Search
                    </Button>
                    <Button backgroundColor="blue" color="white" marginLeft={5} onClick={handleAdd}>
                        Add Customer
                    </Button>
                </Box>
                <CustomerTable onCustomerRowClick={handleCustomerRowClick} nameFilter={nameFilter} />
            </Box>
            <CustomerDetailsModal customer={customer} open={openCustomerModal} onClose={() => setOpenCustomerModal(false)} />
            <CreateNewCustomerModal open={openCustomerCreateModal} onClose={() => setOpenCustomerCreateModal(false)} onCustomerCreate={handleAdd} />
        </>
    )
}

export default CustomerLayout;