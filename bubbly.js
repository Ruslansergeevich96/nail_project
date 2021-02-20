bubbly({
  colorStart: '#bff2dc',
  colorStop: '#e5fff2',
  bubbles:15,
  bubbleFunc:() => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`
});