import React, { createContext, useContext } from "react";
import DateDiff from "date-diff";

const functioncontext = createContext();

export const FunctionContext = ({ children }) => {
  const convertview = (views) => {
    if ((views > 999) & (views <= 999999)) {
      return (views / 1000).toFixed(0).toString() + "k";
    }
    if ((views > 999999) & (views < 999999999)) {
      return (views / 1000000).toFixed(0).toString() + "M";
    }
    if ((views > 999999999) & (views < 999999999999)) {
      return (views / 1000000000).toFixed(0).toString() + "B";
    }
    return views;
  };

  const dateDifference = (publishtime) => {
    const totalDifference = new DateDiff(new Date(), new Date(publishtime));
    if (totalDifference.seconds() < 60) {
      return `${totalDifference.seconds()} second `;
    }
    if (totalDifference.minutes() < 60) {
      return `${totalDifference.minutes()} minute `;
    }
    if (totalDifference.hours() < 24) {
      return `${totalDifference.hours()} hour `;
    }
    if (totalDifference.days() < 7) {
      return `${totalDifference.days()} day `;
    }
    if (totalDifference.weeks() < 4) {
      return `${totalDifference.weeks()} week `;
    }
    if (totalDifference.months() < 12) {
      return `${totalDifference.months()} month `;
    }
    return `${totalDifference.years()} year `;
  };

  const value = { convertview, dateDifference };
  return (
    <functioncontext.Provider value={value}>
      {children}
    </functioncontext.Provider>
  );
};

export const useFunctionContext = () => {
  return useContext(functioncontext);
};
