function displayMonthCalendar(currdate) {
    // Parse the date string into day, month, and year
    let day = parseInt(currdate.substr(0, 2));
    let month = parseInt(currdate.substr(2, 2)) - 1; // Months are 0-based in JavaScript
    let year = parseInt(currdate.substr(4, 4));

    // Create a Date object for the first day of the month
    let firstDay = new Date(year, month, 1);

    // Get the day of the week the month starts on (0 = Sunday, 1 = Monday, etc.)
    let startDay = firstDay.getDay();

    // Get the number of days in the month
    let daysInMonth = new Date(year, month + 1, 0).getDate(); // Last day of the month

    // Display the month and year
    console.log(`\n${firstDay.toLocaleString('default', { month: 'long' })} ${year}`);

    // Days of the week headers
    console.log('Sun Mon Tue Wed Thu Fri Sat');

    // Add leading spaces for the first day
    let calendar = '';
    for (let i = 0; i < startDay; i++) {
        calendar += '    '; // 4 spaces for each blank day
    }

    // Print the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendar += (day < 10 ? `  ${day}` : ` ${day}`) + ' '; // Align single digits

        // Move to the next line after Saturday
        if ((startDay + day) % 7 === 0) {
            calendar += '\n';
        }
    }

    // Display the calendar
    console.log(calendar);
}

// Example usage
let currdate = '25082024';
displayMonthCalendar(currdate);
 
