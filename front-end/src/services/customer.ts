import { CustomerTable } from "../models/customer"

const getAllCustomers = async (
    nameFilter="",
): Promise<CustomerTable> => {
  const url = nameFilter && `http://localhost:3000/customer?name=${nameFilter}` || `http://localhost:3000/customer`
  const response = await fetch(url)
  return await response.json()
}

const addCustomer = async (name: string, address: string, birthday: Date | null, email: string, phone: string) => {
  const response = await fetch('http://localhost:3000/customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, address, birthday, email, phone })
  })
  if (!response.ok)
    throw new Error(`Failed on sign in request ${response}`);

  return await response.json();
}

const addMatter = async(id: string, caseNumber: string, assignedAttorney: string, caseType: string, status: string) => {
    const response = await fetch('http://localhost:3000/customer/matter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, caseNumber, assignedAttorney, caseType, status })
    })
    if (!response.ok)
        throw new Error(`Failed on sign in request ${response}`);
    return await response.json();
}

export { addMatter, addCustomer, getAllCustomers }