const cardImage = $("#cardImage");
const cardHeader = $("#cardHeader");
const cardTitle = $("#cardTitle");
const cardText = $("#cardText");
const cardBtn = $("#cardBtn");
const cardFooter = $("#cardFooter");

$(function () {
  $(
    "#formTitle, #formText, #formButton, #formImage, #formHeader , #formFooter, #formCenter, #formBorder"
  ).on("input", function () {
    createCard();
  });

  $("#resetCard").on("click", function () {
    resetCard();
  });
});

resetCard();
createCard();

function resetCard() {
  $('input[type="checkbox"]').prop("checked", true);
  $('input[type="checkbox"]')
    .not("#formText,#formButton,#formTitle")
    .prop("checked", false);
  createCard();
}

function createCard() {
  if ($("#formText").is(":checked")) {
    cardText.show();
  } else {
    cardText.hide();
  }

  if ($("#formTitle").is(":checked")) {
    cardTitle.show();
  } else {
    cardTitle.hide();
  }

  if ($("#formButton").is(":checked")) {
    cardBtn.show();
  } else {
    cardBtn.hide();
  }

  if ($("#formImage").is(":checked")) {
    cardImage.show();
  } else {
    cardImage.hide();
  }

  if ($("#formHeader").is(":checked")) {
    cardHeader.show();
  } else {
    cardHeader.hide();
  }

  if ($("#formFooter").is(":checked")) {
    cardFooter.show();
  } else {
    cardFooter.hide();
  }

  if ($("#formCenter").is(":checked")) {
    $(".card").addClass("text-center");
  } else {
    $(".card").removeClass("text-center");
  }

  if ($("#formBorder").is(":checked")) {
    $(".card").addClass("border border-primary shadow-0");
  } else {
    $(".card").removeClass("border border-primary shadow-0");
  }
  updateCardCode();
}

function updateCardCode() {
  let code = "";
  if ($("#formCenter").is(":checked") && $("#formBorder").is(":checked")) {
    code = '<div class="card border border-primary text-center">\n';
  } else if ($("#formBorder").is(":checked")) {
    code = '<div class="card border border-primary">\n';
  } else if ($("#formCenter").is(":checked")) {
    code = '<div class="card text-center">\n';
  } else {
    code = '<div class="card">\n';
  }

  if ($("#formImage").is(":checked")) {
    code +=
      '\t\t\t\t\t\t\t<div class="bg-image">\n\t\t\t\t\t\t\t\t<img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" class="img-fluid" />\n\t\t\t\t\t\t\t</div>\n';
  }
  if ($("#formHeader").is(":checked")) {
    code += '\t\t\t\t\t\t\t<div class="card-header">Featured</div>\n';
  }
  code += '\t\t\t\t\t\t\t<div class="card-body">\n';
  if ($("#formTitle").is(":checked")) {
    code += '\t\t\t\t\t\t\t\t<h5 class="card-title">Card title</h5>\n';
  }
  if ($("#formText").is(":checked")) {
    code += '\t\t\t\t\t\t\t\t<p class="card-text" id="cardText">\n';
    code +=
      "\t\t\t\t\t\t\t\t\tSome quick example text to build on the card title and make up the bulk of the card's content.\n";
    code += "\t\t\t\t\t\t\t\t</p>\n";
  }
  if ($("#formButton").is(":checked")) {
    code +=
      '\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary">Button</button>\n';
  }
  code += "\t\t\t\t\t\t\t</div>\n";
  if ($("#formFooter").is(":checked")) {
    code += '\t\t\t\t\t\t\t<div class="card-footer">2 days ago</div>\n';
  }
  code += "\t\t\t\t\t\t</div>";
  $("code.language-html").text(code);
  Prism.highlightAll();
}
