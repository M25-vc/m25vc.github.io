function getportfolioDetails(portfolio) {
	return `<a href="${portfolio.url}" target="_blank">
              <img class="item ${portfolio.class} isotope-item" src="img/portfolio/${portfolio.img}.jpg" alt="${portfolio.alt}" style="position: absolute; left: 0px; top: 0px; margin:20px;width:200px;height:100px;">
            </a>`;

}
function showportfolio(portfolioDetails) {
	document.querySelector(".portco-thumb").innerHTML += portfolioDetails;

}
portfolio.map(getportfolioDetails).forEach(showportfolio);




