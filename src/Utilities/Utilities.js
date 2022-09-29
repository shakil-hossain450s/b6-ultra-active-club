const addToDb = (time) => {
    let activities;

    const breakTime = localStorage.getItem('break-time');
    if (breakTime) {
        activities = JSON.parse(breakTime);
    }
    else {
        activities = {};
    }

    const quantity = activities[time];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        activities[time] = newQuantity;
    }
    else {
        activities[time] = 1;
    }

    localStorage.setItem('break-time', JSON.stringify(activities));
}

export { addToDb }