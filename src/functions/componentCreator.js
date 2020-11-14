const componentCreator = (tag, classWord) => {
    const moviesWrapper = document.createElement(tag);
    moviesWrapper.className = classWord;
    
    return moviesWrapper;
}

export default componentCreator;