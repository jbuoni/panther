
import {
    keepPreviousData,
    useQuery,
  } from '@tanstack/react-query'
import { useEffect, useState } from "react"
import { getAllCustomers } from "../../services/customer"
import { Customer } from '../../models/customer'
import { Box, Button, Center, SkeletonText, Table } from '@chakra-ui/react'

interface TableRowItemProps {
    customer: Customer
    onRowClick: (customer: Customer) => void
}

const TableRowItem = (
    { customer, onRowClick }: TableRowItemProps
) => {  
    return (
        <Table.Row key={customer.name}>
            <Table.Cell>
                <Button variant="plain" color="blue" onClick={() => onRowClick(customer)}>{customer.name}</Button>
            </Table.Cell>
            <Table.Cell>{customer.email}</Table.Cell>
            <Table.Cell>{customer.phone}</Table.Cell>
        </Table.Row>
    )
}

interface CustomerTableProps {
    nameFilter: string
    onCustomerRowClick: (customer: Customer) => void
}

const CustomerTable = ({ nameFilter, onCustomerRowClick }:CustomerTableProps) => {
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)
    const [pagedData, setPagedData] = useState<Customer[]>([])
  
    const { status, data, error, isFetching } = useQuery({
      queryKey: ['customers', nameFilter],
      queryFn: () => getAllCustomers(nameFilter),
      placeholderData: keepPreviousData,
      staleTime: 5000,
    })

    const getPagedData = (customerData: Customer[]) => {
        const start = page * 10
        const end =  (customerData.length > start + 10) ? start + 10 : customerData.length
        const split = customerData.slice(start, end)
        setPagedData(split)
    }

    useEffect(() => {
        if(data){
            setTotalPages(Math.ceil(data?.customers.length / 10))
            getPagedData(data?.customers)
        }
    }, [data])

    useEffect(() => {
        if(data){
            getPagedData(data?.customers)
        }
    }, [page])

    if(isFetching) {
        return <SkeletonText noOfLines={10} gap="5" />
    }

    return (
        <Box paddingLeft={10} paddingRight={10} paddingBottom={10}>
            <Table.Root variant="outline">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Email</Table.ColumnHeader>
                        <Table.ColumnHeader>Phone</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {status === "error" ? (
                        <tr>
                            <td colSpan={6}>Error: {error.message}</td>
                        </tr>
                    ) : status === "pending" ? (
                        <tr>
                            <td colSpan={6}>Loading...</td>
                        </tr>
                    ) : (
                        pagedData?.map((customer: Customer) => (
                            <TableRowItem onRowClick={onCustomerRowClick} customer={customer} />
                        ))
                    )}
                </Table.Body>
            </Table.Root>
            <Center justifyContent="center" marginTop="10px">
                <Button
                    backgroundColor="blue"
                    marginRight="20px"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 0}
                >{'<'}</Button>
                Page {page + 1} of {totalPages}
                <Button
                    backgroundColor="blue"
                    marginLeft="20px"
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages - 1}
                >{'>'}</Button>
            </Center>
        </Box>
    );
}

export default CustomerTable