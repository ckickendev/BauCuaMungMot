const arrayDice = [
  "dice_nai",
  "dice_bau",
  "dice_ga",
  "dice_ca",
  "dice_cua",
  "dice_tom",
];

$(document).ready(function () {
  var dices = $(".dice").toArray();
  dices.forEach((element) => {
    element.setAttribute("id", "dice_nai");
  });
  $("#rollstart").click(() => {
    const randomDices = setInterval(() => {
      dices.forEach((element) => {
        randomSetImg(element);
      });
    }, 50);
    setTimeout(() => {
      clearInterval(randomDices);
      handleResult();
      newRound()
    }, 3000);
  });
});


const newRound = () => {
  var spaceBauCua = $(".space .imgwapper .img_baucua").toArray();
  spaceBauCua.forEach(element => {
    console.log($(element).next()[0]);
    if($(element).next()[0]){
      $(element).next().remove();
    }
  })
}


const handleResult = () => {
  var dicesAfter = $(".dice").toArray();
  var resultNumber = [];
  dicesAfter.forEach((element) => {
    for (number in arrayDice) {
      if (arrayDice[number] === element.getAttribute("id")) {
        resultNumber.push(number);
      }
    }
  });
  console.log(resultNumber);

  var spaceBauCua = $(".space .imgwapper .img_baucua").toArray();
  let arrayBet = [];
  let count = 0;
  spaceBauCua.forEach((element) => {
    if ($(element).next()[0]) {
      const elementTMP = $(element).next()[0];
      const numberElementBet = Number($(elementTMP).val());
      arrayBet.push(numberElementBet);
    }else{
      arrayBet.push(0);
    }
  });
  console.log(arrayBet);


  let currentMoney = Number($("#money")[0].getAttribute("value"));
  const money = currentMoney;
  for(index in arrayBet){
    const appear = resultNumber.filter(e => e == index).length;
    console.log(appear);
    if(arrayBet[index] != 0 && appear ){
      currentMoney += arrayBet[index] * (appear + 1);
    }
  }
  console.log(currentMoney);a
  $("#money").html(currentMoney);
  $("#money")[0].setAttribute("value", currentMoney);
  if(money > currentMoney) {
    alert(`Xin chúc mừng !, bạn đã thắng ${money-currentMoney} đ trong vòng chơi này`);
  }else if(currentMoney > money){
    alert(`Bạn đã thua ${currentMoney-money} đ trong vòng chơi này`);
  }else{
    alert("Vòng này bạn hòa");
  }

};

const randomSetImg = (element) => {
  const random = Math.random() * 6;
  if (0 <= random && random < 1) {
    element.setAttribute("id", arrayDice[0]);
  } else if (1 <= random && random < 2) {
    element.setAttribute("id", arrayDice[1]);
  } else if (2 <= random && random < 3) {
    element.setAttribute("id", arrayDice[2]);
  } else if (3 <= random && random < 4) {
    element.setAttribute("id", arrayDice[3]);
  } else if (4 <= random && random < 5) {
    element.setAttribute("id", arrayDice[4]);
  } else if (5 <= random && random < 6) {
    element.setAttribute("id", arrayDice[5]);
  }
};
