export type NotificationProps = {
  type: "reimbursement" | "sickness" | "overtime";
  status: "rejected" | "approved" | "processed";
  isRead?: boolean;
};

export type Employee = {
  name: string;
  location: string;
};
