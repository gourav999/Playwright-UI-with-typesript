//typescript code to get the current date in the format YYYY-MM-DD

export const getCurrentDate = () => {
    // Get the current date
    const nowDate = new Date();
    // Format the date as YYYY-MM-DD
    return nowDate.getDate()+"/"+(nowDate.getMonth()+1)+"/"+nowDate.getFullYear()
}




