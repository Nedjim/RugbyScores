"use client";
import { useRef, useState } from "react";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

type CalendarButtonPropsType = { config: DatePickerProps };

const CalendarButton = (props: CalendarButtonPropsType) => {
  const { config } = props;
  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={buttonRef}
        onClick={() => setOpen(true)}
        size="small"
        id="calendar-button"
        disabled={false}
      >
        <Image
          width={23}
          height={23}
          src="https://img.icons8.com/color/48/tear-off-calendar--v1.png"
          alt="tear-off-calendar"
          unoptimized
        />
      </IconButton>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          open={isOpen}
          onClose={() => setOpen(false)}
          slotProps={{
            textField: {
              style: { display: "none" },
            },
            popper: {
              anchorEl: buttonRef.current || undefined,
            },
          }}
          {...config}
        />
      </LocalizationProvider>
    </>
  );
};

export default CalendarButton;
