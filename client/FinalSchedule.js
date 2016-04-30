  Template.classes.events({
     'submit .DayofWeekandClassTime'(event) {
    // Prevent default browser form submit
       event.preventDefault();

        const form = event.target;
        const classTime = form.ClassTimeForm.value;
        Session.set("time",classTime)



       if (form.Monday.checked)
         {
        const submittedClassDate = form.Monday.value;
         console.log("This is " + submittedClassDate)
         Session.set("date", submittedClassDate)

        }

       if (form.Tuesday.checked)
         {
           const submittedClassDate = form.Tuesday.value;
           console.log("This is " + submittedClassDate)
           Session.set("date", submittedClassDate)
        }
       if (form.Wednesday.checked)
         {
          const submittedClassDate = form.Wednesday.value;
           console.log("This is " + submittedClassDate)
           Session.set("date", submittedClassDate)
        }

       if (form.Thursday.checked)
         {
          const submittedClassDate = form.Thursday.value;
           console.log("This is " + submittedClassDate)
            Session.set("date", submittedClassDate)
        }

       if (form.Friday.checked)
         {
          const submittedClassDate = form.Friday.value;
          console.log("This is " + submittedClassDate)
          Session.set("date", submittedClassDate)
        }

       if (form.SatSun.checked)
         {
          const submittedClassDate = form.SatSun.value;
         console.log("This is " + submittedClassDate)
         Session.set("date", submittedClassDate)
        }

         if (form.Tuesday.checked && form.Thursday.checked)
          {
            const submittedClassDates = "TuTh"
            console.log("This is " + submittedClassDates)
            Session.set("date", submittedClassDates)
          }

        if (form.Monday.checked && form.Wednesday.checked && form.Friday.checked)
          {
            const submittedClassDates = "MWF"
            console.log("This is " + submittedClassDates)
            Session.set("date", submittedClassDates)
          }

       if (form.Monday.checked && form.Tuesday.checked && form.Wednesday.checked && form.Thursday.checked && form.Friday.checked)
          {
            const submittedClassDates = "MTuWThF"
            console.log("This is " + submittedClassDates)
            Session.set("date", submittedClassDates)
          }
 var x= Session.get("date");
       
  if (x== "MTuWThF")
      {
      
      }
  if (x== "MWF")
      {
      
      }
    if (x== "TuTh")
      {
      
      }   

   //   TimeScheduleCollection.insert({
  //    submittedTime: classTime });
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

