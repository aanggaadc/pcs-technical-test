import { NotificationProps, Employee } from "../types";

export const notificationData: NotificationProps[] = [
  {
    type: "reimbursement",
    status: "approved",
    isRead: false,
  },
  {
    type: "reimbursement",
    status: "rejected",
    isRead: true,
  },
  {
    type: "reimbursement",
    status: "processed",
    isRead: false,
  },
  {
    type: "sickness",
    status: "approved",
    isRead: false,
  },
  {
    type: "sickness",
    status: "rejected",
    isRead: true,
  },
  {
    type: "sickness",
    status: "processed",
    isRead: true,
  },
  {
    type: "overtime",
    status: "approved",
    isRead: false,
  },
  {
    type: "overtime",
    status: "rejected",
    isRead: true,
  },
  {
    type: "overtime",
    status: "processed",
    isRead: true,
  },
];

export const onlineData: Employee[] = [
  {
    name: "Jefril",
    location: "Sahid",
  },
  {
    name: "John",
    location: "Sahid",
  },
  {
    name: "Zasami",
    location: "BSD",
  },
  {
    name: "Sam",
    location: "Sahid",
  },
  {
    name: "Aldo",
    location: "Sahid",
  },
  {
    name: "Ana",
    location: "Sahid",
  },
  {
    name: "Arye",
    location: "BSD",
  },
  {
    name: "Erwin",
    location: "WFH",
  },
];
