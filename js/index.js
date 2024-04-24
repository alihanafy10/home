
const mediaQuery = window.matchMedia("(max-width: 768px)");

//news
let news = ["# الحرب على غزة", "اعتزال الاسطورة ميسي", "مباراة الاهلى اليوم"];
let pin = 0;
let timerId;

$(window).resize(function () {
  if ($(this).width() <= 768) {
    minResize();
  } 
});

function minResize() {
  clearInterval(timerId); // إيقاف المؤقت  (لو كان شغال)

  interval();

  $("#btnUp").on("click", function () {
    pin = (pin + 1) % news.length;
    console.log(pin);
    $("#dataNews").html(news[pin]);
  });
  $("#btnDown").on("click", function () {
    let x = pin - 1;
    pin = (x + news.length) % news.length;
    console.log(pin);
    $("#dataNews").html(news[pin]);
  });
}


if (mediaQuery.matches) {
  minResize();
} 

function interval() {
  timerId = setInterval(function () {
    if (pin < news.length) {
      $("#dataNews").html(news[pin]);
      pin++;
    } else {
      pin = 0;
    }
  }, 2000);
}


//rels
$(".slick-rels").slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  speed: 100,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  cssEase: "linear",
  rtl: true,
});









