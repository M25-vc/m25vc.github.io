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

{name: "Victor Gutwein", title: "Managing Partner" ,desc: "Victor grew up in northwestern Indiana before moving to Chicago to study economics at the University of Chicago. Victor has a passionate history with startups, including a vending machine business and kick scooter company, along with being on the board of UChicago’s first student-run venture fund. A Kauffman Fellow (Class 22) and former leader in Hyde Park Angels, Victor founded M25 in 2015 and quickly grew it to become the most active venture firm in the Midwest. Victor lives with his wife and three kids on the South Side of Chicago and loves staying active with running, biking, swimming, backpacking and any team sport you’ll let him join. If he can’t convince you to break a sweat with him though, he’ll usually succeed in getting you to try out a Euro-style board game (like Settlers of Catan) with his friends." ,twitter: "https://twitter.com/lalayak" ,linkedin: "https://www.linkedin.com/in/victor-gutwein/" ,medium: "https://medium.com/@lalayak" ,ride: "Uber" ,urating: "4.89" ,prev: "teamModal8" ,current: "teamModal1" ,next: "teamModal2",img: "img/team/victor.png" ,img2: "img/team/victor2.png"},
{name: "Mike Asem", title: "Founding Partner" ,desc: "As a fouding partner at M25, Mike has managed over 100 investments in early-stage companies. Outside of his responsibilities at M25, Mike is a Kauffman Fellow (Class 24) and a national board member of BLCK VC, leading initiatives in the Midwest to connect, engage, empower, and advance Black venture investors. Prior to M25, Mike founded The Anvil, a co-working space and startup incubator on Purdue University's campus, where he helped launch the first Purdue startup to be accepted to Y Combinator, and many more that have gone on to raise venture capital and get acquired. Mike lives in Chicago with his wife, Erikka, and in his free time, he enjoys making wine, eating sushi, following Chicago sports, and traveling." ,twitter: "https://twitter.com/DMikeAsem" ,linkedin: "https://www.linkedin.com/in/dmikeasem/" ,medium: "https://medium.com/@dmikeasem" ,ride: "Uber" ,urating: "4.88" ,prev: "teamModal1" ,current: "teamModal2" ,next: "teamModal3",img: "img/team/mike.png" ,img2: "img/team/mike2.png"},
{name: "Abhinaya Konduru", title: "Principal" ,desc: "Abhinaya is an Indian immigrant who grew up in the Chicago suburbs and attended the University of Illinois at Chicago. She studied Finance and Mathematical Computer Science and co-founded the Portfolio Management Team, one of the largest organizations at UIC. Her introduction to venture and entrepreneurship was through creating a YouTube video series interviewing local startup founders while in college. Along with that, she helped make some viral videos. <br><br> Aside from finding and investing in companies at M25, she helps founders find product-market fit with various strategies. Additionally, she is the co-moderator of Women In VC’s 500+ junior VC community, the world’s largest global community for women in VC residing on Slack. She founded AskVCs, a community of 200+ investors who ask and answer questions every week to learn from peers in a safe environment and lift each other. She works with 1 for 2 Education Foundation, a unique scholarship program employing a “pay it forward” model. Her favorite hobbies are cooking food for friends, spending time on corners of the internet, building side projects, and exploring unique locations." ,twitter: "https://twitter.com/itsabhinaya" ,linkedin: "https://www.linkedin.com/in/itsabhinaya/" ,medium: "https://medium.com/@itsabhinaya" ,ride: "Uber" ,urating: "4.93" ,prev: "teamModal2" ,current: "teamModal3" ,next: "teamModal4",img: "img/team/abhinaya.png" ,img2: "img/team/abhinaya2.png"},
{name: "Katie Birge", title: "Associate & Head of Platform" ,desc: "Katie is a lifelong Hoosier born and raised in Jasper, Indiana. She studied Communication and Classical Civilization at DePauw University before heading to Indiana University for her MA in Telecommunications (think social informatics and innovation communities...not telegrams and TVs). Katie’s thesis that startups will help the industrial Midwest rise again led her to the Bloomington Technology Partnership, where she started Bloomington Code School and co-founded an accelerator while growing the college town’s tech community. Katie has worked in the trenches of software companies and startups and most recently served as executive director of Launch Indy, an entrepreneurship center and coworking space. Katie is a long-time organizer of the Combine tech conference and in her free time, she collects plants and vacations across the 92 counties of Indiana." ,twitter: "https://twitter.com/kbirge" ,linkedin: "https://www.linkedin.com/in/katiebirge/" ,medium: "" ,ride: "Lyft" ,urating: "5" ,prev: "teamModal3" ,current: "teamModal4" ,next: "teamModal5",img: "img/team/katie.png" ,img2: "img/team/katie2.png"},
{name: "Leandro Bedolla", title: "Associate" ,desc: "Leandro is originally from Central Mexico, grew up in Joliet, IL, and graduated from Valparaiso University where he was recognized by their President for Outstanding Leadership and Service in student orgs and the community. Outside of his M25 responsibilities, he volunteers for LatinxVC on the Breaking into VC Fellowship and community teams, is the Latinx Incubator’s Investor in Residence, mentors for Techstars and NVCA/Venture Forward’s VC University, and is involved with VCFamilia. He was recognized by HBCUvc as a 2021 Emerging Venture Leader. Previously, Leandro was the associate for the Techstars Anywhere accelerator, in Tech Coast Angels’ analyst program, and built up Startup San Diego’s ecosystem as MD of sponsorships and a lead organizer for San Diego Startup Week." ,twitter: "https://twitter.com/Leandrobedolla_" ,linkedin: "https://www.linkedin.com/in/leandrobedolla/" ,medium: "" ,ride: "Uber" ,urating: "4.92" ,prev: "teamModal4" ,current: "teamModal5" ,next: "teamModal6",img: "img/team/leandro.png" ,img2: "img/team/leandro2.png"},
{name: "Arianna Thornton", title: "Operations Manager" ,desc: "Arianna is originally from Matteson, IL, a south suburb of Chicago. She graduated from Columbia College Chicago (’16) with a B.A. in Music Business and a minor in Public Relations. While attending Columbia, Arianna was involved with the Student Government Association as the Business & Entrepreneurship Department Senator. As the B&E Senator, she acted as the liaison between the college administration and the student body to maintain transparency and open communication. In 2016, Arianna was the Sponsorship & Communications Coordinator for Manifest, Columbia College’s Urban Arts Festival. Additionally, as Marketing Coordinator for TEDxColumbiaCollegeChicago, she helped develop and launch a marketing campaign promoting the theme “Ctrl+Alt+Del” where the audience was challenged to think outside the box and challenge the status quo. Currently, Arianna lives in the West Loop with her husband where she enjoys listening to music, having movie nights, and exploring the downtown area." ,twitter: "https://twitter.com/thornton_ari" ,linkedin: "https://www.linkedin.com/in/ariannathornton/" ,medium: "" ,ride: "Lyft" ,urating: "5" ,prev: "teamModal5" ,current: "teamModal6" ,next: "teamModal7",img: "img/team/arianna.png" ,img2: "img/team/arianna2.png"},
{name: "Sam Cavender", title: "Analyst" ,desc: "Sam is originally from Fishers, IN on the northeast side of Indianapolis. He spent three and a half years as a Certified Public Accountant, providing tax consulting and compliance services to ultra-high net worth venture capitalists and founders. He has lead developmental training on the taxation of securities & financial instruments, and has advised clients on topics including qualified small business stock, installment sales, and gift taxation. Sam graduated from the University of Notre Dame (’18) where he majored in Accounting and Applied and Computational Mathematics and Statistics (ACMS). During his time at Notre Dame, he worked as a Research Assistant to professors in both the Accounting and ACMS departments and was a student manager for the Notre Dame football team. Sam lives in the Andersonville neighborhood of Chicago where he enjoys playing board games, cooking new recipes, and exploring the city’s rich history and architecture." ,twitter: "https://twitter.com/scavender16" ,linkedin: "https://www.linkedin.com/in/samuel-cavender/" ,medium: "" ,ride: "Lyft" ,urating: "5" ,prev: "teamModal6" ,current: "teamModal7" ,next: "teamModal1",img: "img/team/sam.png" ,img2: "img/team/sam.png"},
{name: "Ruth Brungard", title: "Platform Associate" ,desc: "Ruth is a Florida-born-turned-Midwesterner from Carmel, IN. She studied Advertising at Ball State University and was involved in various organizations on campus. During her time at Ball State, Ruth worked as a student assistant to the Dean and helped plan various events and programs throughout the college and also served as President of the Ball State chapter of the American Advertising Federation, where she competed in many nationally-recognized advertising competitions. Prior to joining the team full-time as a Platform Associate, Ruth worked as a Platform Intern since the Summer of 2021. In her free time, she enjoys spending time with friends, caring for a variety of houseplants, staying fit, updating her Spotify playlist, or exploring new places." ,twitter: "https://twitter.com/ruthbrungard" ,linkedin: "https://www.linkedin.com/in/ruth-brungard-84095a193/" ,medium: "" ,ride: "Uber" ,urating: "5" ,prev: "teamModal7" ,current: "teamModal8" ,next: "",img: "img/team/ruth.png" ,img2: "img/team/ruth.png"}
 ]

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
             <div class="imageBox">
               <div class="imageInn">
                 <img src="${team.img}" class="rounded-circle imageBox" alt="${team.name}">
               </div>
               <div class="hoverImg">
                 <img src="${team.img2}" class="rounded-circle hoverImg" alt="${team.name}">
               </div>
                 <div class="external_link"><i class="fa fa-external-link fa-1x"></i></div>
             </div>
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
                  <p><i>${team.ride} Rating: ${team.urating}</i>
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



