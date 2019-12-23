function createSelectTime(timeStartElem, timeEndElem) {
    timeStartElem.innerHTML = '';
    timeEndElem.innerHTML = '';
    let hours = 0;
    let minutes = 0;

    for (let i = 0; i < (24 * 4); i++) {
        const optionStartTime = document.createElement('option');
        const optionEndTime = document.createElement('option');

        if (i === 0) {
            optionStartTime.setAttribute('selected', 'selected');
            optionEndTime.setAttribute('selected', 'selected');
        }

        let contentOption =
            `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

        optionStartTime.textContent = contentOption;
        optionEndTime.textContent = contentOption;
        optionStartTime.value = contentOption;
        optionEndTime.value = contentOption;

        timeStartElem.append(optionStartTime);
        timeEndElem.append(optionEndTime);

        minutes += 15;
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
    }
};

export { createSelectTime };
