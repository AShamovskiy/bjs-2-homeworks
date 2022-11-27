class AlarmClock {
   constructor () {
      this.alarmCollection = [];
      this.timerId = null; 
   }

   addClock (time, callback, id) {
      if (!id) {
         throw new Error('Невозможно идентифицироват будильник. Параметр id не передан')
      }
      
      if (this.alarmCollection.find(item => item.id === id)
         // this.alarmCollection.forEach((value) => {this.alarmCollection[value].timerId === id})
         ) {
         console.error("Будильник с таким id уже существует");
         return
      }
      this.alarmCollection.push({time, callback, id})
   }

   getCurrentFormattedTime () {
      const curentDate = new Date();
      let hour = curentDate.getHours();
      let minute = curentDate.getMinutes();
      minute = (minute < 10) ? '0' + minute : minute;
      hour = (hour < 10) ? '0' + hour : hour;
      let curentTime = hour + ":" + minute;
      return curentTime;
   }

   removeClock (id) {
      if (this.alarmCollection.some(item => item.id === id)) {
         this.alarmCollection = this.alarmCollection.filter(item => item.id != id)
         return true
      }
      return false
   }

   start () {
      if (this.timerId) {
         return;
      }

      function checkClock(call) {
         if(call.time === this.getCurrentFormattedTime()) {
            call.callback()
         } 
      }
      const BindedCheckClock = checkClock.bind(this)

      this.timerId = setInterval(() => this.alarmCollection.forEach((item) => BindedCheckClock(item)), 1000)
   }

   stop () {
      if (this.timerId) {
         clearInterval(this.timerId)
         this.timerId = null
      }
   }
   
   printAlarms () {
      console.log(`Печать всех звонков в количестве: ${this.alarmCollection.length}`)
      this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведен на ${item.time}`))
   }

   clearAlarms () {
      this.stop();
      this.alarmCollection.splice(0)
   }
}

// function testCase () {
//    let phoneAlarm = new AlarmClock();
//    phoneAlarm.addClock('23:23', () => console.log('Пора вставать'), 1);
//    phoneAlarm.addClock('23:23', () => {console.log('Давай, вставай уже!'); phoneAlarm.removeClock(2)}, 2);
//    phoneAlarm.addClock('23:23', () => console.log('Иди умывайся!'),3);
//    phoneAlarm.addClock('23:23', () => {
//       console.log("Вставай, а то проспишь!");
//       phoneAlarm.clearAlarms();
//       phoneAlarm.printAlarms();
//    }, 3)
//    phoneAlarm.addClock('23:23', () => console.log('Вставай, а то проспишь'), 1);
//    phoneAlarm.printAlarms();
//    phoneAlarm.start()
// }

// testCase()