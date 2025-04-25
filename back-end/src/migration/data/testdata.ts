const data = [
    {
        "name": "John Doe",
        "birthday": "1985-06-15",
        "email": "johndoe@example.com",
        "phone": "+1-555-123-4567",
        "address": "123 Main St, Springfield, IL, USA",
        "matters": [
            {
                caseNumber: "C-1001",
                caseType: "Contract Dispute",
                status: "Open",
                assignedAttorney: "John Doe"
            },
            {
                caseNumber: "C-1002",
                caseType: "Family Law",
                status: "Closed",
                assignedAttorney: "Jane Smith"
            }
        ]
    },
    {
        "name": "Jane Smith",
        "birthday": "1990-09-22",
        "email": "janesmith@example.com",
        "phone": "+1-555-987-6543",
        "address": "456 Elm St, Metropolis, NY, USA",
        "matters": [
            {
                caseNumber: "C-1003",
                caseType: "Criminal Defense",
                status: "In Progress",
                assignedAttorney: "Alice Johnson"
            },
            {
                caseNumber: "C-1004",
                caseType: "Tax Law",
                status: "Open",
                assignedAttorney: "Bob Brown"
            }
        ]
    },
    {
        "name": "Alice Johnson",
        "birthday": "1978-03-12",
        "email": "alicejohnson@example.com",
        "phone": "+1-555-234-5678",
        "address": "789 Oak St, Gotham, NJ, USA",
        "matters": [
            {
                caseNumber: "C-1005",
                caseType: "Immigration Law",
                status: "Closed",
                assignedAttorney: "Emily Davis"
            },
            {
                caseNumber: "C-1006",
                caseType: "Environmental Law",
                status: "In Progress",
                assignedAttorney: "Chris Wilson"
            },
            {
                caseNumber: "C-1007",
                caseType: "Bankruptcy",
                status: "Open",
                assignedAttorney: "Laura Martinez"
            }
        ]
    },
    {
        "name": "Bob Brown",
        "birthday": "1982-11-05",
        "email": "bobbrown@example.com",
        "phone": "+1-555-345-6789",
        "address": "321 Pine St, Star City, CA, USA",
        "matters": [
            {
                caseNumber: "C-1008",
                caseType: "Medical Malpractice",
                status: "Closed",
                assignedAttorney: "Daniel Lee"
            }
        ]
    },
    {
        "name": "Emily Davis",
        "birthday": "1995-07-19",
        "email": "emilydavis@example.com",
        "phone": "+1-555-456-7890",
        "address": "654 Maple St, Central City, TX, USA",
        "matters": [
            {
                caseNumber: "C-1009",
                caseType: "Elder Law",
                status: "In Progress",
                assignedAttorney: "Sophia Hernandez"
            },
            {
                caseNumber: "C-1010",
                caseType: "Construction Law",
                status: "Open",
                assignedAttorney: "Michael Clark"
            }
        ]
    },
    {
        "name": "Chris Wilson",
        "birthday": "1988-02-14",
        "email": "chriswilson@example.com",
        "phone": "+1-555-567-8901",
        "address": "987 Birch St, Coast City, FL, USA",
        "matters": []
    },
    {
        "name": "Laura Martinez",
        "birthday": "1975-08-30",
        "email": "lauramartinez@example.com",
        "phone": "+1-555-678-9012",
        "address": "123 Cedar St, Keystone City, WA, USA",
        "matters": [
            { caseNumber: "C-2024", caseType: "Insurance Law", status: "In Progress", assignedAttorney: "Elijah Wright" },
        ]
    },
    {
        "name": "Daniel Lee",
        "birthday": "1992-04-18",
        "email": "daniellee@example.com",
        "phone": "+1-555-789-0123",
        "address": "456 Walnut St, Smallville, KS, USA",
        "matters": [
            { caseNumber: "C-2025", caseType: "Estate Planning", status: "Open", assignedAttorney: "Isabella Moore" }
        ]
    },
    {
        "name": "Sophia Hernandez",
        "birthday": "1980-12-25",
        "email": "sophiahernandez@example.com",
        "phone": "+1-555-890-1234",
        "address": "789 Chestnut St, Emerald City, OR, USA",
        "matters": [
            { caseNumber: "C-2019", caseType: "Antitrust Law", status: "Open", assignedAttorney: "Amelia Turner" },
            { caseNumber: "C-2020", caseType: "Labor Law", status: "Closed", assignedAttorney: "Noah White" },
        ]
    },
    {
        "name": "Michael Clark",
        "birthday": "1987-03-09",
        "email": "michaelclark@example.com",
        "phone": "+1-555-901-2345",
        "address": "321 Aspen St, Riverdale, CO, USA",
        "matters": [
            { caseNumber: "C-2023", caseType: "Transportation Law", status: "Closed", assignedAttorney: "Sophia Green" },
        ]
    },
    {
        "name": "Olivia Lewis",
        "birthday": "1993-11-17",
        "email": "olivialewis@example.com",
        "phone": "+1-555-012-3456",
        "address": "654 Spruce St, Hill Valley, CA, USA",
        "matters": [
            { caseNumber: "C-2021", caseType: "Healthcare Law", status: "In Progress", assignedAttorney: "Ava Harris" },
            { caseNumber: "C-2022", caseType: "Entertainment Law", status: "Open", assignedAttorney: "William Baker" },
        ]
    },
    {
        "name": "Ethan Walker",
        "birthday": "1984-05-27",
        "email": "ethanwalker@example.com",
        "phone": "+1-555-123-4568",
        "address": "987 Poplar St, Sunnydale, AZ, USA",
        "matters": [
            { caseNumber: "C-2015", caseType: "Social Security Law", status: "In Progress", assignedAttorney: "Mia King" },
            { caseNumber: "C-2016", caseType: "Military Law", status: "Open", assignedAttorney: "Liam Scott" },
            { caseNumber: "C-2017", caseType: "Patent Law", status: "Closed", assignedAttorney: "Charlotte Adams" },
            { caseNumber: "C-2018", caseType: "Civil Litigation", status: "In Progress", assignedAttorney: "Benjamin Carter" },
        ]
    },
    {
        "name": "Isabella Hall",
        "birthday": "1991-10-02",
        "email": "isabellahall@example.com",
        "phone": "+1-555-234-5679",
        "address": "123 Willow St, Mystic Falls, VA, USA",
        "matters": [
            { caseNumber: "C-2012", caseType: "Privacy Law", status: "In Progress", assignedAttorney: "Ethan Walker" },
            { caseNumber: "C-2013", caseType: "Education Law", status: "Open", assignedAttorney: "Isabella Hall" },
            { caseNumber: "C-2014", caseType: "Securities Law", status: "Closed", assignedAttorney: "James Young" },
        ]
    },
    {
        "name": "James Young",
        "birthday": "1979-06-11",
        "email": "jamesyoung@example.com",
        "phone": "+1-555-345-6780",
        "address": "456 Redwood St, Twin Peaks, MT, USA",
        "matters": [
            { caseNumber: "C-2006", caseType: "Bankruptcy", status: "In Progress", assignedAttorney: "Chris Wilson" },
            { caseNumber: "C-2007", caseType: "Medical Malpractice", status: "Open", assignedAttorney: "Laura Martinez" },
            { caseNumber: "C-2008", caseType: "Elder Law", status: "Closed", assignedAttorney: "Daniel Lee" },
            { caseNumber: "C-2009", caseType: "Construction Law", status: "In Progress", assignedAttorney: "Sophia Hernandez" },
            { caseNumber: "C-2010", caseType: "Corporate Governance", status: "Open", assignedAttorney: "Michael Clark" },
            { caseNumber: "C-2011", caseType: "Consumer Protection", status: "Closed", assignedAttorney: "Olivia Lewis" },
        ]
    },
    {
        "name": "Mia King",
        "birthday": "1996-01-23",
        "email": "miaking@example.com",
        "phone": "+1-555-456-7891",
        "address": "789 Cypress St, Pawnee, IN, USA",
        "matters": [
            { caseNumber: "C-2001", caseType: "Criminal Defense", status: "Open", assignedAttorney: "John Doe" },
            { caseNumber: "C-2002", caseType: "Family Law", status: "Closed", assignedAttorney: "Jane Smith" },
            { caseNumber: "C-2003", caseType: "Tax Law", status: "In Progress", assignedAttorney: "Alice Johnson" },
            { caseNumber: "C-2004", caseType: "Immigration Law", status: "Open", assignedAttorney: "Bob Brown" },
            { caseNumber: "C-2005", caseType: "Environmental Law", status: "Closed", assignedAttorney: "Emily Davis" },
        ]
    },
    {
        "name": "Liam Scott",
        "birthday": "1983-07-08",
        "email": "liamscott@example.com",
        "phone": "+1-555-567-8902",
        "address": "321 Fir St, Springfield, OR, USA",
        "matters": [
            {
                caseNumber: "C-1021",
                caseType: "Healthcare Law",
                status: "In Progress",
                assignedAttorney: "Ava Harris"
            },
            {
                caseNumber: "C-1022",
                caseType: "Tax Law",
                status: "Open",
                assignedAttorney: "William Baker"
            }
        ]
    },
    {
        "name": "Charlotte Adams",
        "birthday": "1994-02-16",
        "email": "charlotteadams@example.com",
        "phone": "+1-555-678-9013",
        "address": "654 Beech St, Gotham, NY, USA",
        "matters": [
            {
                caseNumber: "C-1018",
                caseType: "Corporate Governance",
                status: "In Progress",
                assignedAttorney: "Benjamin Carter"
            }
        ]
    },
    {
        "name": "Benjamin Carter",
        "birthday": "1986-09-30",
        "email": "benjamincarter@example.com",
        "phone": "+1-555-789-0124",
        "address": "987 Palm St, Metropolis, TX, USA",
        "matters": [
            {
                caseNumber: "C-1018",
                caseType: "Corporate Governance",
                status: "In Progress",
                assignedAttorney: "Benjamin Carter"
            },
            {
                caseNumber: "C-1019",
                caseType: "Family Law",
                status: "Open",
                assignedAttorney: "Amelia Turner"
            },
            {
                caseNumber: "C-1020",
                caseType: "Insurance Law",
                status: "Closed",
                assignedAttorney: "Noah White"
            }
        ]
    },
    {
        "name": "Amelia Turner",
        "birthday": "1998-12-12",
        "email": "ameliaturner@example.com",
        "phone": "+1-555-890-1235",
        "address": "123 Sycamore St, Star City, FL, USA",
        "matters": [
            {
                caseNumber: "C-1018",
                caseType: "Corporate Governance",
                status: "In Progress",
                assignedAttorney: "Benjamin Carter"
            }
        ]
    },
    {
        "name": "Noah White",
        "birthday": "1981-03-21",
        "email": "noahwhite@example.com",
        "phone": "+1-555-901-2346",
        "address": "456 Magnolia St, Keystone City, WA, USA",
        "matters": [
            {
                caseNumber: "C-1023",
                caseType: "Consumer Protection",
                status: "Closed",
                assignedAttorney: "Sophia Green"
            },
            {
                caseNumber: "C-1024",
                caseType: "Antitrust Law",
                status: "In Progress",
                assignedAttorney: "Elijah Wright"
            },
            {
                caseNumber: "C-1025",
                caseType: "Privacy Law",
                status: "Open",
                assignedAttorney: "Isabella Moore"
            }
        ]
    },
    {
        "name": "Ava Harris",
        "birthday": "1997-08-05",
        "email": "avaharris@example.com",
        "phone": "+1-555-012-3457",
        "address": "789 Dogwood St, Central City, CA, USA",
        "matters": [
            {
                caseNumber: "C-1015",
                caseType: "Social Security Law",
                status: "In Progress",
                assignedAttorney: "Mia King"
            },
            {
                caseNumber: "C-1016",
                caseType: "Patent Law",
                status: "Open",
                assignedAttorney: "Liam Scott"
            },
            {
                caseNumber: "C-1017",
                caseType: "Civil Litigation",
                status: "Closed",
                assignedAttorney: "Charlotte Adams"
            }
        ]
    },
    {
        "name": "William Baker",
        "birthday": "1989-11-14",
        "email": "williambaker@example.com",
        "phone": "+1-555-123-4569",
        "address": "321 Alder St, Hill Valley, CO, USA",
        "matters": [
            {
                caseNumber: "C-1013",
                caseType: "Education Law",
                status: "Open",
                assignedAttorney: "Isabella Hall"
            },
            {
                caseNumber: "C-1014",
                caseType: "Securities Law",
                status: "Closed",
                assignedAttorney: "James Young"
            }
        ]
    },
    {
        "name": "Sophia Green",
        "birthday": "1990-06-25",
        "email": "sophiagreen@example.com",
        "phone": "+1-555-234-5670",
        "address": "654 Hickory St, Riverdale, AZ, USA",
        "matters": [
            {
                caseNumber: "C-1011",
                caseType: "Estate Planning",
                status: "Closed",
                assignedAttorney: "Olivia Lewis"
            },
            {
                caseNumber: "C-1012",
                caseType: "Labor Law",
                status: "In Progress",
                assignedAttorney: "Ethan Walker"
            }
        ]
    },
    {
        "name": "Elijah Wright",
        "birthday": "1982-04-10",
        "email": "elijahwright@example.com",
        "phone": "+1-555-345-6781",
        "address": "987 Ash St, Sunnydale, NJ, USA",
        "matters": [
            {
                caseNumber: "C-1018",
                caseType: "Corporate Governance",
                status: "In Progress",
                assignedAttorney: "Benjamin Carter"
            },
            {
                caseNumber: "C-1019",
                caseType: "Family Law",
                status: "Open",
                assignedAttorney: "Amelia Turner"
            },
            {
                caseNumber: "C-1020",
                caseType: "Insurance Law",
                status: "Closed",
                assignedAttorney: "Noah White"
            }
        ]
    },
    {
        "name": "Isabella Moore",
        "birthday": "1993-10-18",
        "email": "isabellamoore@example.com",
        "phone": "+1-555-456-7892",
        "address": "123 Juniper St, Mystic Falls, VA, USA",
        "matters": [
            {
                caseNumber: "C-1011",
                caseType: "Estate Planning",
                status: "Closed",
                assignedAttorney: "Olivia Lewis"
            }
        ]
    }
]


export default data;