import "./widget.scss";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export enum WidgetOptions {
  USER = "USER",
  ORDER = "ORDER",
  EARNING = "EARNING",
  BALANCE = "BALANCE",
}

export interface IWidgetType {
  type: WidgetOptions;
}

interface IData {
  title: string;
  isMoney: boolean;
  link: string;
  icon: JSX.Element;
}

const dataInitValues: IData = {
    title: WidgetOptions.USER,
    isMoney: false,
    link: "See all users",
    icon: (
      <PersonOutlinedIcon
        className="icon"
        style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}
      />
    ),
  };

  const amount = 150;
  const diffPercentage = 20;
const Widget: React.FC<IWidgetType> = ({ type = WidgetOptions.USER }) => {
  let data: IData = dataInitValues;
  switch (type) {
    case WidgetOptions.USER:
      data = {
        title: WidgetOptions.USER,
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case WidgetOptions.ORDER:
      data = {
        title: WidgetOptions.ORDER,
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case WidgetOptions.EARNING:
      data = {
        title: WidgetOptions.EARNING,
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case WidgetOptions.BALANCE:
      data = {
        title: WidgetOptions.BALANCE,
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diffPercentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
