

(function app(){
  var budget_value = document.querySelector('#budget_value');
  var budget_submit = document.querySelector('#budget_submit');
  var expense_name = document.querySelector('#expense_name');
  var expense_value = document.querySelector('#expense_value');
  var expense_submit = document.querySelector('#expense_submit');
  var budget_amount = document.querySelector('#budget_amount');
  var expense_amount = document.querySelector('#expense_amount');
  var balance_amount = document.querySelector('#balance_amount');
  var expense_title = document.querySelector('#expense_title');
  var expense_value_name = document.querySelector('#expense_value_name');

  function for_budget(){
    var budget_val = budget_value.value;
    if(budget_val){
      budget_amount.textContent = budget_val;
    }

    expense_a = parseInt(expense_amount.textContent)



    if(budget_val) calc_balance(budget_val, expense_a);
    if(budget_val) check_for_color(budget_val, expense_a, budget_amount);
    if(budget_val) check_for_color(budget_val, expense_a, balance_amount);
    if(budget_val) check_for_color(budget_val, expense_a, expense_amount);
    budget_value.value = "";
}

  function for_expense(){
    var expense_n = expense_name.value;
    var expense_v = expense_value.value;

    var p = document.createElement('p');
    p.innerHTML = `${expense_n}`;

    var p2 = document.createElement('p');
    p2.innerHTML = `${expense_v}`;


    expense_title.appendChild(p);
    expense_value_name.appendChild(p2);
    total_expense = parseInt(expense_amount.textContent) + parseInt(expense_v);
    if(total_expense){
      expense_amount.textContent = total_expense;
    }
    budget_a = parseInt(budget_amount.textContent);



    if(expense_v && total_expense) calc_balance(budget_a, total_expense);
    if(expense_v && total_expense) check_for_color(budget_a, total_expense, budget_amount);
    if(expense_v && total_expense) check_for_color(budget_a, total_expense, balance_amount);
    if(expense_v && total_expense) check_for_color(budget_a, total_expense, expense_amount);
    expense_value.value = '';
    expense_name.value = "";
  }


  function check_for_color(budget, expense, element){
    if(expense && budget){
      if(expense - budget > 0){
        element.style.color = 'red';
      }else if(expense - budget == 0){
        element.style.color = 'gray';
      }else{
        element.style.color = 'blue';
      }
    }

  }

  function calc_balance(budget, expense){
    var total = budget - expense;
    if(total){
      balance_amount.textContent = total;
    }


  }



  budget_submit.addEventListener('click', function(event){
    event.preventDefault();
    for_budget();
  })

  expense_submit.addEventListener('click', function(event){
    event.preventDefault();
    for_expense();
  })
})()
