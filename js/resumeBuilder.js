/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  "name": "Asai Andrade",
  "role": "Frontend Web Developer",
  "contacts": {
    "mobile": "(111)111-1111",
    "email": "myemail@email.com",
    "github": "imdoingotherthings",
    "location": "Palm Desert"
  },
  "welcomeMessage": "Hello! ^.^",
  "skills": ["JavaScript", "HTML5", "CSS", "jQuery", "Responsive Design"],
  "biopic": "images/fry.jpg",
};

bio.display = function () {
  var header = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(header);

  var headerRole = HTMLheaderRole.replace("%data%", bio.role);
  $(headerRole).insertAfter("#name");

  $.each(bio.contacts, function (key, value) {
    var keyProp = HTMLcontactGeneric.replace("%contact%", key);
    keyProp = keyProp.replace("%data%", value);
    $("#topContacts").append(keyProp);
    $("#footerContacts").append(keyProp);
  });

  var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(bioPic);

  var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $(message).insertAfter(".biopic");

  if (bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var skill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(skill);
    }
  }
};

bio.display();

var work = {
  "jobs": [
    {
      "employer": "Indigo",
      "title": "Photographer",
      "location": "Palm Springs",
      "dates": "in progress",
      "description": "description goes here"
    }
  ]
};

work.display = function () {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    $(".work-entry").append(employer + workTitle);

    var workDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry").append(workDate);

    var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry").append(workLocation);

    var des = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry").append(des);
  }
};

work.display();


var project = {
  projects: [
    {
      title: "Responsive Design Portfolio",
      dates: "July - July 2017",
      description: "This project was to work on concepts such as media quieries and responsive images",
      images: "images/fry.jpg"
    }
  ]
};

project.display = function () {
  for (var i = 0; i < project.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var pTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
    $(".project-entry").append(pTitle);

    var pDate = HTMLprojectDates.replace("%data%", project.projects[i].dates);
    $(".project-entry").append(pDate);

    var pDes = HTMLprojectDescription.replace("%data%", project.projects[i].description);
    $(".project-entry").append(pDes);

    var pImg = HTMLprojectImage.replace("%data%", project.projects[i].images);
    $(".project-entry").append(pImg);
  }
};

project.display();

var education = {
  schools: [
    {
      "name": "Palm Desert High School",
      "location": "Palm Desert",
      "major": ["High school"],
      "degree": "GED",
      "dates": "2009 - 2013"
    }
  ],
  onlineCourses: [
    {
      title: "The Web Developer Bootcamp",
      school: "Udemy",
      dates: "April - May 2017",
      url: "https://www.udemy.com/the-web-developer-bootcamp/"
    },
    {
      title: "Front-End Developer Nanodegree",
      school: "Udacity",
      dates: "July - Present 2017",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

education.display = function () {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);

    var sName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var sDeg = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $(".education-entry").append(sName + sDeg);

    var sDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var sLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(sDates + sLoc);

    var sMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major.join());
    $(".education-entry").append(sMajor);
  }

  $("#education").append(HTMLonlineClasses);
  for (var j = 0; j < education.schools.length; j++) {
    $("#education").append(HTMLschoolStart);
    var oTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
    var oSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
    $(".education-entry:last").append(oTitle + oSchool);

    var oDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
    var oURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
    $(".education-entry:last").append(oDates + oURL);

    // second school
    var newArr = [];
    for (var z in education.onlineCourses) {
      newArr.push(education.onlineCourses[z]);
    }
    $("#education").append(HTMLschoolStart);

    var oTitle = HTMLonlineTitle.replace("%data%", newArr[1].title);
    var oSchool = HTMLonlineSchool.replace("%data%", newArr[1].school);
    $(".education-entry:last").append(oTitle + oSchool);


    var oDates = HTMLonlineDates.replace("%data%", newArr[1].dates);
    var oURL = HTMLonlineURL.replace("%data%", newArr[1].url);
    $(".education-entry:last").append(oDates + oURL);
  }
};

education.display();


$("#mapDiv").append(googleMap);
