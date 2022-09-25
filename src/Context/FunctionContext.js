import React, { createContext, useContext } from "react";
import DateDiff from "date-diff";

const functioncontext = createContext();

export const FunctionContext = ({ children }) => {
  const convertview = (views) => {
    let view;
    if ((views > 999) & (views <= 999999)) {
      view = (views / 1000).toFixed(0).toString() + "k";
    } else if ((views > 999999) & (views < 999999999)) {
      view = (views / 1000000).toFixed(0).toString() + "M";
    } else if ((views > 999999999) & (views < 999999999999)) {
      view = (views / 1000000000).toFixed(0).toString() + "B";
    } else {
      view = views;
    }
    return view;
  };

  const dateDifference = (publishtime) => {
    const totalDifference = new DateDiff(new Date(), new Date(publishtime));
    let diff;
    if (totalDifference.seconds() < 60) {
      diff = `${totalDifference.seconds()} second `;
    } else if (totalDifference.minutes() < 60) {
      diff = `${totalDifference.minutes()} minute `;
    } else if (totalDifference.hours() < 24) {
      diff = `${totalDifference.hours()} hour `;
    } else if (totalDifference.days() < 7) {
      diff = `${totalDifference.days()} day `;
    } else if (totalDifference.weeks() < 4) {
      diff = `${totalDifference.days()} week `;
    } else if (totalDifference.months() < 12) {
      diff = `${totalDifference.months()} month `;
    } else {
      diff = `${totalDifference.years()} year `;
    }
    return diff;
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
