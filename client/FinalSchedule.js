  Template.classes.events({
     'submit .DayofWeekForm'(event) {
    // Prevent default browser form submit
       event.preventDefault();

        const form = event.target;
       if (form.Monday.checked)
         {
        const formTextValue = form.Monday.value;
         console.log("This is " + formTextValue)
        }

       if (form.Tuesday.checked)
         {
        const formTextValue = form.Tuesday.value;
         console.log("This is " + formTextValue)
        }
       if (form.Wednesday.checked)
         {
        const formTextValue = form.Wednesday.value;
         console.log("This is " + formTextValue)
        }

       if (form.Thursday.checked)
         {
        const formTextValue = form.Thursday.value;
         console.log("This is " + formTextValue)
        }

       if (form.Friday.checked)
         {
        const formTextValue = form.Friday.value;
         console.log("This is " + formTextValue)
        }

       if (form.SatSun.checked)
         {
        const formTextValue = form.SatSun.value;
         console.log("This is " + formTextValue)
        }


     },



    'submit .ClassTimeForm'(event) {
         event.preventDefault();

       const target = event.target;
       const classTime = target.ClassTimeForm.value;

      TimeScheduleCollection.insert({
      submittedTime: classTime,

    })

    },


});