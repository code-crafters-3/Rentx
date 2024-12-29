import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
 
import '@schedule-x/theme-default/dist/index.css'
import { useEffect, useState } from 'react'

export const DarkCalendarComponent = () => {
  const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2024-12-25',
        end: '2024-12-26',
      },
    ],
    plugins: [eventsService],
    isDark: true,
  })
 
  useEffect(() => {
    // get all events
    eventsService.getAll()
  }, [])
    return (
      <ScheduleXCalendar calendarApp={calendar} />
    )
}