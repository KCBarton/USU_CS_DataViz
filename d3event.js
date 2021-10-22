// Appends a span element to the body
d3.select("body").append("span");

// Appends image element to the span
d3.select("span").append("img")
    // File path of the picture
    .attr("src", "Facebook.jpeg")
    // Defines the width
    .attr("width", 100)
    // Defines the height
    .attr("height", 100)
    // On double click, redirects to website
    .on("dblclick", function(){window.open("https://www.facebook.com/");})
    // On mouse over, logs what the mouse went in to
    .on("mouseover", function(){document.getElementById('div1').innerHTML = "In: Facebook";})
    // On mouse out, logs what the mouse left
    .on("mouseout", function(){document.getElementById('div2').innerHTML = "Out: Facebook";});

d3.select("span").append("img")
    .attr("src", "Instagram.jpeg")
    .attr("width", 100)
    .attr("height", 100)
    .on("dblclick", function(){window.open("https://www.instagram.com/");})
    .on("mouseover", function(){document.getElementById('div1').innerHTML = "In: Instagram";})
    .on("mouseout", function(){document.getElementById('div2').innerHTML = "Out: Instagram";});

d3.select("span").append("img")
    .attr("src", "Twitter.png")
    .attr("width", 100)
    .attr("height", 100)
    .on("dblclick", function(){window.open("https://twitter.com/");})
    .on("mouseover", function(){document.getElementById('div1').innerHTML = "In: Twitter";})
    .on("mouseout", function(){document.getElementById('div2').innerHTML = "Out: Twitter";});

d3.select("span").append("img")
    .attr("src", "WhatsApp.png")
    .attr("width", 100)
    .attr("height", 100)
    .on("dblclick", function(){window.open("https://www.whatsapp.com/");})
    .on("mouseover", function(){document.getElementById('div1').innerHTML = "In: WhatsApp";})
    .on("mouseout", function(){document.getElementById('div2').innerHTML = "Out: WhatsApp";});

d3.select("span").append("img")
    .attr("src", "Youtube.png")
    .attr("width", 100)
    .attr("height", 100)
    .on("dblclick", function(){window.open("https://www.youtube.com/");})
    .on("mouseover", function(){document.getElementById('div1').innerHTML = "In: Youtube";})
    .on("mouseout", function(){document.getElementById('div2').innerHTML = "Out: Youtube";});

d3.selectAll("img")
    .on("mouseenter", function(){d3.select(this.style.opacity = .5);})
    .on("mouseleave", function(){d3.select(this.style.opacity = 1);})
    .on("mousedown", function(){d3.select(this.height = 150); d3.select(this.width = 150);})
    .on("mouseup", function(){d3.select(this.height = 100); d3.select(this.width = 100);});





