$(document).ready(function () {
  if ($(window).width() < 1020) {
    $(".divider").attr("src", "style/images/pattern-divider-mobile.svg");
  }

  $(window).resize(function () {
    if ($(window).width() < 1020) {
      $(".divider").attr("src", "style/images/pattern-divider-mobile.svg");
    }

    if ($(document).width() > 1020) {
      $(".divider").attr("src", "style/images/pattern-divider-desktop.svg");
    }
  });

  if ($(document).width() > 1020) {
    $(".divider").attr("src", "style/images/pattern-divider-desktop.svg");
  }

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    $(".header").html(`ADVICE #${data.slip.id}`);
    $(".quote").html(`"${data.slip.advice}"`);
  };

  getAdvice();

  $(".dice-btn").click(function () {
    getAdvice();
  });
});
