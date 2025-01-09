export function formatDate(timestamp, offset) {
    const localTimestamp = (timestamp + offset) * 1000;
    const localDate = new Date(localTimestamp);
  
    const formattedDate = `${localDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })} - ${localDate.toLocaleDateString("en-US", { weekday: "short" })}`;
  
    const hours = localDate.getUTCHours();
    const minutes = localDate.getUTCMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${(hours % 12 || 12).toString().padStart(2, "0")}:${minutes} ${ampm}`;
  
    return { formattedDate, formattedTime };
  }