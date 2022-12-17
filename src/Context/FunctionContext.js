import React, { createContext, useContext } from "react";
import DateDiff from "date-diff";

const functioncontext = createContext();

export const FunctionContext = ({ children }) => {
  const convertview = (views) => {
    const formatter = new Intl.NumberFormat(undefined, { notation: "compact" });
    return formatter.format(views);
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
