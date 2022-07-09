export const MonthArrayObject: { label: string, value: string, numberOfDays: number }[] = [
    {
        label: 'January',
        value: '01',
        numberOfDays: 31,
    },
    {
        label: 'February',
        value: '02',
        numberOfDays: 28,
    },
    {
        label: 'March',
        value: '03',
        numberOfDays: 31,
    },
    {
        label: 'April',
        value: '04',
        numberOfDays: 30,
    },
    {
        label: 'May',
        value: '05',
        numberOfDays: 31,
    },
    {
        label: 'June',
        value: '06',
        numberOfDays: 30,
    },
    {
        label: 'July',
        value: '07',
        numberOfDays: 31,
    },
    {
        label: 'August',
        value: '08',
        numberOfDays: 31,
    },
    {
        label: 'September',
        value: '09',
        numberOfDays: 30,
    },
    {
        label: 'October',
        value: '10',
        numberOfDays: 31,
    },
    {
        label: 'November',
        value: '11',
        numberOfDays: 30,
    },
    {
        label: 'December',
        value: '12',
        numberOfDays: 31,
    }
]


export const longMonthNameArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const shortMonthNameArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function getMonth(month: number){
    return MonthArrayObject[month - 1].label;
}

export function getNumberOfDays(month: number){
    return MonthArrayObject[month - 1].numberOfDays;
}

export function getRangeOfDate(month: number): {label: string, value: string}[]{

    const days: number = MonthArrayObject[month - 1].numberOfDays

    let arrayOfDates = [];

    for(let i = 1; i <= days; i++){
        arrayOfDates.push({
            label: i.toString(),
            value: i.toString(),
        });
    }

    return arrayOfDates;

}
