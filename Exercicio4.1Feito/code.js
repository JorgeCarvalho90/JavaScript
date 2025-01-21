const events = [
    {
        name: 'Aniversário da Joana',
        date: new Date('2025-01-13T20:41:45.000Z'),
        alarm: true,
    },
    {
        name: 'Natação',
        date: new Date('2025-01-13T20:42:00.000Z'),
        alarm: false,
    },
    {
        name: 'Dormir',
        date: new Date('2025-01-13T20:42:30.000Z'),
        alarm: true,
    }
]

function scheduleReminder(ev) {
    if (!ev.alarm) return

    const timeToWait = ev.date - new Date()

    setTimeout(() => {
        console.log(`Agora! ${ev.name}`)
    }, timeToWait)

    setTimeout(() => {
        console.log(`Daqui a dez minutos! ${ev.name}`)
    }, timeToWait - 10 * 60 * 1000)
}

function setReminders(evts) {
    for (const ev of evts) {
        scheduleReminder(ev)
    }
}

setReminders(events)