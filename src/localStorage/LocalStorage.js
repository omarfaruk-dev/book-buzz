const getStoredBook = () => {

    const storedStringBook = localStorage.getItem('readList');

    if (storedStringBook) {
        const storedBookData = JSON.parse(storedStringBook);
        return storedBookData;
    } else {
        return ([]);
    }

}

const addToLocalStore = (id) => {

    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        alert('Book already exist!')
    } else {
        storedBookData.push(id);
        const toString = JSON.stringify(storedBookData);
        localStorage.setItem('readList', toString)
    }
}

export { addToLocalStore };