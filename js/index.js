$(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });

var $item = $('.carousel-item');

var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));

$('.carousel-indicators li').each(function(){
  var $slideValue = $(this).attr('data-slide-to');
  if($currentSlide == $slideValue) {
    $(this).addClass('active');
    $item.eq($slideValue).addClass('active');
  } else {
    $(this).removeClass('active');
    $item.eq($slideValue).removeClass('active');
  }
});

$('.carousel').carousel({
  interval: 5000,
  pause: "false"
});

$('#form_sub').hide();
$('[data-toggle="tooltip"]').tooltip(); 


$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

function showModal(id) {
      $(".modal").modal('hide');
      $("#" + id).modal();
    };
    
var instance = new TypeIt('#typed', {
     strings: ["Kansas City, MO.", "Milwaukee, WI.", "Akron, OH.", "Indianapolis, IN.", "Omaha, NE.", "Des Moines, IA.", "Pittsburgh, PA.", "Grand Rapids, MI.", "Cincinnati, OH.", "West Lafayette, IN.", "Chicago, IL.", "Minneapolis, MN.", "Cleveland, OH.", "Detroit, MI.", "Lexington, KY.", "St. Louis, MO.", "Madison, WI.", "Ann Arbor, MI.", "Columbus, OH.", "Bloomington, IN.", "Lincoln, NE.", "Champaign-Urbana, IL."],
     speed: 90,
     deleteSpeed: 50,
     breakLines: false,
     autoStart: false,
     loop: true,
     loopDelay: 60,
     cursorSpeed: 0,
     lifeLike: true
});


var team = [

{name: "Victor Gutwein", title: "Managing Partner" ,desc: "Victor grew up in northwestern Indiana before moving to Chicago to study economics at the University of Chicago. Victor has a passionate history with startups, including a vending machine business and kick scooter company, along with being on the board of UChicago’s first student-run venture fund. A Kauffman Fellow (Class 22) and former leader in Hyde Park Angels, Victor founded M25 in 2015 and quickly grew it to become one of the most active venture firms in the region. Victor lives with his wife on the South Side of Chicago and loves staying active with running, biking, swimming, backpacking and any team sport you’ll let him join. If he can’t convince you to break a sweat with him though, he’ll usually succeed in getting you to try out a Euro-style board game (like Settlers of Catan) with his friends." ,twitter: "https://twitter.com/lalayak" ,linkedin: "https://www.linkedin.com/in/victor-gutwein/" ,medium: "https://medium.com/@lalayak" ,prev: "teamModal6" ,current: "teamModal1" ,next: "teamModal2" ,img: "img/team/victor.jpg"},
{name: "Mike Asem", title: "Partner" ,desc: "While earning his B.A. at Purdue University, Mike championed The Anvil, which is now the largest student-run coworking space and startup incubator in the world. While at Purdue, Mike was also a Student Fellow for Chicago Ventures, and was the first and only student to be named OnePurdue Scholar for making the largest impact to the Purdue community by a single student. After graduating, Mike led business development at a nanotech startup born out of Purdue. Most recently, Mike served as Director of Collaborative Relationships for the Purdue Foundry, where he supported business development and talent related activities for startups in the Foundry’s portfolio. Aside from his passion for working with startups, Mike can often be found making fruit wine, rooting for Chicago sports, and hunting down great sushi." ,twitter: "https://twitter.com/DMikeAsem" ,linkedin: "https://www.linkedin.com/in/dmikeasem/" ,medium: "https://medium.com/@dmikeasem" ,prev: "teamModal1" ,current: "teamModal2" ,next: "teamModal3" ,img: "img/team/mike.jpg"},
{name: "Abhinaya Konduru", title: "Associate" ,desc: "Abhinaya attended University of Illinois at Chicago where she studied Finance and Mathematical Computer Science. While she was there, she led the finance student organization and co-founded the Portfolio Management Team which is now one of the largest organizations in the college. She was also a part of numerous programs to help increase digital literacy in the community by partnering with Google and Blue1647. When she finds a problem, she seeks to solve it by taking action. She started a YouTube series, Hustlepreneur, where she showcases up-and-coming entrepreneurs by documenting their day. She grew up in India and suburbs of Chicago. Currently, she lives in Little Italy where you can find her exploring this beautiful city with her camera." ,twitter: "https://twitter.com/itsabhinaya" ,linkedin: "https://www.linkedin.com/in/itsabhinaya/" ,medium: "https://medium.com/@itsabhinaya" ,prev: "teamModal2" ,current: "teamModal3" ,next: "teamModal4" ,img: "img/team/abhinaya.jpg"},
{name: "Leandro Bedolla", title: "Analyst" ,desc: "Leandro is originally from Michoacán, Mexico, grew up in Joliet, IL, and graduated from Valparaiso University with a BSBA in Finance and minors in both Engineering and Mathematics. While at Valpo, he co-founded TEDxValparaisoUniversity, led Lambda Chi Alpha, and helped restart the Financial Management Association resulting in being recognized by the University and its president with the “Outstanding Leadership and Service” award. Most recently, Leandro was an associate with the Techstars Anywhere accelerator making it the best experience possible for the founders! Previously, he’s conducted due diligence with the Tech Coast Angels, organized conferences for Startup San Diego as MD of sponsorships, and conducted business development for a startup. In his free time, Leandro enjoys listening to podcasts, working out, and connecting others to potential opportunities." ,twitter: "https://twitter.com/Leandrobedolla_" ,linkedin: "https://www.linkedin.com/in/leandrobedolla/" ,medium: "" ,prev: "teamModal3" ,current: "teamModal4" ,next: "teamModal5" ,img: "img/team/leandro.jpg"},
{name: "Shaun Walker", title: "Associate" ,desc: "Shaun was born in England to parents serving in the U.S. military. His family settled in western New York outside of Rochester after the first several years of his childhood. Shaun earned his Bachelor of Business Administration degree from nearby SUNY Geneseo. For a few years during and after college, Shaun worked for the family business. In 2010, he relocated to Miami, FL for an enterprise sales role at a global technology and services company, a position he held for nearly seven years. Shaun left this role to start his own SaaS sales enablement company in 2016 which he folded at the beginning of 2019. Shaun is currently an MBA Candidate at The University of Chicago Booth School of Business. He and his Wife Elissa are avid cooks and live in Chicago’s River North neighborhood with their rescue dog, Fitzgerald." ,twitter: "https://twitter.com/dorim_lee" ,linkedin: "https://www.linkedin.com/in/shaun-michael-walker/" ,medium: "" ,prev: "teamModal4" ,current: "teamModal5" ,next: "teamModal6" ,img: "img/team/shaun.jpg"},
{name: "Sherkhan Tagirov", title: "Student Analyst" ,desc: "Sherkhan is an undergraduate student attending the University of Illinois at Chicago where he studies Finance and Business Analytics. Since Freshman year, Sherkhan has been part of the Finance and Investment group and Portfolio management team at UIC and one year later assumed a leadership role in those organizations. Previously, he interned with ShiftGig where he worked with data team to prospect for new clients and for finance team auditing quarterly financial reports. Sherkhan was born and raised in Tashkent, Uzbekistan and moved to the US when he was 13 years old. In his free time, Sherkhan likes to visit Russian banya with his friends, read WSJ on the weekends, play chess and swim." ,twitter: "" ,linkedin: "https://www.linkedin.com/in/sherkhan-tagirov-297200101/" ,medium: "" ,prev: "teamModal5" ,current: "teamModal6" ,next: "teamModal1" ,img: "img/team/sherkhan.jpg"}
];

