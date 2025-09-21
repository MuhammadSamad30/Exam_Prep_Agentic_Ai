"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";

interface NotificationProps {
  message: string;
  show: boolean;
}

export default function Notification({ message, show }: NotificationProps) {
  useEffect(() => {
    if (show) {
      toast(message, {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#1f2937",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "10px",
        },
      });
    }
  }, [show, message]);

  return null;
}
