export default (infoSlider, setInfoSlider, time) => {
    return setInterval(() => {
        if (infoSlider === 'achievements') {
            setInfoSlider('opportunities');
        }
        else if (infoSlider === 'opportunities') {
            setInfoSlider('potential');
        }
        else if (infoSlider === 'potential') {
            setInfoSlider('achievements');
        }
    }
        , time)
}