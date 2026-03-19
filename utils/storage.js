// Utility functions for handling localStorage

// Function to set user data in localStorage
export const setUserData = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
};

// Function to get user data from localStorage
export const getUserData = () => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem("data");
        return data ? JSON.parse(data) : null;
    }
    return null;
};

// Function to get a specific field from user data in localStorage
export const getUserField = (field) => {
    const userData = getUserData();
    return userData ? userData[field] : null;
};

// Example functions for setting and getting other specific data
export const setAuthToken = (token) => {
    localStorage.setItem("authToken", token);
};

export const getAuthToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("authToken");
    }
    return null;
};
