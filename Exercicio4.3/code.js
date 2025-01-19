class CalendarEvent {
  name
  date


  constructor(inputName, inputDate){
    this.name = inputName
    this.date = new Date(inputDate)

  }
}

const events = [
    new CalendarEvent('Aniversário da Joana', '10 Apr 2025, 20:00'),
    new CalendarEvent('Copos com o Jorge', '10 Apr 2025, 23:00'),
    new CalendarEvent('Dentista', '14 Apr 2025, 14:00'),
    new CalendarEvent('Aula de Full-Stack', '16 Apr 2025, 19:00')
]


function formatEvents (list){
  const uniqueSet = new Set()
  const joinDayEvent = {}
  for (const i of list){
    const days = i.date.toDateString()
    uniqueSet.add(days)
  }
  return uniqueSet
}

function formatEvents2 (list){
  const joinDayEvent = new Map()
  for (const i of list){
    const days = i.date.toDateString()
    
    const dayEvents = joinDayEvent.get(days) ?? []
    joinDayEvent.set(days, [...dayEvents, i])

  }

  return joinDayEvent

}

// console.log (formatEvents(events))
console.log (formatEvents2(events))