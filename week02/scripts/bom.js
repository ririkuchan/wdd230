const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapter;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

        li.append(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});
