export const getItem = (key: string): any | null => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.log('Error getting Storage data', error);
        return null;
    }
}

export const setItem = (key: string, data: any): void => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log('Error setting Storage data', error);
    }
}

export const removeItem = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log('Error deleting Storage data', error);
    }
}
