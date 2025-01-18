import { useSettingsStore } from '../../zustand/settings'
import { CalendarComponent } from './components/CalendarComponent';
import { DarkCalendarComponent } from './components/DarkCalendarComponent'
 
export default function CalendarDefault() {
  const { theme } = useSettingsStore();
  return (
    <div>
      {
        theme === 'dark' ? (
          <DarkCalendarComponent />
        ) : (
          <CalendarComponent />
        )
      }
    </div>
  )
}
 
