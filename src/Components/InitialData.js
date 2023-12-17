
const InitialData = [

    { "id": 1, "name": "John Doe", "lastSeen": "2023-01-01", "order": 5, "totalSpend": 100, "latestPurchase": "2023-01-05", "news": "Yes", "segment": "A" },
    { "id": 2, "name": "Jane Smith", "lastSeen": "2023-01-02", "order": 3, "totalSpend": 75, "latestPurchase": "2023-01-07", "news": "No", "segment": "B" },
    { "id": 3, "name": "Bob Johnson", "lastSeen": "2023-01-03", "order": 7, "totalSpend": 150, "latestPurchase": "2023-01-10", "news": "Yes", "segment": "C" },
    { "id": 4, "name": "Emily Davis", "lastSeen": "2023-01-04", "order": 4, "totalSpend": 90, "latestPurchase": "2023-01-12", "news": "No", "segment": "A" },
    { "id": 5, "name": "Chris Wilson", "lastSeen": "2023-01-05", "order": 6, "totalSpend": 120, "latestPurchase": "2023-01-15", "news": "Yes", "segment": "B" },
    { "id": 6, "name": "Lisa Turner", "lastSeen": "2023-01-06", "order": 2, "totalSpend": 50, "latestPurchase": "2023-01-18", "news": "No", "segment": "C" },
    { "id": 7, "name": "Mark Roberts", "lastSeen": "2023-01-07", "order": 8, "totalSpend": 180, "latestPurchase": "2023-01-20", "news": "Yes", "segment": "A" },
    { "id": 8, "name": "Megan White", "lastSeen": "2023-01-08", "order": 5, "totalSpend": 100, "latestPurchase": "2023-01-22", "news": "No", "segment": "B" },
    { "id": 9, "name": "Tom Brown", "lastSeen": "2023-01-09", "order": 3, "totalSpend": 75, "latestPurchase": "2023-01-25", "news": "Yes", "segment": "C" },
    { "id": 10, "name": "Sara Miller", "lastSeen": "2023-01-10", "order": 6, "totalSpend": 120, "latestPurchase": "2023-01-28", "news": "No", "segment": "A" },
    { "id": 11, "name": "Ryan Harris", "lastSeen": "2023-01-11", "order": 4, "totalSpend": 90, "latestPurchase": "2023-01-30", "news": "Yes", "segment": "B" },
    { "id": 12, "name": "Emma Lee", "lastSeen": "2023-01-12", "order": 7, "totalSpend": 150, "latestPurchase": "2023-02-02", "news": "No", "segment": "C" },
    { "id": 13, "name": "James Turner", "lastSeen": "2023-01-13", "order": 2, "totalSpend": 50, "latestPurchase": "2023-02-05", "news": "Yes", "segment": "A" },
    { "id": 14, "name": "Olivia Davis", "lastSeen": "2023-01-14", "order": 8, "totalSpend": 180, "latestPurchase": "2023-02-08", "news": "No", "segment": "B" },
    { "id": 15, "name": "Alex Johnson", "lastSeen": "2023-01-15", "order": 5, "totalSpend": 100, "latestPurchase": "2023-02-10", "news": "Yes", "segment": "C" },
    { "id": 16, "name": "Sophie Wilson", "lastSeen": "2023-01-16", "order": 3, "totalSpend": 75, "latestPurchase": "2023-02-12", "news": "No", "segment": "A" },
    { "id": 17, "name": "Jake Smith", "lastSeen": "2023-01-17", "order": 6, "totalSpend": 120, "latestPurchase": "2023-02-15", "news": "Yes", "segment": "B" },
    { "id": 18, "name": "Hannah Turner", "lastSeen": "2023-01-18", "order": 4, "totalSpend": 90, "latestPurchase": "2023-02-18", "news": "No", "segment": "C" },
    { "id": 19, "name": "Daniel Roberts", "lastSeen": "2023-01-19", "order": 7, "totalSpend": 150, "latestPurchase": "2023-02-20", "news": "Yes", "segment": "A" },
    { "id": 20, "name": "Ava White", "lastSeen": "2023-01-20", "order": 5, "totalSpend": 100, "latestPurchase": "2023-02-22", "news": "No", "segment": "B" },
    { "id": 21, "name": "Ethan Brown", "lastSeen": "2023-01-21", "order": 3, "totalSpend": 75, "latestPurchase": "2023-02-25", "news": "Yes", "segment": "C" },
    { "id": 22, "name": "Zoe Miller", "lastSeen": "2023-01-22", "order": 6, "totalSpend": 120, "latestPurchase": "2023-02-28", "news": "No", "segment": "A" },
    { "id": 23, "name": "Nathan Harris", "lastSeen": "2023-01-23", "order": 4, "totalSpend": 90, "latestPurchase": "2023-03-02", "news": "Yes", "segment": "B" },
    { "id": 24, "name": "Grace Lee", "lastSeen": "2023-01-24", "order": 8, "totalSpend": 180, "latestPurchase": "2023-03-05", "news": "No", "segment": "C" },
    { "id": 25, "name": "Liam Davis", "lastSeen": "2023-01-25", "order": 5, "totalSpend": 100, "latestPurchase": "2023-03-08", "news": "Yes", "segment": "A" },
    { "id": 26, "name": "Aria Turner", "lastSeen": "2023-01-26", "order": 3, "totalSpend": 75, "latestPurchase": "2023-03-10", "news": "No", "segment": "B" },
    { "id": 27, "name": "Logan Smith", "lastSeen": "2023-01-27", "order": 6, "totalSpend": 120, "latestPurchase": "2023-03-12", "news": "Yes", "segment": "C" },
    { "id": 28, "name": "Mia Johnson", "lastSeen": "2023-01-28", "order": 4, "totalSpend": 90, "latestPurchase": "2023-03-15", "news": "No", "segment": "A" },
    { "id": 29, "name": "Carter Wilson", "lastSeen": "2023-01-29", "order": 7, "totalSpend": 150, "latestPurchase": "2023-03-18", "news": "Yes", "segment": "B" },
    { "id": 30, "name": "Madison Roberts", "lastSeen": "2023-01-30", "order": 5, "totalSpend": 100, "latestPurchase": "2023-03-20", "news": "No", "segment": "C" }


];

export default InitialData;