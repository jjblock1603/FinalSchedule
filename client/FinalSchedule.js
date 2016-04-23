  Template.classes.events({
     'submit .DayofWeekandClassTime'(event) {
    // Prevent default browser form submit
       event.preventDefault();

        const form = event.target;
        const classTime = form.ClassTimeForm.value;

       if (form.Monday.checked)
         {
        const submittedClassDate = form.Monday.value;
         console.log("This is " + submittedClassDate)
         ClassScheduleCollection.insert({ClassDate: submittedClassDate, createdAt: new Date ()  });

        }

       if (form.Tuesday.checked)
         {
           const submittedClassDate = form.Tuesday.value;
           console.log("This is " + submittedClassDate)
           ClassScheduleCollection.insert({ClassDate: submittedClassDate, createdAt: new Date ()  });
        }
       if (form.Wednesday.checked)
         {
          const submittedClassDate = form.Wednesday.value;
           console.log("This is " + submittedClassDate)
           ClassScheduleCollection.insert({ClassDate: submittedClassDate, createdAt: new Date ()  });
        }

       if (form.Thursday.checked)
         {
          const submittedClassDate = form.Thursday.value;
           console.log("This is " + submittedClassDate)
           ClassScheduleCollection.insert({ClassDate: submittedClassDate, createdAt: new Date ()  });
        }

       if (form.Friday.checked)
         {
          const submittedClassDate = form.Friday.value;
          console.log("This is " + submittedClassDate)
          ClassScheduleCollection.insert({ClassDate: submittedClassDate, createdAt: new Date ()  });
        }

       if (form.SatSun.checked)
         {
          const submittedClassDate = form.SatSun.value;
         console.log("This is " + submittedClassDate)
         ClassScheduleCollection.insert({ClassDate: submittedClassDate, createdAt: new Date () });
        }

      TimeScheduleCollection.insert({
      submittedTime: classTime });
     }
  }
     )

 // var finalsDictionary=  {

  // FinalsScheduleDictionary: function() {
  //  FinalScheduleCollection.insert({
   //   ExamGroupNumber: examGroup,
  //    ExamDay: examDay,
  //    ExamTime: examTime

  //  }
  //  )

  //   console.log ("Test Time");
  //   return FinalScheduleCollection.find();}}

 //Template.finals.helpers(finalsDictionary)

