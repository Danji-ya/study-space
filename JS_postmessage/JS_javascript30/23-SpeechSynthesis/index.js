(function(){
    const voicesDropdown = document.querySelector('[name="voice"]');
    const synth = window.speechSynthesis;
    const voices = [];

    const msg = new SpeechSynthesisUtterance();
    const speakButton = document.querySelector('#speak');
    const stopButton = document.querySelector('#stop');
    const options = document.querySelectorAll('[type="range"]');


    function settingVoices() {
        voices.push(...this.getVoices());

        voicesDropdown.innerHTML = voices
            .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
            .join('');
    }

    function startSpeak() {
        // 이전에 말하고 있는 단어 취소
        stopSpeak();

        const word = document.querySelector('[name="text"]');
        msg.text = word.value;
        msg.voice = voices.find(voice => voice.name === voicesDropdown.value);
        synth.speak(msg);
    }

    function stopSpeak() {
        synth.cancel();
    }

    function setOption() {
        msg[this.name] = this.value;
    }


    synth.addEventListener('voiceschanged', settingVoices);
    speakButton.addEventListener('click', startSpeak);
    stopButton.addEventListener('click', stopSpeak);
    [...options].map(option => option.addEventListener('change', setOption));
})();


