const playButton = document.getElementById('playButton');
const animatedElement = document.getElementById('BALL');

playButton.addEventListener('click', () => {
  animatedElement.style.animationPlayState = 'running';
});



RGBA(`
    vec2 uv = gl_FragCoord.xy/resolution - 0.5;
    uv.x *= resolution.x/resolution.y; 
    uv *= 10.;
    float a = uv.x + sin(cos(time/5.)*19.*uv.y);
    float b = uv.y - sin(cos(time/5.)*19.*uv.x);
    float f = a*sin(time) - b*cos(time);
    float v = smoothstep(.3, .7, f);
    gl_FragColor = vec4(v, v, v, 1.);
`);