const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code here

const priceList =document.querySelectorAll('.price');
let totalPrice = 0;

priceList.forEach(priceElement => {
    totalPrice += parseInt(priceElement.textContent);
});

const totalRow =  document.createElement('tr');
const ansElement = document.querySelector('#ans');

ansElement.textContent = `Total: Rs ${totalPrice}`;
totalRow.appendChild(ansElement);


const table = document.querySelector('table');
table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);


