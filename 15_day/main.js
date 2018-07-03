const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearAll = document.querySelector('[name=clearAll]');
const checkAll = document.querySelector('[name=checkAll]');
const uncheckAll = document.querySelector('[name=uncheckAll]');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);

  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {

  platesList.innerHTML = 'Loading Tapas...';
  if (!plates.length) {
    platesList.innerHTML = 'Please add some items first';
  } else {

    platesList.innerHTML = plates.map((plate, i) => {
      return `
			<li>
			  <input type="checkbox" data-index=${i} id="item${i}" ${plate.done
        ? 'checked'
        : ''} />
			  <label for="item${i}">${plate.text}</label>
			</li>
		  `;
    }).join('');
  }
}

function toggleDone(e) {
  if (!e.target.matches('input'))
    return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  bindList(items);
}

function clearAllItems() {
  items.length = 0;
  bindList(items);
}

function toggleAllItems(status) {
  const checkboxes = document.querySelectorAll('.plates input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = items[checkbox.dataset.index].done = status;
  });
  bindList(items);
}

function bindList(data) {
  localStorage.setItem('items', JSON.stringify(data));
  populateList(data, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearAll.addEventListener('click', clearAllItems);
checkAll.addEventListener('click', () => toggleAllItems(true));
uncheckAll.addEventListener('click', () => toggleAllItems(false));

populateList(items, itemsList);
