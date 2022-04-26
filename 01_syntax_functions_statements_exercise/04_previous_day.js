function getPreviousDay(year, month, date) {
    const daysBefore = 1
    let current_date = new Date(year, month - 1, date)
    current_date.setDate(current_date.getDate() - daysBefore)
    console.log(`${current_date.getFullYear()}-${current_date.getMonth() + 1}-${current_date.getDate()}`);
}

getPreviousDay(2016, 9, 30)
getPreviousDay(2016, 1, 1)