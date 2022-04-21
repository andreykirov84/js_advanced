function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    // console.log(previous.toDateString());
    console.log(`${previous.getFullYear()}-${previous.getMonth() + 1}-${previous.getDate()}`);
    console.log(previous.format(YYYY-MM-DD));
}

getPreviousDay(new Date('2016, 9, 30'))
