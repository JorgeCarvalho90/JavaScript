class CalendarEvent {
  name
  initialDate
  finalDate
  reminder


  constructor(name, initialDate, finalDate, reminder){
    this.name = name
    this.initialDate = new Date(initialDate)
    this.finalDate = new Date(finalDate)
    this.reminder = reminder
  }

  get format(){

    console.log(`${this.initialDate.toLocaleDateString('pt-pt')} a ${this.finalDate.toLocaleDateString('pt-pt')} - ${this.name}`)
  }

  set fromDate(date){
    const formatToDate = new Date(date)
    if (formatToDate > this.finalDate) {
      console.error('Initial date can not be after final date');
    } else {
      this.initialDate = formatToDate;
    }
  }

  set toDate(date){
    const formatToDate = new Date(date)
    if (formatToDate < this.initialDate) {
      console.error('Final date can not be before initial date');
    } else{
      this.finalDate = formatToDate;
    }
  }

  postpone(inputDays, inputHours, inputMinutes) {
    if (inputDays === undefined && inputHours === undefined && inputMinutes === undefined){

      throw new Error('Input some values')

    } else {
      if (inputDays > 0){
        const daysToMilli = inputDays*(1000 * 60 * 60 * 24)
        console.log(`Datas iniciais:${this.initialDate} a ${this.finalDate}`)
        this.initialDate = new Date(this.initialDate.getTime() + daysToMilli)
        this.finalDate = new Date(this.finalDate.getTime() + daysToMilli)
        console.log(`Evento adiado de ${this.initialDate} a ${this.finalDate}`)
      }
      
      if (inputHours > 0){
        const hoursToMilli = inputHours*(1000 * 60 * 60)
        console.log(`Datas iniciais:${this.initialDate} a ${this.finalDate}`)
        this.initialDate = new Date(this.initialDate.getTime() + hoursToMilli)
        this.finalDate = new Date(this.finalDate.getTime() + hoursToMilli)
        console.log(`Evento adiado de ${this.initialDate} a ${this.finalDate}`)
      }
  
      if (inputMinutes > 0){
        const minutesToMilli = inputMinutes*(1000 * 60)
        console.log(`Datas iniciais:${this.initialDate} a ${this.finalDate}`)
        this.initialDate = new Date(this.initialDate.getTime() + minutesToMilli)
        this.finalDate = new Date(this.finalDate.getTime() + minutesToMilli)
        console.log(`Evento adiado de ${this.initialDate} a ${this.finalDate}`)
      }
    }
  }
}

const anaBday = new CalendarEvent('Aniversário da Ana', '19 Nov 2025', '22 Nov 2025', true)

try{

  anaBday.postpone()

} catch (error){

  console.log('Erro!')
  console.log(error.message)
}
 


// console.log(anaBday.postpone())