// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


process.env.REACT_APP_SUPABASE_URL="https://ibosarsyqbmnxplpcnke.supabase.co"
process.env.REACT_APP_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY2NzIwMCwiZXhwIjoxOTU1MjQzMjAwfQ.g5Jh-q0n_YfGJ8pcr9VYvYaLSIlNd-ocWUTF3N3elIQ"
global.MOCK_DATA_USERS = {
    user1: {
        firstName: "user1_first",
        lastName: "user1_last",
        middleName: "user1_middle",
        dateofBirth: "1990-10-01",
        gender: "M",
        phoneNumber: "1231111122",
        email: "usera@gmail.com", 
        password: "abcd1234",
        address1: "1234 street",
        address2: "56 apartment",
        city: "NYC",
        state: "NY",
        postalCode: "100001",
    },
    user2: {
        user_id: "530f0820-f423-44c7-9727-78d6dc9b0d40"
    },
};
