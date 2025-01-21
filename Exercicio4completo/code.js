class CalendarEvent {
    static periods = {
      s: 1000,
      m: 1000 * 60,
      h: 1000 * 60 * 60,
      d: 1000 * 60 * 60 * 24,
    }
  
    name
    startDate
    endDate
  
    constructor(name, start, end) {
      this.name = name
      this.startDate = new Date(start)
      this.endDate = new Date(end)
    }
  
    get format() {
      const firstDate = `${this.startDate.toLocaleString()}`
      const secondDate = `${this.endDate.toLocaleString()}`
      const name = `${this.name}`
  
      return `${firstDate} a ${secondDate} - ${name}`
    }
  
    setFrom(newStart) {
      const newStartDate = new Date(newStart)
  
      if (newStartDate > this.endDate) {
        console.error('Data de início maior que fim')
        return
      }
  
      this.startDate = newStartDate
    }
  
    setTo(newEnd) {
      const newEndDate = new Date(newEnd)
  
      if (newEndDate < this.startDate) {
        console.error('Data de fim menor que início')
        return
      }
  
      this.endDate = newEndDate
    }
  
    postpone(n, unit) {
      const period = CalendarEvent.periods[unit]
  
      const periodKeys = Object.keys(CalendarEvent.periods).join(', ')
  
      if (!period) {
          throw new Error(`Periodo não é válido, utilizar ${periodKeys}`)
      }
  
      const time = n * period
  
      this.startDate = new Date(this.startDate.getTime() + time)
      this.endDate = new Date(this.endDate.getTime() + time)
    }
  
    remind() {
      const now = new Date()
      const range = this.startDate.getTime() - now.getTime()
  
      setTimeout(() => {
          console.log(`AGORA! ${this.name}`)
      }, range)
    }
  }
  
  const newEvent = new CalendarEvent('Meu evento', '10 Apr 2025, 22:11:40')
  
  try {
      newEvent.postpone(5)
  } catch (err) {
      console.log('PROGRAMA DEU ERRO; CONTINUAR')
  }
  
  const events = [
      new CalendarEvent('Aniversário da Joana', '10 Apr 2025, 22:11:40'),
      new CalendarEvent('Copos com o Jorge', '10 Apr 2025, 23:00'),
      new CalendarEvent('Dentista', '14 Apr 2025, 14:00'),
      new CalendarEvent('Aula de Full-Stack', '16 Apr 2025, 19:00')
  ]
  
  function parseEvents(eventList) {
      const eventMap = new Map()
  
      for (const ev of eventList) {
          const date = ev.startDate.toDateString()
  
          const dayEvents = eventMap.get(date) ?? []
  
          dayEvents.push(ev)
          eventMap.set(date, dayEvents)
      }
  
      return eventMap
  }
  
  function printEvents(eventsByDate) {
      for (const [date, eventList] of eventsByDate) {
          console.log(date)
  
          for (const ev of eventList) {
              console.log(`  ${ev.startDate.toLocaleTimeString()} - ${ev.name}`)
          }
      }
  }
  
  printEvents(parseEvents(events))