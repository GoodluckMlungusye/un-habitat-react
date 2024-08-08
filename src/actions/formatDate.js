import { format } from 'date-fns';

const formatDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const formattedDate = format(date, 'MMMM yyyy');
    return formattedDate;
}

export default formatDate;