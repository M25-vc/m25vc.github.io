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
     strings: ["Kansas City, MO.", "Milwaukee, WI.", "Indianapolis, IN.", "Pittsburgh, PA.", "Grand Rapids, MI.", "Cincinnati, OH.", "West Lafayette, IN.", "Chicago, IL.", "Minneapolis, MN.", "Cleveland, OH.", "Detroit, MI.", "Lexington, KY.", "St. Louis, MO.", "Madison, WI.", "Ann Arbor, MI.", "Columbus, OH.", "Bloomington, IN.", "Lincoln, NE.", "Champaign-Urbana, IL."],
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

{name: "Victor Gutwein", title: "Managing Director" ,desc: "Victor grew up in northwestern Indiana before moving to Chicago to study economics at the University of Chicago. Victor has a passionate history with startups, including a vending machine business and kick scooter company, along with being on the board of UChicago’s first student-run venture fund. A Kauffman Fellow (Class 22) and former leader in Hyde Park Angels, Victor founded M25 in 2015 and quickly grew it to become one of the most active venture firms in the region. Victor lives with his wife on the South Side of Chicago and loves staying active with running, biking, swimming, backpacking and any team sport you’ll let him join. If he can’t convince you to break a sweat with him though, he’ll usually succeed in getting you to try out a Euro-style board game (like Settlers of Catan) with his friends." ,twitter: "https://twitter.com/lalayak" ,medium: "https://medium.com/@lalayak" ,prev: "teamModal6" ,current: "teamModal1" ,next: "teamModal2" ,img: "img/team/victor.jpg"},
{name: "Mike Asem", title: "Director" ,desc: "While earning his B.A. at Purdue University, Mike championed The Anvil, which is now the largest student-run coworking space and startup incubator in the world. While at Purdue, Mike was also a Student Fellow for Chicago Ventures, and was the first and only student to be named OnePurdue Scholar for making the largest impact to the Purdue community by a single student. After graduating, Mike led business development at a nanotech startup born out of Purdue. Most recently, Mike served as Director of Collaborative Relationships for the Purdue Foundry, where he supported business development and talent related activities for startups in the Foundry’s portfolio. Aside from his passion for working with startups, Mike can often be found making fruit wine, rooting for Chicago sports, and hunting down great sushi." ,twitter: "https://twitter.com/DMikeAsem" ,medium: "https://medium.com/@dmikeasem" ,prev: "teamModal1" ,current: "teamModal2" ,next: "teamModal3" ,img: "img/team/mike.jpg"},
{name: "Abhinaya Konduru", title: "Analyst" ,desc: "Abhinaya attended University of Illinois at Chicago where she studied Finance and Mathematical Computer Science. While she was there, she led the finance student organization and co-founded the Portfolio Management Team which is now one of the largest organizations in the college. She was also a part of numerous programs to help increase digital literacy in the community by partnering with Google and Blue1647. When she finds a problem, she seeks to solve it by taking action. She started a YouTube series, Hustlepreneur, where she showcases up-and-coming entrepreneurs by documenting their day. She grew up in India and suburbs of Chicago. Currently, she lives in Little Italy where you can find her exploring this beautiful city with her camera." ,twitter: "https://twitter.com/itsabhinaya" ,medium: "https://medium.com/@itsabhinaya" ,prev: "teamModal2" ,current: "teamModal3" ,next: "teamModal4" ,img: "img/team/abhinaya.jpg"},
{name: "Paul Meier", title: "Associate" ,desc: "Paul earned his Bachelor of Business Administration degree from the University of Wisconsin-Madison, studying abroad at the Hong Kong University of Science and Technology. After graduating, he worked in an operational role for a travel industry start-up in Uruguay before returning to his native Milwaukee. There, he spent ten years in a variety of financial management roles with operators in the industrial automation and manufacturing industries before earning his MBA from The University of Chicago Booth School of Business. Most recently, Paul has supported business development activities for a hospitality ecommerce start-up. He and his wife Sara are intrepid travelers, and they live in Chicago’s Streeterville neighborhood with their beloved Boston Terrier, Lou. In his free time, Paul enjoys playing drums, snowboarding, history, film, and keeping up with Wisconsin sports teams." ,twitter: "https://twitter.com/paullmeier" ,medium: "" ,prev: "teamModal3" ,current: "teamModal4" ,next: "teamModal5" ,img: "img/team/paul.jpg"},
{name: "Sherkhan Tagirov", title: "Student Analyst" ,desc: "Sherkhan is an undergraduate student attending the University of Illinois at Chicago where he studies Finance and Business Analytics. Since Freshman year, Sherkhan has been part of the Finance and Investment group and Portfolio management team at UIC and one year later assumed a leadership role in those organizations. Previously, he interned with ShiftGig where he worked with data team to prospect for new clients and for finance team auditing quarterly financial reports. Sherkhan was born and raised in Tashkent, Uzbekistan and moved to the US when he was 13 years old. In his free time, Sherkhan likes to visit Russian banya with his friends, read WSJ on the weekends, play chess and swim." ,twitter: "" ,medium: "" ,prev: "teamModal4" ,current: "teamModal5" ,next: "teamModal1" ,img: "img/team/sherkhan.jpg"},
{name: "Dorim Lee", title: "Chief of Staff" ,desc: "Dorim grew up in New York City before attending Drew University to gain her bachelor of arts degree in English and Theater.  After graduation, she had a brief stint as an assistant film editor and associate producer for NY Times Television and Lion Television.  She eventually landed a position at Lincoln Center for the Performing Arts assisting the Executive Director who was in charge of renovations for the campus.  From there she pursued her dreams of working for a startup after she gained a taste for it while working in an organization what was part of the NYU Polytechnic Incubators program.  During her free time, Dorim loves to travel, playwright, and one day hopes to write an article for Modern Love in the styles section of the NY Times." ,twitter: "https://twitter.com/dorim_lee" ,medium: "" ,prev: "teamModal5" ,current: "teamModal6" ,next: "" ,img: "img/team/dorim.jpg"}
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



