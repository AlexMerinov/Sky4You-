window.app.rangeSliders = () => {
    const rangeSlider = document.getElementById('range-slider');

    if (rangeSlider) {
 
       noUiSlider.create(rangeSlider, {
          start: [80, 8000000],
          connect: true,
          step: 1,
          range: {
             'min': [80],
             'max': [8000000]
          },
       });
 
       const input0 = document.getElementById('input-0');
       const input1 = document.getElementById('input-1');
       const inputs = [input0, input1];
 
       rangeSlider.noUiSlider.on('update', function (values, handle) {
          inputs[handle].value = (values[handle]);
       });
 
       const setRangeSlider = (i, value) => {
          let arr = [null, null];
          arr[i] = value;
 
          rangeSlider.noUiSlider.set(arr);
       };
 
       inputs.forEach((el, index) => {
          el.addEventListener('change', (e) => {
             setRangeSlider(index, e.currentTarget.value)
          });
       });
    }
};

window.app.rangeSliders();