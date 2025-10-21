"use client";

import { useState } from "react";

interface CalendarEvent {
  date: number;
  title: string;
  description?: string;
}

interface CalendarProps {
  events?: CalendarEvent[];
}

export default function Calendar({ events = [] }: CalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const hasEvent = (day: number) => {
    return events.some((event) => event.date === day);
  };

  const getEventForDay = (day: number) => {
    return events.find((event) => event.date === day);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="p-2 border border-gray-100"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const event = getEventForDay(day);
      days.push(
        <div
          key={day}
          className={`p-2 border border-gray-100 min-h-[80px] ${
            isToday(day)
              ? "bg-secondary text-white font-bold"
              : hasEvent(day)
              ? "bg-accent/20 hover:bg-accent/30 cursor-pointer"
              : "hover:bg-gray-50"
          } transition-colors`}
          title={event ? event.title : ""}
        >
          <div className="text-sm mb-1">{day}</div>
          {event && (
            <div className="text-xs mt-1 truncate font-semibold">
              {event.title}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="card">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-primary">
          {monthNames[currentMonth]} {currentYear}
        </h2>

        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Next month"
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-0 mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="p-2 text-center font-semibold text-gray-600 text-sm"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
        {renderCalendarDays()}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-secondary rounded mr-2"></div>
          <span className="text-gray-600">Today</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-accent/20 border border-accent/30 rounded mr-2"></div>
          <span className="text-gray-600">Event Day</span>
        </div>
      </div>
    </div>
  );
}