function getTeamDetails(team) {
  team_twitter = ""
  team_medium = ""

  if (team.twitter){
    team_twitter = `<span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x icon-twitter"></i>
                      <a href="${team.twitter}" target="_blank"><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></a>
                    </span>`
  }
  if(team.linkedin){
    team_linkedin = `<span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x icon-linkedin"></i>
                      <a href="${team.linkedin}" target="_blank"><i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></a>
                    </span>`
  }
  if(team.medium){
    team_medium = `<span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x icon-medium"></i>
                      <a href="${team.medium}" target="_blank"><i class="fa fa-medium fa-stack-1x fa-inverse"></i></a>
                    </span>`
  }

	return `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 text-center team-item">
          <a href="#${team.current}" class="team-link" data-toggle="modal" data-target="#${team.current}">
            <img src="${team.img}" class="rounded-circle" alt="${team.name}">
              <div class="external_link"><i class="fa fa-external-link fa-1x"></i></div>
          </a>

          <div class="team-caption">
            <h4>${team.name}</h4>
            <p class="text-muted">${team.title}</p>
          </div>
          <!-- Modal -->
          <div class="modal" id="${team.current}" tabindex="-1" role="dialog" aria-labelledby="teamModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="teamModalLabel">${team.name}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-left">
                  <h6 class="font-weight-bold_2">${team.title}</h6>
                  <p>${team.desc}
                  </p>
                  <p>
                    ${team_linkedin}
                    ${team_twitter}
                    ${team_medium}
                  </p>
                </div>
                <div class="modal-footer">
                 <button type="button" class="btn btn-gray" onclick="showModal('${team.prev}')"><</button>
                 <button type="button" class="btn btn-gray" onclick="showModal('${team.next}')">></button>
                 <button type="button" class="btn btn-m25" data-dismiss="modal">Close</button>
               </div>
             </div>
           </div>
         </div>
        </div>`;

}
function showTeam(teamDetails) {
	document.querySelector(".team-thumb").innerHTML += teamDetails;
}
team.map(getTeamDetails).forEach(showTeam);


var latestInvest = portfolio.slice(0,4);

function getLatestInvestDetails(investment) {
  return `<a href="${investment.url}" target="_blank">
              <img class="item ${investment.class} isotope-item" src="img/portfolio/${investment.img}.jpg" style="left: 0px; top: 0px; padding-left: 15px;width:200px;height:100px;">
            </a>`;

}

function showLatestInvest(latestInvestDetails) {
  document.querySelector(".latest-thumb").innerHTML += latestInvestDetails;
}

latestInvest.map(getLatestInvestDetails).forEach(showLatestInvest);



