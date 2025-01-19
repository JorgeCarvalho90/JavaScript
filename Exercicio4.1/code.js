const events = [
  {name: 'event1', date: new Date('2025-01-13T20:30:00'), hasReminder: true},
  {name: 'event2', date: new Date('2024-01-13T19:25:00'), hasReminder: false},
  {name: 'event3', date: new Date('2025-01-13T19:47:00'), hasReminder: true}
]

function checkEvent(event){


  for (const r of event) {

    if (r.hasReminder === true ){
      const now = new Date()
      const checkInFuture = r.date - now

      if (checkInFuture > 0){

       console.log(`Evento ${r.name} vai ocorrer em ${r.date}`)

        // if (now - checkInFuture == 5){
          setTimeout(() => {
            console.log(`Evento ${r.name} vai ocorrer em menos de 10 minutos`)
          }, checkInFuture - 10 * 60 * 1000)

        // }

      }
   }
  }
}

console.log(checkEvent(events))