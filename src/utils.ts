export const  formattedDate =(date: string, status: string) =>{
    const inputDate = new Date(date);

    // Get day in three-letter format (e.g., "Mon" for Monday)
    const dayOfWeek = inputDate.toLocaleDateString("en-US", { weekday: "short" });

    // Get month in three-letter format (e.g., "Sep" for September)
    const month = inputDate.toLocaleDateString("en-US", { month: "short" });

    // Get numeric date
    const numericDate = inputDate.getDate();

    // Get time in HH:mm:ss format
    const hours = inputDate.getHours().toString().padStart(2, "0");
    const minutes = inputDate.getMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes}`;

    const isCompleted = isPending(status);

    return `${dayOfWeek}, ${month} ${numericDate} ${
        isCompleted ? `, ${time}` : ""
    } `;
}

export const isPending = (status: string) => status === "Pending";
