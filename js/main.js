/*
        Write a program to determing the following employees remaining years in service
        
        Retirement age for Married Male  = 70;
        Retirement age for Married Female = 60;
        Retirement age for Single Male = 65;
        Retirement age for Single Female = 55;

        Output : display the employee age, years remaining in service, full name and marital status.

        Note : any employee full name for married female is the First Name and Husband Name 
*/

    let employees = [
        {name:"Amara",
        gender:"female",
        married:true,
        age:30,
        lastName : "Uche",
        husbandName : "Kalu"},

        {name:"Ben",
        gender:"male",
        married:false,
        age:20,
        lastName : "Santos"},

        {name:"Rachael",
        gender:"female",
        married:false,
        age:40,
        lastName : "Timothy" },

        {name:"Allwell",
        gender:"male",
        married:true,
        age:46,
        lastName : "Steven"},

        {name:"Candor",
        gender:"female",
        married:true,
        age:70,
        lastName : "Andy",
        husbandName : "Nathan"},
    ];

    let totalEmployees = employees.length;

    // for (let i = 0; i < totalEmployees; i++) {
    // 	for(let employee in employees[i]){
    // 		if (employee == "gender" && employees[i][employee] == "male") {
    // 			for(let employee in employees[i]){
    // 				if (employee == "married" && employees[i][employee]) {
    // 					for(let employee in employees[i]){
    // 						if (employee == "age") {
    // 							for(let employee in employees[i]){
    // 								if (employee == "name") {
    // 									document.write("Name : " +employees[i][employee] + "<br>")
    // 								}
    // 							}
    // 							if (employees[i][employee] > 70) {
    // 								document.write("Retired")
    // 							}else{
    // 								document.write("Years Remaining In Service : " + (70 - employees[i][employee]))
    // 							}
                                
    // 						}
    // 					}
    // 				}
    // 			}
    // 		}
    // 	}
    // }

    let employeeCheck1 = (inputMarried,inputGender,retirementAge) =>{
        for (let i = 0; i < totalEmployees; i++) {
            for(let employee in employees[i]){
                if (employee == "gender" && employees[i][employee] == inputGender) {
                    for(let employee in employees[i]){
                        if (employee == "married" && employees[i][employee] == inputMarried) {
                            for(let employee in employees[i]){
                                if (employee == "age") {
                                    for(let employee in employees[i]){
                                        if (employee == "name") {
                                            document.write("Name : " +employees[i][employee] +" ");
                                            if (employees[i].hasOwnProperty("husbandName")) {
                                                document.write(employees[i]["husbandName"] + "<br>")
                                            }else{
                                                document.write(employees[i]["lastName"] + "<br>")
                                            }
                                        }
                                        
                                    }
                                    if (employees[i][employee] > retirementAge) {
                                        document.write("You are Retired <hr>")
                                    }else{
                                        document.write("Years Remaining In Service : " + (retirementAge - employees[i][employee] )+ "years <hr>")
                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    employeeCheck1(true,"male",70)
    employeeCheck1(true,"female",60)
    employeeCheck1(false,"male",65)
    employeeCheck1(false,"female",55)
