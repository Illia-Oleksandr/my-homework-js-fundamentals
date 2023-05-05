     const btn = document.querySelector('.btn');
        const outBlock = document.querySelector('.out');

        btn.addEventListener('click', () => {
            const inputs = document.querySelectorAll('.arr');
            let data = {};

            inputs.forEach(input => {
                data[input.dataset.form] = input.value;
            });

            outBlock.textContent = JSON.stringify(data);
        });