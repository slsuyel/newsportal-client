/* eslint-disable no-unused-vars */
import React from 'react';

const convertToBengaliNumber = (number) => {
    const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(number).replace(/\d/g, digit => bengaliNumbers[digit]);
};

const DynamicDate = () => {
    // Get the current date
    const currentDate = new Date();

    // Define days of the week and months
    const daysOfWeek = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];

    // Extract day, month, and year
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const day = convertToBengaliNumber(currentDate.getDate());
    const month = months[currentDate.getMonth()];
    const year = convertToBengaliNumber(currentDate.getFullYear());

    // Create the formatted date string
    const formattedDate = `${day} ${month}, ${year}`;

    return (
        <>{formattedDate}</>
        // <p className="mb-0"><i className="far fa-calendar"></i> {formattedDate}</p>
    );
};

export default DynamicDate;
